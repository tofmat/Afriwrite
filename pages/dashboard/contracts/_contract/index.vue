<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Contract</h2>
      <div v-if="pageLoading">
        <spinner />
      </div>

      <div v-else>
        <h3 class="mt-5">Job Title: {{ jobDetails.title }}</h3>
        <div class="row">
          <v-col cols="12" sm="9">
            <div class="flex alignCenter mobileColumn mt-5">
              <div class="mr-10 infoCards" v-if="singleContract.price_per_word != 'null'">
                <h3 class="mb-2 mainColor">
                  N{{ singleContract.price_per_word }}/word
                </h3>
                <p class="darkGreyColor">Bid</p>
              </div>
              <div class="mr-10 infoCards">
                <h3 class="mb-2 mainColor">
                  {{ singleContract.duration }} Days
                </h3>
                <p class="darkGreyColor">Duration</p>
              </div>
              <div class="infoCards mr-10">
                <h3 class="mb-2 mainColor">N{{ totalAmount }}</h3>
                <p class="darkGreyColor">Total Amount</p>
              </div>
            </div>
            <div class="mt-5">
              <p><b>Date Submitted:</b> {{ proposalDate | dateSlice }}</p>
              <p v-if="singleContract.payment_mode === 'by_project'">
                <span class=""><b>Payment Method:</b></span> Project based
                payment
              </p>
              <p v-if="singleContract.payment_mode === 'by_milestone'">
                <span class=""><b>Payment Method:</b></span> Milestone based
                payment
              </p>
              <p>
                <b>Payment Status:</b>
                {{ singleContract.disbursed_writer_payment_status }}
              </p>
            </div>
            <div v-if="singleContract.asset && singleContract.assets.length > 0" class="mb-5">
              <h3>Attachments</h3>
              <row class="row">
                <v-col cols="6" sm="6">
                  <div
                    class="flex alignCenter mt-5"
                    v-for="media in singleContract.assets"
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
            <h4 class="mainColor">Cover Letter</h4>
            <p class="my-5">
              {{ singleContract.cover_letter }}
            </p>
            <div v-if="singleContract.payment_mode === 'by_milestone'"> 
              <h4 class="mainColor mt-3">Milestones</h4>
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
                      <th></th>
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
                        pending
                        </span>
                        <span class="text-success" v-if="milestones.status === 'completed'">
                        {{ milestones.status }}
                        </span>
                        <span class="text-danger" v-if="failedStatus.includes(milestones.status)">
                        {{ milestones.status }}
                        </span>
                      </td>
                      <td>
                        <v-btn
                          class="findBtn mb-4 mt-3 fullWidth"
                          v-if="milestones.isStatusPending"
                          @click="submitMilestoneForReview(singleContract.id, milestones.id)"
                          :loading="isSubmitMilestoneForReview"
                          >Submit for Review</v-btn
                        >
                        <v-btn
                          class="findBtn mb-4 mt-3 fullWidth"
                          v-if="milestones.isApprovedForPayment"
                          @click="requestMilestonePayment(milestones.id)"
                          :loading="approveLoading"
                          >Request for Payment</v-btn
                        >
                        <v-btn
                          class="findBtn mb-4 mt-3 fullWidth"
                          disabled
                          v-if="milestones.status === 'submitted_work_for_approval'"
                          >Submitted for approval</v-btn
                        >
                        <v-btn
                          class="findBtn mb-4 mt-3 fullWidth"
                          disabled
                          v-if="milestones.status === 'processing_payment'"
                          >Payment Processing</v-btn
                        >
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
          </v-col>
          <v-col cols="12" sm="3">
            <div v-if="singleContract.payment_mode === 'by_project'">
              <v-btn
                class="findBtn mb-4 fullWidth"
                v-if="singleContract.status === 'accepted'"
                @click="submitForReview()"
                :loading="approveLoading"
                >Submit for Review</v-btn
              >
              <v-btn
                class="findBtn mb-4 fullWidth"
                v-if="singleContract.status === 'approved_for_payment'"
                @click="requestOneTimePayment()"
                :loading="approveLoading"
                >Request for Payment</v-btn
              >
              <v-btn
                class="findBtn mb-4 fullWidth"
                disabled
                v-if="singleContract.status === 'submitted_work_for_approval'"
                >Submitted for approval</v-btn
              >
              <v-btn
                class="findBtn mb-4 fullWidth"
                disabled
                v-if="singleContract.status === 'processing_payment'"
                >Payment Processing</v-btn
              >
            </div>

              <v-btn
                class="findBtn mb-4 fullWidth"
                v-if="singleContract.status === 'completed'"
                >Project Completed</v-btn
              >
            <v-btn class="greyBtn mb-4 fullWidth" 
                target="_blank"
                :href="getMessageURL(clientDetails.id)"
              ><i class="far fa-comments mr-2 mainColor"></i> Contact Client</v-btn
            >
            <div>
              <div class="clientInfo">
                <h4>
                  <span
                    ><i class="far fa-user mr-2 mb-5"></i> ABOUT THE CLIENT
                  </span>
                </h4>
                <p class="mb-5 darkGreyColor">
                  <span>
                    Verified <i class="fas fa-certificate yellowColor"></i
                  ></span>
                </p>
                <h4>
                  {{ clientDetails.first_name }} {{ clientDetails.last_name }}
                </h4>
                <p class="mb-5">
                  Member since: {{ dateWriterRegistered | dateSlice }}
                </p>
              </div>
            </div>
          </v-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  scrollToTop: true,
  layout: "dashboard",
  data() {
    return {
      loading: false,
      declineloading: false,
      singleContract: {},
      pageLoading: false,
      clientDetails: {},
      proposalDate: "",
      dateWriterRegistered: "",
      approveLoading: false,
      isSubmitMilestoneForReview: false,
      jobDetails: "",
      paymentDetails: {
        recipient_code: "",
        job_proposal_id: "",
        description: "Thanks",
      },
      totalAmount: '',
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
    getSingleContract() {
      this.singleContract = "";
      this.pageLoading = true;
      this.$store
        .dispatch("writer/getSingleContract", this.$route.params.contract)
        .then(({ data }) => {
          this.pageLoading = false;
          this.singleContract = data.data;
          this.jobDetails = this.singleContract.job;
          this.clientDetails = this.jobDetails.client;
          this.dateWriterRegistered = this.clientDetails.created_at;
          this.proposalDate = this.singleContract.created_at;

          if(this.singleContract.payment_mode === 'by_project'){
            this.totalAmount = this.singleContract.price_per_word * this.jobDetails.number_of_words;
          }

          if(this.singleContract.payment_mode === 'by_milestone'){
            let total_amount = 0
            this.singleContract.payment_milestones.forEach(function (milestone) {
              return total_amount += parseInt(milestone.milestone_amount);
            })

            this.totalAmount = total_amount
            this.payment_milestones = this.singleContract.payment_milestones

            // get only the index that has pending status
            for(let i = 0; i < this.payment_milestones.length; i++){
                if(this.payment_milestones[i].status == 'pending'){
                  this.payment_milestones[i].isStatusPending = true
                  break
                }
            }

            // get only the index that has approved_for_payment status
            for(let i = 0; i < this.payment_milestones.length; i++){
                if(this.payment_milestones[i].status == 'approved_for_payment'){
                  this.payment_milestones[i].isApprovedForPayment = true
                  break
                }
            }
          }
        })
        .catch((err) => {
          console.log(err);
          this.pageLoading = false;
          this.$toast.success("There was an error getting the job");
        });
    },
    async submitForReview() {
      try {
        this.approveLoading = true;
        const response = await this.$axios.post(
          `/v1/writer/jobs/submit-whole-work-for-payment/${this.singleContract.id}`
        );
        this.approveLoading = false;
        this.$toast.success("This contract has been submitted for review.");
        setTimeout(() =>{
          location.reload()
        }, 2000)
      } catch (error) {
        this.approveLoading = false;
        this.$toast.error(
          "There was an error submitting this contract for review"
        );
      }
    },
    async requestOneTimePayment() {
      // if user has not created a recipient_code yet, do not proceed to payment
      if(!this.$auth.user.recipient_code){
        this.$toast.error(
          'Please add your account number to be abe to request for payment. Do this in your profile'
        );
        return
      }

      this.paymentDetails.recipient_code = this.$auth.user.recipient_code;
      this.paymentDetails.job_proposal_id = this.singleContract.id;
      this.paymentDetails.description = "I want to request for payment";
      try {
        this.approveLoading = true;
        const response = await this.$axios.post(
          `/v1/writer/jobs/request-payment-for-one-time-work`,
          this.paymentDetails
        );
        this.approveLoading = false;
        this.$toast.success("This contract has been submitted for payment.");
        setTimeout(() => {
          location.reload()
        }, 2000)
      } catch (error) {
        this.approveLoading = false;
        this.$toast.error(
          "There was an error submitting this contract for payment"
        );
      }
    },
    async submitMilestoneForReview(contractId, milestoneId){
      try {
        this.isSubmitMilestoneForReview = true;
        const response = await this.$axios.post(
          `/v1/writer/jobs/submit/${contractId}/milestone/${milestoneId}`
        );
        this.isSubmitMilestoneForReview = false;
        this.$toast.success("This Milestone has been submitted for review.");
        setTimeout(() =>{
          location.reload()
        }, 2000)
      } catch (error) {
        this.isSubmitMilestoneForReview = false;
        this.$toast.error(
          "There was an error submitting this milestone for review"
        );
      }

      console.log(contractId, milestoneId)
    },
    async requestMilestonePayment(milestoneId) {
      // if user has not created a recipient_code yet, do not proceed to payment
      if(!this.$auth.user.recipient_code){
        this.$toast.error(
          'Please add your account number to be abe to request for payment. Do this in your profile'
        );
        return
      }

      this.paymentDetails.recipient_code = this.$auth.user.recipient_code;
      this.paymentDetails.job_proposal_milestone_id = milestoneId;
      this.paymentDetails.description = "I want to request for miletone payment";
      try {
        this.approveLoading = true;
        const response = await this.$axios.post(
          `/v1/writer/jobs/request-payment-for-milestone-work`,
          this.paymentDetails
        );
        this.approveLoading = false;
        this.$toast.success("Your payment request has been accepted.");
        setTimeout(() => {
          location.reload()
        }, 2000)
      } catch (error) {
        this.approveLoading = false;
        this.$toast.error(
          "There was an error submitting this milestone for payment"
        );
      }
    },
  },
  async mounted() {
    const { data } = await this.$auth.fetchUser()
    if(data){
      this.$auth.setUser(data.data)
    }

    this.getSingleContract();
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
