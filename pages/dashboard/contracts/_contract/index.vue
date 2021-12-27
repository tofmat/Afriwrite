<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Contract</h2>
      <div v-if="pageLoading">
        <spinner />
      </div>

      <div class="row" v-else>
        <v-col cols="12" sm="9">
          <div class="flex alignCenter mobileColumn mt-5">
            <div class="mr-10 infoCards">
              <h3 class="mb-2 mainColor">
                N{{ singleContract.proposed_amount }}/word
              </h3>
              <p class="darkGreyColor">Bid</p>
            </div>
            <div class="mr-10 infoCards">
              <h3 class="mb-2 mainColor">{{ singleContract.duration }} Days</h3>
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
            <p>Date Submitted: {{ proposalDate | dateSlice }}</p>

            <p v-if="singleContract.payment_mode === 'by_project'">
              Payment Method: Project based payment
            </p>
            <p v-else>Payment Method: Milestone based payment</p>
            <p>
              Payment Status:
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
              v-if="singleContract.submitted_work_for_approval === 'submitted'"
              @click="approveOneTimeJob()"
              :loading="approveLoading"
              >Approve for Payment</v-btn
            >
            <v-btn class="findBtn mb-4 fullWidth" disabled v-else
              >Approved for Payment</v-btn
            >
          </div>

          <v-btn class="greyBtn mb-4 fullWidth"
            ><i class="far fa-comments mr-2 mainColor"></i> Contact</v-btn
          >
          <v-btn class="greyBtn mb-4 fullWidth"
            ><i class="far fa-trash-alt mr-2 mainColor"></i> Delete</v-btn
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  scrollToTop: true,
  layout: "client",
  head: {
    script: [{ src: "https://js.paystack.co/v2/inline.js", body: true }],
  },
  data() {
    return {
      loading: false,
      declineloading: false,
      singleContract: "",
      pageLoading: false,
      writerDetails: "",
      proposalDate: "",
      dateWriterRegistered: "",
      approveLoading: false,
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
    async approveOneTimeJob() {
      try {
        this.approveLoading = true;
        const response = await this.$axios.post(
          `/v1/client/approve-completed-one-time-work/${this.singleContract.id}`
        );
        this.approveLoading = false;
        this.$toast.success("This job has been approved for payment.");
      } catch (error) {
        this.approveLoading = false;
        this.$toast.error(
          "There was an error approving this contract for payment"
        );
      }
    },
  },
  mounted() {
    this.getSingleContract();
  },
  computed: {
    ...mapGetters({
      singleContract: "client/singleContract",
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
</style>
