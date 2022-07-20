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
                  N{{ singleContract.proposed_amount }}/word
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
                <h3 class="mb-2 mainColor">N {{ totalAmount }}</h3>
                <p class="darkGreyColor">Total Amount</p>
              </div>
              <!-- <div class="">
                <img src="../../../../assets/images/Ellipse29.png" alt="user" />
                <h3>{{ writerDetails.first_name }}</h3>
                <p>{{ writerDetails.role }}</p>
              </div> -->
            </div>
            <div class="mt-3">
              <p>
                <b>Date Submitted:</b> {{ proposalDate | dateSlice }}
              </p>
              <p v-if="singleContract.payment_mode === 'by_project'">
                <b>Payment Method:</b> Project based payment
              </p>
              <p v-else>Payment Method: Milestone based payment</p>
              <p>
                <b>Payment Status:</b>
                {{ singleContract.disbursed_writer_payment_status }}
              </p>
            </div>
            <div v-if="singleContract.assets">
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
            <h4 class="mainColor mt-3">Cover Letter</h4>
            <p class="my-5 mt-3">
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
                          v-if="milestones.isSubmittedForApproval"
                          :loading="isapproveMilestoneForPayment"
                          @click="approveMilestoneForPayment(singleContract.id, milestones.id)"
                          >Approve for Payment</v-btn
                        >
                        <v-btn
                          class="findBtn mb-4 mt-3 fullWidth"
                          disabled
                          v-if="milestones.status === 'approved_for_payment'"
                          >Approved for Payment</v-btn
                        >
                        <!-- <v-btn
                          class="findBtn mb-4 mt-3 fullWidth"
                          disabled
                          v-if="milestones.status === 'processing_payment'"
                          >Payment Processing</v-btn
                        >
                        <v-btn
                          class="findBtn mb-4 mt-3 fullWidth"
                          v-if="singleContract.status === 'completed'"
                          >Project Completed</v-btn
                        > -->
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
                v-if="singleContract.status === 'submitted_work_for_approval'"
                @click="() => {
                  this.submitReviewDialog = true;
                }"
              >
                Approve for Payment
              </v-btn>
              <v-btn
                class="findBtn mb-4 fullWidth"
                disabled
                v-if="singleContract.status === 'approved_for_payment'"
                >Approved for Payment</v-btn
              >
            </div>
            <v-btn
              class="findBtn mb-4 fullWidth"
              v-if="singleContract.status === 'completed' && singleContract.payment_mode === 'by_milestone' && !singleContract.feedback_comment"
              @click="() => {
                this.submitReviewDialog = true;
              }"
            >
              Submit a Review
            </v-btn>
            <v-btn class="greyBtn mb-4 fullWidth"
                target="_blank"
                :href="getMessageURL(writerDetails.id)"
              ><i class="far fa-comments mr-2 mainColor"></i> Contact</v-btn
            >
            <!-- <v-btn class="greyBtn mb-4 fullWidth"
              ><i class="far fa-trash-alt mr-2 mainColor"></i> Delete</v-btn
            > -->
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
          <v-col cols="auto">
            <v-dialog
              v-model="submitReviewDialog"
              transition="dialog-top-transition"
              max-width="600"
            >
              <template v-slot:default="submitReviewDialog">
                <v-card class="py-5">
                  <div class="centerflex columnFlex">
                    <v-card-text>
                      <h3 class="darkGreyColor textCenter">
                        What's your experience working with the freelancer?
                      </h3>
                      <div class="mt-5">
                      <div class="row">
                        <v-col cols="12" sm="12">
                          <div class="d-flex">
                          <span class="mt-3 mr-4">Rating:</span>
                          <star-rating v-model="review.rating" :increment="0.1" :active-color="'#008952'"></star-rating>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <span>Comment:</span>
                          <v-textarea
                            v-model.trim="review.comment"
                            auto-grow
                            outlined
                            rows="3"
                            row-height="15"
                            class="mt-3"
                            placeholder="Please comment on the freelancer performance"
                          ></v-textarea>
                        </v-col>
                      </div>
                    </div>
                    </v-card-text>
                  </div>
                  <div class="flex justifyCenter mobileColumn">
                    <v-btn class="findBtn mx-3 my-1" to="#" :disabled="reviewInfoNotFilled"
                      :loading="approveLoading" @click="approveProject"
                    >
                      {{ singleContract.payment_mode === 'by_project' ? 'Approve for Payment' : 'Submit a Review' }}
                    </v-btn>
                  </div>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="submitReviewDialog.value = false">Close</v-btn>
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
      submitReviewDialog: false,
      loading: false,
      declineloading: false,
      singleContract: "",
      pageLoading: false,
      writerDetails: "",
      proposalDate: "",
      dateWriterRegistered: "",
      approveLoading: false,
      jobDetails: "",
      totalAmount: "",
      review: {
        rating: 0,
        comment: ''
      },
      payment_milestones: [],
      pendingStatus: [
        'pending',
        'accepted',
        'submitted_work_for_approval',
        'approved_for_payment',
        'processing_payment'
      ],
      failedStatus: ['rejected', 'failed'],
      isapproveMilestoneForPayment: false
    };
  },
  methods: {
    getSingleContract() {
      this.singleContract = "";
      this.pageLoading = true;
      this.$store
        .dispatch("client/getSingleContract", this.$route.params.contract)
        .then(({ data }) => {
          this.pageLoading = false;
          this.singleContract = data.data;
          this.writerDetails = this.singleContract.writer;
          this.jobDetails = this.singleContract.job;
          this.proposalDate = this.singleContract.created_at;
          this.dateWriterRegistered = this.writerDetails.created_at;
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
                if(this.payment_milestones[i].status == 'submitted_work_for_approval'){
                  this.payment_milestones[i].isSubmittedForApproval = true
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
          // this.totalAmount =
          //   this.singleContract.price_per_word *
          //   this.jobDetails.number_of_words;
        })
        .catch((err) => {
          console.log(err);
          this.pageLoading = false;
          this.$toast.success("There was an error getting the job");
        });
    },
    async approveOneTimeJob() {
      try {
        this.approveLoading = true;
        const response = await this.$axios.post(
          `/v1/client/approve-completed-one-time-work/${this.singleContract.id}`, 
          this.review
        );
        this.approveLoading = false;
        this.$toast.success("This job has been approved for payment.");
        this.submitReviewDialog = false
        setTimeout(() => { location.reload() }, 2000)
      } catch (error) {
        this.approveLoading = false;
        this.$toast.error(
          "There was an error approving this contract for payment"
        );
      }
    },
    async approveMilestoneForPayment(contractId, milestoneId){
      try {
        this.isapproveMilestoneForPayment = true;
        const response = await this.$axios.post(
          `/v1/client/approve/${contractId}/milestone/${milestoneId}`
        );
        this.isapproveMilestoneForPayment = false;
        this.$toast.success("This Milestone has been approved for payment.");
        setTimeout(() =>{
          location.reload()
        }, 2000)
      } catch (error) {
        this.isapproveMilestoneForPayment = false;
        this.$toast.error(
          "There was an error submitting this milestone for review"
        );
      }
    },
    approveProject(){
      if(this.singleContract.payment_mode === 'by_project'){
        this.approveOneTimeJob()
      }else if(this.singleContract.payment_mode === 'by_milestone'){
        this.submitReview()
      }
    },
    async submitReview(){
      try {
        this.approveLoading = true;
        const response = await this.$axios.post(
          `/v1/client/submit-review/${this.singleContract.id}`, 
          this.review
        );
        this.approveLoading = false;
        this.$toast.success("Review submitted successfully.");
        this.submitReviewDialog = false
        setTimeout(() => { location.reload() }, 2000)
      } catch (error) {
        this.approveLoading = false;
        this.$toast.error(
          "There was an error submitting this review"
        );
      }
    }
  },
  mounted() {
    this.getSingleContract();
  },
  computed: {
    reviewInfoNotFilled(){
      if(!this.review.comment) return true
    }
  },
  filters: {
    dateSlice(data) {
      let str = data.toString();
      let res = str.slice(0, 10);
      return res;
    },
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
