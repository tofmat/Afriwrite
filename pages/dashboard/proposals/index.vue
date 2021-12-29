<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Proposals</h2>
      <div class="flex my-5">
        <input type="text" placeholder="Search proposals" class="mainSearch" />
        <input class="submitSearch" type="submit" value="" />
      </div>
      <div class="allProposals">
        <v-tabs color="green darken-3">
          <v-tab>Active</v-tab>
          <v-tab-item class="mt-5">
            <div>
              <div class="mt-5">
                <div v-if="apiLoading">
                  <div class="row noMargin lightGreyBack">
                    <v-col cols="12" sm="1">
                      <skeleton-box
                        width="80px"
                        height="70px"
                        class="roundRadius"
                      />
                    </v-col>
                    <v-col cols="12" sm="9">
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
                        >Edit Proposal</v-btn
                      >
                      <v-btn class="greyBtn my-1 fullWidth" to="#" disabled
                        ><i class="far fa-comments mr-2 mainColor"></i> Delete
                        Proposal</v-btn
                      >
                    </v-col>
                  </div>
                </div>
                <div v-else>
                  <div v-if="allProposals.length > 0">
                    <div
                      class="noMargin lightGreyBack mt-5"
                      v-for="job in allProposals"
                      :key="job.id"
                    >
                      <div class="proposalOffers">
                        <div class="jobInfo">
                          <div class="row noMargin">
                            <v-col
                              cols="12"
                              sm="2"
                              class="jobDesc flex flexColumn justifyCenter"
                            >
                              <h4 class="mainColor upperCase">
                                {{ job.status }}
                              </h4>
                              <h4>{{ job.created_at | dateSlice }}</h4>
                              <p>Date Submitted</p>
                              <h4 class="mainColor">N10</h4>
                              <p>Proposed Amount</p>
                            </v-col>
                            <v-col cols="12" sm="8" class="jobDesc">
                              <div
                                class="
                                  flex
                                  alignCenter
                                  jobControl
                                  justifyBetween
                                "
                              >
                                <h2 class="mainColor noMargin">Job title</h2>
                              </div>
                              <p>Description....</p>
                              <p v-if="job.payment_mode === 'by_project'">
                                Payment Method: Project based payment
                              </p>
                              <p v-else>
                                Payment Method: Milestone based payment
                              </p>
                            </v-col>
                            <v-col cols="12" sm="2">
                              <v-btn
                                v-if="job.status === 'accepted'"
                                class="findBtn my-1 fullWidth"
                                :to="`/dashboard/contracts/${job.job.public_reference_id}`"
                                >View Contract</v-btn
                              >
                              <v-btn
                                v-else
                                class="findBtn my-1 fullWidth"
                                :to="`/dashboard/proposals/${job.job.public_reference_id}`"
                                >Edit Proposal</v-btn
                              >
                              <v-btn
                                class="findBtn my-1 fullWidth"
                                :to="`/dashboard/proposals/${job.job.public_reference_id}`"
                                >Edit Proposal</v-btn
                              >
                              <v-btn class="greyBtn mb-4 fullWidth">
                                Delete Proposal</v-btn
                              >
                            </v-col>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="allProposals.length == 0">
                    <div class="sectionTitle mb-5 px-3 flex">
                      <h4 class="ml-1 darkGreyColor">
                        You have not submitted any proposal please do.
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
  layout: "dashboard",
  components: {
    skeletonBox,
  },
  data() {
    return {
      apiLoading: false,
      allProposals: [],
    };
  },
  methods: {
    getJobs() {
      this.apiLoading = true;
      this.$store
        .dispatch("writer/getAllProposals")
        .then(({ data }) => {
          this.apiLoading = false;
          this.allProposals = data.data;
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the proposals");
        });
    },
  },
  mounted() {
    this.getJobs();
  },
  computed: {
    ...mapGetters({
      allProposals: "writer/allProposals",
    }),
  },
  filters: {
    dateSlice(data) {
      let str = data.toString();
      let res = str.slice(0, 10);
      return res;
    },
    descriptionSlice(data) {
      let response = data.slice(0, 100);
      return response;
    },
  },
};
</script>

<style>
.roundRadius {
  border-radius: 50%;
}
</style>
