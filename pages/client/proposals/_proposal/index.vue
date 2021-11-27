<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Proposal</h2>
      <div v-if="pageLoading">
        <spinner />
      </div>

      <div class="row" v-else>
        <v-col cols="12" sm="9">
          <div class="flex alignCenter mobileColumn">
            <div class="mr-10">
              <img src="../../../../assets/images/Ellipse29.png" alt="user" />
              <h3>{{ writerDetails.first_name }}</h3>
              <p>{{ writerDetails.role }}</p>
            </div>
            <div class="mr-10 infoCards">
              <h3 class="mb-2 mainColor">
                N{{ singleProposal.proposed_amount }}/word
              </h3>
              <p class="darkGreyColor">Bid</p>
            </div>
            <div class="mr-10 infoCards">
              <h3 class="mb-2 mainColor">{{ singleProposal.duration }} Days</h3>
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
          <div v-if="singleProposal.assets">
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
                    >{{ media.file | slicee }}</a
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
      singleProposal: "",
      pageLoading: false,
      writerDetails: "",
      proposalDate: "",
      dateWriterRegistered: "",
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
          this.totalAmount =
            this.singleProposal.proposed_amount *
            this.jobDetails.number_of_words;
        })
        .catch((err) => {
          console.log(err);
          this.pageLoading = false;
          this.$toast.success("There was an error getting the job");
        });
    },
    async acceptProposal() {
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
              `/v1/client/accept-job-proposal/${this.singleProposal.id}`,
              paymentDetails
            );
            this.$toast.success(
              "This proposal has been accepted and can be found in contracts"
            );
            this.loading = false;
            window.location = "/client/contracts";
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
    },
    async declineJobProposal() {
      try {
        this.declineloading = true;
        const response = await this.$axios.post(
          `/v1/client/decline-job-proposal/${this.singleProposal.id}`
        );
        this.$toast.success("This proposal has been declined");
        window.location = "/client/proposals";
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
    ...mapGetters({
      singleProposal: "client/singleProposal",
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
