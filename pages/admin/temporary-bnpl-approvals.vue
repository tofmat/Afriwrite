<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Jobs With BNPL Temporay Approval</h2>
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
                    {{ bnplrequest.first_name }}  {{ bnplrequest.last_name }}
                  </td>
                  <td>
                    {{ bnplrequest.email }}
                  </td>
                  <td>
                    {{ bnplrequest.title }}
                  </td>
                  <td>
                    {{ bnplrequest.description }}
                  </td>
                  <td>
                    <v-btn class="findBtn mb-4 mt-3 fullWidth"
                      @click="viewClient(bnplrequest)"
                    >
                      View Proof</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <v-col cols="auto">
          <v-dialog
            v-model="dialog"
            persistent
            transition="dialog-top-transition"
            max-width="600"
          >
            <v-card class="py-5">
              <div class="centerflex columnFlex">
                <v-card-text>
                  <p class="mt-5">
                    <b>Uploaded Proofs:</b>
                  </p>
                  <div class="row">
                    <img
                      v-for="photo in selectedClient.contract_proofs"
                      :key="photo"
                      :src="photo"
                      alt="avatar"
                      width="250"
                      class="mr-4 mb-3 ml-3"
                  />
                  </div>
                  <div class="row">
                    <v-col cols="12" sm="12">
                      <div class="d-flex">
                      <span class="mt-3 mr-4">Status:</span>
                      <div>
                        <select
                          class="selectBank normalInput2 fullWidth form-control mt-2"
                          v-model="selectedClient.status"
                        >
                          <option value="">-- select status --</option>
                          <option value="failed">Decline</option>
                          <option value="completed">Approve</option>
                        </select>
                      </div>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="12" v-if="selectedClient.status === 'failed'">
                      <span>Comment:</span>
                      <v-textarea
                        v-model.trim="selectedClient.comment"
                        auto-grow
                        outlined
                        rows="3"
                        row-height="15"
                        class="mt-3"
                        placeholder="Comment on the provided document(s)"
                      ></v-textarea>
                    </v-col>
                  </div>
                </v-card-text>
              </div>
              <div class="flex justifyCenter mobileColumn">
                <v-btn text 
                  @click="() => {
                    this.dialog = false;
                  }"
                >
                  Cancel
                </v-btn>

                <v-btn class="greyBtn mx-3 my-1" 
                  :disabled="updateInfoNotFilled"
                  @click="updateClientBNPLJobStatus"
                  :loading="loading"
                >
                  Submit
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
export default {
  layout: 'admin',
  data(){
    return {
      isSubmitMilestoneForReview: false,
      payment_milestones: [],
      search: '',
      bnplRequests: [],
      dialog: false,
      selectedClient:{
        client_id: '',
        comment: '',
        status: '',
        id_photos: [],
        profile_picture: '',
        bnpl_request_id: ''
      },
      loading: false
    }
  },
  computed:{
    updateInfoNotFilled(){
      if(!this.selectedClient.status || 
        (this.selectedClient.status === 'failed' && !this.selectedClient.comment)
      ) return true
    }
  },
  mounted(){
    this.getClientDetails()
  },
  methods:{
    async getClientDetails(){
       const { data, error } = await this.$axios.get(`/v1/bnpl/get-temporary-approvals`);

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
    }
  }
}
</script>

<style>
.ProfilePic{
  display: table;
  margin-right: auto;
  margin-left: auto;
}
.normalInput2 {
  background: #ececec;
  padding: 5px 15px;
  height: 35px;
  border-radius: 5px;
  width: 250%;
}
.selectBank {
  -webkit-appearance: auto;
}
</style>