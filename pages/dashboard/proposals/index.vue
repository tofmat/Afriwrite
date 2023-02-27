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
                        ><i class="far fa-trash-alt mr-2 mainColor"></i> Delete
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
                              <h4 class="mainColor" v-if="job.proposed_amount != 'null'">
                                N{{ job.proposed_amount }}
                              </h4>
                              <p v-if="job.proposed_amount != 'null'">Proposed Amount</p>
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
                                <h2 class="mainColor noMargin">
                                  {{ job.job.title }}
                                </h2>
                              </div>
                              <p>
                                {{ job.job.description | descriptionSlice }}...
                              </p>
                              <p v-if="job.payment_mode === 'by_project'">
                                <span class="mainColor">Payment Method:</span>
                                Project based payment
                              </p>
                              <p v-else>
                                <span class="mainColor">Payment Method:</span>
                                Milestone based payment
                              </p>
                            </v-col>
                            <v-col cols="12" sm="2">
                              <v-btn
                                v-if="job.status === 'accepted'"
                                class="findBtn my-1 fullWidth"
                                :to="`/dashboard/contracts/${job.id}`"
                                >View Contract</v-btn
                              >
                              <v-btn
                                v-else
                                class="findBtn my-1 fullWidth"
                                @click="saveProposals(job)"
                                :to="`/dashboard/proposals/${job.public_reference_id}/edit`"
                                >Edit Proposal</v-btn
                              >
                              <v-btn
                                class="greyBtn mb-4 fullWidth"
                                @click="deleteProposal(job.id)"
                                :disabled="deleteProposalLoading"
                                ><i class="far fa-trash-alt mr-2 mainColor"></i>
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
      deleteProposalLoading: false,
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
    saveProposals(data) {
      this.$store.dispatch("writer/saveProposal", data);
      console.log("saverd to store");
    },
    async deleteProposal(job_id) {
      try {
        this.deleteProposalLoading = true;
        this.$toast.success("Deleting Proposal");
        const response = await this.$axios.delete(
          `v1/writer/jobs/delete/proposal/${job_id}`
        );
        this.$toast.success("Deleted Proposal");
        window.location.reload();
        this.deleteProposalLoading = false;
      } catch (error) {
        this.deleteProposalLoading = false;
        this.$toast.error("There was an error deleting proposal");
      }
    },
  },
  mounted() {
    this.getJobs();
  },
  computed: {
    // ...mapGetters({
    //   allProposals: "writer/allProposals",
    // }),
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
