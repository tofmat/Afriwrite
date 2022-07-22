<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Pending BNPL contracts Payment</h2>
      <div class="mt-10 table">
        <v-card>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">S/N</th>
                  <th class="text-left">Client Name</th>
                  <th class="text-left">Client Email</th>
                  <th class="text-left">Job Title</th>
                  <th class="text-left">Job Description</th>
                  <th class="text-left">Freelancer Name</th>
                  <th class="text-left">Freelancer Email</th>
                  <th class="text-left">Payment Due Date</th>
                  <th class="text-left">Payment Status</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(bnplrequest, index) in bnplRequests"
                  :key="bnplrequest.id"
                >
                  <td>
                    {{ index+1 }}
                  </td>
                  <td>
                    {{ bnplrequest.job.client.first_name }}  {{ bnplrequest.job.client.last_name }}
                  </td>
                  <td>
                    {{ bnplrequest.job.client.email }}
                  </td>
                  <td>
                    {{ bnplrequest.job.title }}
                  </td>
                  <td>
                    {{ bnplrequest.job.description | descriptionSlice }} ...
                  </td>
                  <td>
                    {{ bnplrequest.writer.first_name }}  {{ bnplrequest.writer.last_name }}
                  </td>
                  <td>
                    {{ bnplrequest.writer.email }}
                  </td>
                  <td>
                    {{ humanFriendlyDate(bnplrequest.client_payment_date) }}
                  </td>
                  <td>
                    <span class="text-success" v-if="bnplrequest.is_payment_complete">
                      Paid
                    </span>
                    <span class="text-warning" v-else>
                      Pending
                    </span>
                  </td>
                  <td>
                    <v-btn class="findBtn mb-4 mt-3 fullWidth"
                      @click="openMessageModal(bnplrequest)"
                    >
                      Send Message To Chat Room</v-btn>
                  </td>
                  <td>
                    <v-btn class="findBtn mb-4 mt-3 fullWidth"
                      @click="openSuspensionModal(bnplrequest)"
                      v-if="!bnplrequest.is_payment_complete"
                    >
                      Suspend Client</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <v-col cols="auto">
          <v-dialog
            v-model="messageDialog"
            persistent
            transition="dialog-top-transition"
            max-width="600"
          >
            <v-card class="py-5">
              <div class="centerflex columnFlex">
                <v-card-text>
                  <div class="row">
                    <v-col cols="12" sm="12">
                      <span>Message:</span>
                      <v-textarea
                        v-model.trim="selectedClient.content"
                        auto-grow
                        outlined
                        rows="10"
                        row-height="15"
                        class="mt-3"
                        placeholder="Please write a descriptive message"
                      ></v-textarea>
                    </v-col>
                  </div>
                </v-card-text>
              </div>
              <div class="flex justifyCenter mobileColumn">
                <v-btn text 
                  @click="() => {
                    this.messageDialog = false;
                  }"
                >
                  Cancel
                </v-btn>

                <v-btn class="greyBtn mx-3 my-1" 
                  :disabled="!selectedClient.content"
                  @click="sendMessage"
                  :loading="loading"
                >
                  Send Message
                </v-btn>
              </div>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="auto">
          <v-dialog
            v-model="suspensionDialog"
            persistent
            transition="dialog-top-transition"
            max-width="600"
          >
            <v-card class="py-5">
              <div class="centerflex columnFlex">
                <v-card-text>
                  <div class="row">
                    <v-col cols="12" sm="12">
                      <span>Reason for Suspension:</span>
                      <v-textarea
                        v-model.trim="suspendClient.suspension_note"
                        auto-grow
                        outlined
                        rows="10"
                        row-height="15"
                        class="mt-3"
                        placeholder="Please write a detailed reason for the suspension"
                      ></v-textarea>
                    </v-col>
                  </div>
                </v-card-text>
              </div>
              <div class="flex justifyCenter mobileColumn">
                <v-btn text 
                  @click="() => {
                    this.suspensionDialog = false;
                  }"
                >
                  Cancel
                </v-btn>

                <v-btn class="greyBtn mx-3 my-1" 
                  :disabled="!suspendClient.suspension_note"
                  @click="suspendUser()"
                  :loading="loading"
                >
                  Send Message
                </v-btn>
              </div>
            </v-card>
          </v-dialog>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Constants } from '../../static/constants'
export default {
  layout: 'admin',
  data(){
    return {
      search: '',
      bnplRequests: [],
      messageDialog: false,
      suspensionDialog: false,
      selectedClient:{
        client_id: '',
        writer_id: '',
        content: '',
        type: this.$auth.user.role,
        sent_by_admin: this.$auth.user.id,
      },
      suspendClient:{
        user_id: '',
        suspension_note: ''
      },
      loading: false
    }
  },
  mounted(){
    this.getClientDetails()
  },
  methods:{
    async getClientDetails(){
       const { data, error } = await this.$axios.get(`/v1/bnpl/get-pending-contracts-payment`);

      if(data && data.data){
        this.bnplRequests = data.data
        console.log(this.bnplRequests)
      }

      if(error){
        throw error
      }
    },
    viewClient(job){
      this.selectedClient.contract_proofs = job.bnpl_contract_proof_assets.length ? job.bnpl_contract_proof_assets.split(',') : []
      this.selectedClient.job_id = job.id
      this.dialog = true
    },
    async updateClientBNPLJobStatus(){
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/bnpl/update-temporary-job-post/${this.selectedClient.job_id}`,
          this.selectedClient
        );
        this.$toast.success("Successful");
        this.loading = false;
        this.dialog = false;

        // reset form
        this.selectedClient.status = ""
        this.selectedClient.comment = ""
        this.getClientDetails()
        return response;
      } catch (error) {
        this.loading = false;
        console.log(error.response)
        this.$toast.error(error.response.data.error);
      }
    },
    openMessageModal(param){
      this.selectedClient.client_id = param.job.client.id,
      this.selectedClient.writer_id = param.writer.id
      this.messageDialog = true
    },
    openSuspensionModal(param){
      this.suspendClient.user_id = param.job.client.id,
      this.suspensionDialog = true
    },
    async sendMessage(){
      try {
        this.loading = true;
        const response = await axios.post(`${Constants.CHAT_BASE_URL}/api/admin/send-broadcast`, 
          this.selectedClient, {
            headers: {
              CHATAPISIGNINGKEY: Constants.CHAT_API_SIGNING_KEY
            }
          },
        )
        this.$toast.success("Message Sent");
        this.loading = false;
        this.dialog = false;

        // reset form
        this.selectedClient.writer_id = ""
        this.selectedClient.client_id = ""
        this.selectedClient.content = ""
        this.messageDialog = false
        this.getClientDetails()
        return response;
      } catch (error) {
        this.loading = false;
        console.log(error.response)
        this.$toast.error("An error occurred");
      }
    },
    async suspendUser(){
       try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/user/suspend`,
          this.suspendClient
        );
        this.$toast.success("Successful");
        this.loading = false;
        this.suspensionDialog = false;

        // reset form
        this.suspendClient.status = ""
        this.suspendClient.suspension_note = ""
        this.getClientDetails()
        return response;
      } catch (error) {
        this.loading = false;
        console.log(error.response)
        this.$toast.error(error.response.data.error);
      }
    }
  }
}
</script>

<style>

.normalInput2 {
  background: #ececec;
  padding: 5px 15px;
  height: 35px;
  border-radius: 5px;
  width: 250%;
}
</style>