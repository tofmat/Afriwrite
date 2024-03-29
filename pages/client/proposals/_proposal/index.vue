<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Proposal</h2>
      <div v-if="pageLoading">
        <spinner />
      </div>

      <div v-else>
        <h3 class="mt-5">Job Title: {{ jobDetails.title }}</h3>
        <div class="row">
          <v-col cols="12" sm="9">
            <div class="flex alignCenter mobileColumn">
              <div class="mr-10">
                <img
                v-if="writerDetails.profile_picture"
                  :src="writerDetails.profile_picture"
                  alt="user"
                  style="border-radius: 50%; width: 70px;"
                />
                <img src="../../../../assets/images/Ellipse29.png" alt="user" v-else/>
                <h3>{{ writerDetails.first_name }}</h3>
                <p>{{ writerDetails.role }}</p> 
              </div>
              <div class="mr-10 infoCards" v-if="singleProposal.price_per_word != 'null'">
                <h3 class="mb-2 mainColor">
                  N{{ singleProposal.price_per_word }}/word
                </h3>
                <p class="darkGreyColor">Bid</p>
              </div>
              <div class="mr-10 infoCards">
                <h3 class="mb-2 mainColor">
                  {{ singleProposal.duration }} Days
                </h3>
                <p class="darkGreyColor">Duration</p>
              </div>
              <div class="infoCards">
                <h3 class="mb-2 mainColor">N{{ totalAmount }}</h3>
                <p class="darkGreyColor">Total Amount</p>
              </div>
            </div>
            <div>
              <p>Date Submitted: {{ proposalDate | dateSlice }}</p>
            </div>
            <h4 class="mainColor">Cover Letter</h4>
            <p class="my-5">
              {{ singleProposal.cover_letter }}
            </p>
            <div
              class="mb-5"
              v-if="singleProposal.assets && singleProposal.assets.length > 0"
            >
              <h3>Attachments</h3>
              <row class="row">
                <v-col cols="6" sm="6">
                  <div
                    class="flex alignCenter mt-5"
                    v-for="media in singleProposal.assets"
                    :key="media.id"
                  >
                    <i class="fas fa-link mr-2"></i>
                    <a
                      :href="`${media.file}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="mainColor"
                      >{{ media.file | fileNameSlicee }}</a
                    >
                  </div>
                </v-col>
              </row>
            </div>
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn
              class="findBtn mb-4 fullWidth"
              v-if="singleProposal.status === 'accepted'"
              >View Contract</v-btn
            >
            <div v-else>
              <v-btn
                class="findBtn mb-4 fullWidth"
                @click="acceptProposal()"
                :loading="loading"
                >Accept Proposal</v-btn
              >
              <v-btn
                class="findBtn mb-4 fullWidth"
                @click="declineJobProposal()"
                :loading="declineloading"
                >Decline Proposal</v-btn
              >
            </div>
            <v-btn class="greyBtn mb-4 fullWidth" :href="getMessageURL(writerDetails.id)" target="_blank"
              ><i class="far fa-comments mr-2 mainColor"></i> Contact</v-btn
            >
            <div>
              <div class="clientInfo">
                <h4>
                  <span
                    ><i class="far fa-user mr-2 mb-5"></i> ABOUT THE FREELANCER
                  </span>
                </h4>
                <p class="mb-5 darkGreyColor">
                  <span>
                    Verified <i class="fas fa-certificate yellowColor"></i
                  ></span>
                </p>
                <h4>
                  {{ writerDetails.first_name }} {{ writerDetails.last_name }}
                </h4>
                <p class="mb-5">
                  Member since: {{ dateWriterRegistered | dateSlice }}
                </p>
              </div>
            </div>
          </v-col>

          <div class="milestones mt-5" col="12" v-show="payment_milestones.length">
            <h3 class="mb-3">Milestones</h3>
            <hr/>
            <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">S/N</th>
                        <th class="text-left">Description</th>
                        <th class="text-left">Expected Delivery Time</th>
                        <th class="text-left">Word Count</th>
                        <th class="text-left">Milestone Amount</th>
                        <th class="textCenter">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(milestones, index) in payment_milestones"
                        :key="milestones.id"
                      >
                        <td>
                          {{ index+1 }}
                        </td>
                        <td>
                          {{ milestones.description }}
                        </td>
                        <td>
                          {{ milestones.expected_time }}
                        </td>
                        <td>
                          {{ milestones.number_of_words }}
                        </td>
                        <td>
                            &#8358; {{ milestones.milestone_amount }}
                        </td>
                        <td>
                          <span class="text-warning" v-if="pendingStatus.includes(milestones.status)">
                          {{ milestones.status }}
                          </span>
                          <span class="text-success" v-if="milestones.status === 'completed'">
                          {{ milestones.status }}
                          </span>
                          <span class="text-danger" v-if="failedStatus.includes(milestones.status)">
                          {{ milestones.status }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </template>
            </v-simple-table>
          </div>

           <v-col cols="auto">
            <v-dialog
              v-model="submitPaymentDateDialog"
              transition="dialog-top-transition"
              max-width="600"
            >
              <template v-slot:default="submitPaymentDateDialog">
                <v-card class="py-5">
                  <div class="centerflex columnFlex">
                    <v-card-text>
                      <h3 class="darkGreyColor textCenter">
                        Please enter the date you will make payment?
                      </h3>
                      <div class="mt-5">
                      <div class="row">
                        <v-col cols="12" sm="12">
                          <v-date-picker
                            v-model="paymentDate"
                            :min="today()"
                          ></v-date-picker>
                        </v-col>
                      </div>
                    </div>
                    </v-card-text>
                  </div>
                  <div class="flex justifyCenter mobileColumn">
                    <v-btn class="findBtn mx-3 my-1" to="#" :disabled="!paymentDate"
                      :loading="loading" @click="submitPaymentDate"
                    >
                      Submit
                    </v-btn>
                  </div>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="submitPaymentDateDialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  scrollToTop: true,
  layout: "client",
  head: {
    script: [{ src: "https://js.paystack.co/v2/inline.js", body: true }],
  },
  data() {
    return {
      paymentDate: '',
      submitPaymentDateDialog: false,
      loading: false,
      declineloading: false,
      singleProposal: "",
      pageLoading: false,
      writerDetails: "",
      proposalDate: "",
      dateWriterRegistered: "",
      jobDetails: "",
      totalAmount: 0,
      payment_milestones: [],
      pendingStatus: [
        'pending',
        'accepted',
        'submitted_work_for_approval',
        'approved_for_payment',
        'processing_payment'
      ],
      failedStatus: ['rejected', 'failed']
    };
  },
  methods: {
    getSingleProposal() {
      this.singleProposal = "";
      this.pageLoading = true;
      this.$store
        .dispatch("client/getSingleProposal", this.$route.params.proposal)
        .then(({ data }) => {
          this.pageLoading = false;
          this.singleProposal = data.data;
          this.writerDetails = this.singleProposal.writer;
          this.jobDetails = this.singleProposal.job;
          this.proposalDate = this.singleProposal.created_at;
          this.dateWriterRegistered = this.writerDetails.created_at;
          if(this.singleProposal.payment_mode === 'by_project'){
            this.totalAmount = this.singleProposal.price_per_word * this.jobDetails.number_of_words;
          }

          if(this.singleProposal.payment_mode === 'by_milestone'){
            let total_amount = 0
            this.singleProposal.payment_milestones.forEach(function (milestone) {
              return total_amount += parseInt(milestone.milestone_amount);
            })

            this.totalAmount = total_amount
            this.payment_milestones = this.singleProposal.payment_milestones
          }
          console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
          this.pageLoading = false;
          this.$toast.success("There was an error getting the job");
        });
    },
    async acceptProposal() {
      if(this.singleProposal.job.is_bnpl_enabled){
        this.submitPaymentDateDialog = true
      }else{
        const that = this;
        var handler = PaystackPop.setup({
          key: "pk_test_d16ba2f6073caccc6adcac860d66d70ff969721a", // Replace with your public key
          ref: "" + Math.floor(Math.random() * 1000000000 + 1),
          email: this.$auth.user.email,
          amount: this.totalAmount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
          currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars
          callback: async (response) => {
            try {
              this.loading = true;
              var reference = response.reference;
              let paymentDetails = {
                payment_reference: reference,
                job_proposal_id: this.singleProposal.id,
              };
              await this.$axios.post(
                `/v1/client/accept-job-proposal/${this.singleProposal.public_reference_id}`,
                paymentDetails
              );
              this.$toast.success(
                "This proposal has been accepted and can be found in contracts"
              );
              this.loading = false;
              this.$router.push("/client/contracts")
            } catch {
              this.loading = false;
              this.$toast.error("There was an error accepting this proposal");
            }
          },
          onClose: function () {
            alert("Transaction was not completed, window closed.");
            this.loading = false;
          },
        });
        handler.openIframe();
      }
    },
    async submitPaymentDate(){
      try {
        this.loading = true;
        let paymentDetails = {
          client_payment_date: this.paymentDate,
          job_proposal_id: this.singleProposal.id,
        };
        await this.$axios.post(
          `/v1/client/accept-job-proposal/${this.singleProposal.public_reference_id}`,
          paymentDetails
        );
        this.$toast.success(
          "This proposal has been accepted and can be found in contracts"
        );
        this.loading = false;
        this.$router.push("/client/contracts")
      } catch {
        this.loading = false;
        this.$toast.error("There was an error accepting this proposal");
      }
    },
    async declineJobProposal() {
      try {
        this.declineloading = true;
        const response = await this.$axios.post(
          `/v1/client/decline-job-proposal/${this.singleProposal.public_reference_id}`
        );
        this.$toast.success("This proposal has been declined");
        this.$router.push("/client/proposals")
      } catch (error) {
        this.declineloading = false;
        this.$toast.error("There was an error declining this proposal");
      }
    },
  },
  mounted() {
    this.getSingleProposal();
  },
  computed: {
    
  },
  filters: {
    paystackFees: function (value) {
      let newvalue = Math.floor(value);
      if (newvalue > 126000) {
        return Math.floor((newvalue += 2000));
      } else {
        const payst = (1.5 / 100) * newvalue + 100;
        return (newvalue += payst);
      }
    },
  },
};
</script>

<style>
.infoCards {
  background-color: rgba(0, 137, 82, 0.05);
  border-radius: 15px;
  padding: 15px 30px;
}
.infoCards h3 {
  background-color: rgba(0, 137, 82, 0.2);
  width: fit-content;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  margin: auto;
}
.clientInfo {
  border-radius: 20px;
  background-color: #f8f8f8;
  padding: 20px;
  color: #4d4d4d;
}

.clientInfo h4 {
  color: #4d4d4d;
}

.text-warning{
  color: #FF8800;
}

.text-success{
  color: #007E33;
}
</style>
