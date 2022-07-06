<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Buy Now Pay Later Requests</h2>
      <div class="mt-10 table">
        <v-card>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">S/N</th>
                  <th class="text-left">Full Name</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Reason</th>
                  <th class="text-left">Facebook Link</th>
                  <th class="text-left">Twitter Link</th>
                  <th class="text-left">Instagram Link</th>
                  <th class="text-left">Linkedin Link</th>
                  <th class="text-left">Country</th>
                  <th class="text-left">Phone Number</th>
                  <th class="text-left">Status</th>
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
                    {{ bnplrequest.user.first_name }}  {{ bnplrequest.user.last_name }}
                  </td>
                  <td>
                    {{ bnplrequest.user.email }}
                  </td>
                  <td>
                    {{ bnplrequest.reason }}
                  </td>
                  <td>
                    <a target="_blank" :href="bnplrequest.facebook_link">
                      {{ bnplrequest.facebook_link }}
                    </a>
                  </td>
                  <td>
                    <a target="_blank" :href="bnplrequest.twitter_link">
                      {{ bnplrequest.twitter_link }}
                    </a>
                  </td>
                  <td>
                    <a target="_blank" :href="bnplrequest.instagram_link">
                      {{ bnplrequest.instagram_link }}
                    </a>
                  </td>
                  <td>
                    <a target="_blank" :href="bnplrequest.linkedin_link">
                      {{ bnplrequest.linkedin_link }}
                    </a>
                  </td>
                  <td>
                    {{ bnplrequest.user.country }}
                  </td>
                  <td>
                    {{ bnplrequest.user.phone_number }}
                  </td>
                  <td>
                    {{ bnplrequest.status }}
                  </td>
                  <td>
                    <v-btn class="findBtn mb-4 mt-3 fullWidth"
                      @click="viewClient(bnplrequest.user, bnplrequest.id)"
                      v-if="bnplrequest.status === 'pending'"
                    >
                      View ID</v-btn>
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
                  <p class="mt-2">
                    <b>Client Profile Picture:</b>
                  </p>
                  <img
                    :src="selectedClient.profile_picture"
                    alt="avatar"
                    width="250"
                    class="ProfilePic mb-5"
                  />
                  <p class="mt-5">
                    <b>Uploaded Ids:</b>
                  </p>
                  <div class="row">
                    <img
                      v-for="photo in selectedClient.id_photos"
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
                    <v-col cols="12" sm="12">
                      <span>Comment:</span>
                      <v-textarea
                        v-model.trim="selectedClient.comment"
                        auto-grow
                        outlined
                        rows="3"
                        row-height="15"
                        class="mt-3"
                        placeholder="Comment on the client identity"
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
                  @click="updateClientBNPLRequestStatus"
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
      if(!this.selectedClient.status || !this.selectedClient.comment) return true
    }
  },
  mounted(){
    this.getClientDetails()
  },
  methods:{
    async getClientDetails(){
       const { data, error } = await this.$axios.get(`/v1/admin/get-clients-bnpl-requests`);

      if(data && data.data){
        this.bnplRequests = data.data
      }

      if(error){
        throw error
      }
    },
    viewClient(client, bnpl_request_id){
      this.selectedClient.client_id = client.id
      this.selectedClient.id_photos = client.id_file_url.length ? client.id_file_url.split(',') : []
      this.selectedClient.profile_picture = client.profile_picture
      this.selectedClient.bnpl_request_id = bnpl_request_id
      this.dialog = true
    },
    async updateClientBNPLRequestStatus(){
       try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/admin/update-client-bnpl-request-status/${this.selectedClient.bnpl_request_id}`,
          this.selectedClient
        );
        this.$toast.success("Successful");
        this.loading = false;
        this.dialog = false;
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