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
              <div class="mr-10 infoCards">
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
                <h3 class="mb-2 mainColor">N{{ totalAmount }}</h3>
                <p class="darkGreyColor">Total Amount</p>
              </div>
              <!-- <div class="">
                <img src="../../../../assets/images/Ellipse29.png" alt="user" />
                <h3>{{ writerDetails.first_name }}</h3>
                <p>{{ writerDetails.role }}</p>
              </div> -->
            </div>
            <div class="mt-3">
              <p>Date Submitted: {{ proposalDate | dateSlice }}</p>
              <p v-if="singleContract.payment_mode === 'by_project'">
                <span class="mainColor">Payment Method:</span> Project based
                payment
              </p>
              <p v-else>
                <span class="mainColor">Payment Method:</span> Milestone based
                payment
              </p>
              <p>
                Payment Status:
                {{ singleContract.disbursed_writer_payment_status }}
              </p>
            </div>
            <div v-if="singleContract.assets > 0">
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
                      >{{ media.file | slicee }}</a
                    >
                  </div>
                </v-col>
              </row>
            </div>
            <h4 class="mainColor mt-3">Milestones</h4>
            <p class="mt-3">Milestone One</p>
            <p>Milestone Two</p>
            <h4 class="mainColor">Cover Letter</h4>
            <p class="my-5">
              {{ singleContract.cover_letter }}
            </p>
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
                v-if="
                  singleContract.status === 'approved_for_payment' &&
                  !this.$auth.user.recipient_code
                "
                @click="
                  () => {
                    this.$toast.error(
                      'Please add your account number to be abe to request for payment. Do this in your profile'
                    );
                  }
                "
                >Request for Payment</v-btn
              >
              <v-btn
                class="findBtn mb-4 fullWidth"
                v-if="
                  singleContract.status === 'approved_for_payment' &&
                  this.$auth.user.recipient_code
                "
                @click="requestPayment()"
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
            <v-btn class="greyBtn mb-4 fullWidth" @click="contactRecipient"
              ><i class="far fa-comments mr-2 mainColor"></i> Contact</v-btn
            >
            <!-- <v-btn class="greyBtn mb-4 fullWidth"
              ><i class="far fa-trash-alt mr-2 mainColor"></i> Delete</v-btn
            > -->
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
import { mapGetters } from "vuex";

export default {
  scrollToTop: true,
  layout: "dashboard",
  data() {
    return {
      loading: false,
      declineloading: false,
      singleContract: "",
      pageLoading: false,
      clientDetails: "",
      proposalDate: "",
      dateWriterRegistered: "",
      approveLoading: false,
      jobDetails: "",
      paymentDetails: {
        recipient_code: "",
        job_proposal_id: "",
        description: "Thanks",
      },
    };
  },
  methods: {
    contactRecipient() {
      window.location.assign(
        `http://afriwrites-chat-system.herokuapp.com/create-chat?user_id=${this.$auth.user.id}&recipient_id=${this.clientDetails.id}&email=${this.$auth.user.email}&signature_key=$2y$10$jXZolJaVBfwnAUM1qMR3Ju7MGvqFrrqW119gzcHZXgsKTQDnijl3y`
      );
    },
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
          this.totalAmount =
            this.singleContract.proposed_amount *
            this.jobDetails.number_of_words;
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
      } catch (error) {
        this.approveLoading = false;
        this.$toast.error(
          "There was an error submitting this contract for review"
        );
      }
    },
    async requestPayment() {
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
      } catch (error) {
        this.approveLoading = false;
        this.$toast.error(
          "There was an error submitting this contract for payment"
        );
      }
    },
  },
  mounted() {
    this.getSingleContract();
  },
  computed: {
    ...mapGetters({
      singleContract: "writer/singleContract",
    }),
  },
  filters: {
    slicee(data) {
      let str = data.toString();
      let res = str.slice(86);
      return res;
    },
    dateSlice(data) {
      let str = data.toString();
      let res = str.slice(0, 10);
      return res;
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
</style>
