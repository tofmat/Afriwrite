<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">All Contracts</h2>
      <div class="flex my-5">
        <input type="text" placeholder="Search contracts" class="mainSearch" />
        <input class="submitSearch" type="submit" value="" />
      </div>
      <div class="allProposals">
        <v-tabs color="green darken-3">
          <v-tab>Active</v-tab>
          <v-tab-item class="mt-5">
            <div>
              <div class="mt-5">
                <div v-if="apiLoading">
                  <div class="sectionTitle mb-5 px-3 flex justifyBetween">
                    <div>
                      <skeleton-box width="10%" />
                    </div>
                    <p class="darkGreyColor noMargin">View all</p>
                  </div>
                  <div class="row noMargin lightGreyBack">
                    <v-col
                      cols="12"
                      sm="3"
                      class="jobDesc flex flexColumn justifyCenter"
                    >
                      <div>
                        <skeleton-box width="50%" />
                      </div>
                      <div>
                        <skeleton-box width="20%" />
                      </div>
                      <div>
                        <skeleton-box width="30%" />
                      </div>
                      <skeleton-box width="70%" />
                    </v-col>
                    <v-col cols="12" sm="7">
                      <div>
                        <skeleton-box width="10%" />
                      </div>
                      <div>
                        <skeleton-box width="5%" height="10px" />
                      </div>
                      <div>
                        <skeleton-box width="30%" />
                      </div>
                      <div>
                        <skeleton-box width="40%" />
                      </div>
                      <div>
                        <skeleton-box width="90%" />
                      </div>
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-btn class="findBtn my-1 fullWidth" to="#" disabled
                        >View Details</v-btn
                      >
                      <v-btn class="greyBtn mb-4 fullWidth" disabled>
                        Approve for Payment</v-btn
                      >
                    </v-col>
                  </div>
                </div>
                <div v-else>
                  <div v-if="allContracts.length > 0">
                    <div
                      class="row noMargin lightGreyBack"
                      v-for="contract in allContracts"
                      :key="contract.id"
                    >
                      <div class="proposalOffers">
                        <div class="jobInfo">
                          <div class="row noMargin">
                            <v-col
                              cols="12"
                              sm="3"
                              class="jobDesc flex flexColumn justifyCenter"
                            >
                              <h3>{{ contract.created_at | dateSlice }}</h3>
                              <h3>Freelancer</h3>
                              <p>
                                {{ contract.proposals[0].writer.first_name }}
                              </p>
                            </v-col>
                            <v-col cols="12" sm="6" class="jobDesc">
                              <div
                                class="
                                  flex
                                  alignCenter
                                  jobControl
                                  justifyBetween
                                "
                              >
                                <h2 class="mainColor noMargin">
                                  {{ contract.title }}
                                </h2>
                              </div>
                              <p>
                                {{ contract.description | descriptionSlice }}
                                ....
                              </p>
                            </v-col>
                            <v-col cols="12" sm="3">
                              <v-btn
                                class="findBtn my-1 fullWidth"
                                :to="`/client/contracts/${contract.proposals[0].id}`"
                                >View Details</v-btn
                              >
                              <v-btn
                                class="greyBtn mb-4 fullWidth"
                                :to="`/client/contracts/${contract.proposals[0].id}`"
                              >
                                Approve for Payment</v-btn
                              >
                            </v-col>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="allContracts.length == 0">
                    <div class="sectionTitle mb-5 px-3 flex">
                      <h4 class="ml-1 darkGreyColor">
                        You have no active contract at the moment!
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-tab-item>
        </v-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import skeletonBox from "../../../components/skeletonBox";
import { mapGetters } from "vuex";
export default {
  layout: "client",
  components: {
    skeletonBox,
  },
  data() {
    return {
      tab: null,
      apiLoading: false,
      allContracts: [],
      approveLoading: false,
    };
  },
  methods: {
    getContracts() {
      this.apiLoading = true;
      this.$store
        .dispatch("client/getAllContracts")
        .then(({ data }) => {
          this.apiLoading = false;
          this.allContracts = data.data;
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the proposals");
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
    this.getContracts();
  },
  computed: {
    ...mapGetters({
      allContracts: "client/allContracts",
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
    descriptionSlice(data) {
      let response = data.slice(0, 100);
      return response;
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
.proposalOffers {
  width: 100%;
}
.dashSearch h3 {
  margin-bottom: 10px;
}
.jobDescMile {
  padding: 1em 2em;
}
.dashSearch input {
  border: solid 1px #e0e0e0;
  border-radius: 20px;
  padding: 3px;
}
.paymentStatusMilestone {
  background-color: rgba(0, 137, 82, 0.05);
  padding: 10px 20px;
  border-radius: 0 30px 30px 0;
}
.jobControls {
  background-color: #ebfff7;
}
.jobDesc {
  padding: 2em;
}

.jobControls {
  padding: 1em;
  background-color: #008952;
  border-radius: 0 20px 20px 0;
}
.jobControls {
  margin: 0;
}
.jobControls i {
  margin-right: 10px;
  color: #fff;
}
.jobControl {
  margin-bottom: 10px;
}

.jobControl {
  margin-bottom: 10px;
}

.jobControl p,
h2 {
  color: white;
  margin: 0;
}
.jobInfo {
  background-color: #f9f9f9;
  margin-bottom: 30px;
}
</style>
