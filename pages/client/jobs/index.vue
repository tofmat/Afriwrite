<template>
  <div>
    <div class="dashDefaultContent">
      <div class="flex alignCenter justifyBetween">
        <div>
          <h2 class="mainColor">
            {{ this.$auth.user.first_name }} {{ this.$auth.user.last_name }}
          </h2>
          <p>Client</p>
        </div>
        <div class="">
          <nuxt-link to="/client/post" class="findBtn">Post a Job</nuxt-link>
        </div>
      </div>

      <div class="activeJobbs">
        <div v-if="apiLoading">
          <div class="proposalOffers">
            <div class="sectionTitle mb-5 px-3 flex justifyBetween">
              <h4 class="ml-1 darkGreyColor">POSTED JOBS (...)</h4>
              <p class="darkGreyColor noMargin">View all</p>
            </div>
            <div class="jobInfo">
              <div class="row noMargin">
                <v-col
                  cols="12"
                  sm="3"
                  class="jobDesc flex flexColumn justifyCenter"
                >
                  <div>
                    <skeleton-box width="70%" />
                  </div>
                  <div>
                    <skeleton-box width="50%" />
                  </div>
                </v-col>
                <v-col cols="12" sm="7" class="jobDesc">
                  <div class="flex alignCenter jobControl justifyBetween">
                    <skeleton-box width="40%" />
                  </div>
                  <div>
                    <skeleton-box width="80%" />
                  </div>
                  <div>
                    <skeleton-box width="60%" />
                  </div>
                  <div>
                    <skeleton-box width="40%" />
                  </div>
                </v-col>
                <v-col cols="12" sm="2" class="jobControls">
                  <div class="jobControl">
                    <p>Proposed Amount</p>
                    <div>
                      <skeleton-box width="40%" />
                    </div>
                  </div>
                  <div class="jobControl">
                    <p>Est. Time</p>
                    <div>
                      <skeleton-box width="40%" />
                    </div>
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </div>
        <div class="proposalOffers" v-else>
          <div class="sectionTitle mb-5 px-3 flex justifyBetween">
            <h4 class="ml-1 darkGreyColor">
              POSTED JOBS ({{ allJobs.length }})
            </h4>
            <p class="mainColor noMargin">View all</p>
          </div>
          <div class="jobInfo" v-for="job in allJobs" :key="job.id">
            <div class="row noMargin">
              <v-col
                cols="12"
                sm="3"
                class="jobDesc flex flexColumn justifyCenter"
              >
                <h3>Initiated on {{ job.created_at | dateSlice }}</h3>
                <p>{{ job.created_at | formatDate }}</p>
              </v-col>
              <v-col cols="12" sm="7" class="jobDesc">
                <div class="flex alignCenter jobControl justifyBetween">
                  <nuxt-link :to="`/client/jobs/${job.public_reference_id}`"
                    ><h2 class="mainColor noMargin">
                      {{ job.title }}
                    </h2></nuxt-link
                  >
                </div>
                <p>{{ job.description | descriptionSlice }}</p>
              </v-col>
              <v-col cols="12" sm="2" class="jobControls">
                <div class="jobControl">
                  <p>Proposed Amount</p>
                  <h2>&#8358;{{ job.total_amount }}</h2>
                </div>
                <div class="jobControl">
                  <p>Number of words</p>
                  <h2>{{ job.number_of_words }}</h2>
                </div>
              </v-col>
            </div>
          </div>
          <div
            class="sectionTitle mb-5 px-3 flex justifyBetween"
            v-if="allJobs.length == 0"
          >
            <h4 class="ml-1 darkGreyColor">You have not posted any job.</h4>
          </div>
        </div>
      </div>

      <div class="draftss">
        <div v-if="apiLoadingDrafts">
          <div class="proposalOffers">
            <div class="sectionTitle mb-5 px-3 flex justifyBetween">
              <h4 class="ml-1 darkGreyColor">DRAFTS (...)</h4>
              <p class="mainColor noMargin">View all</p>
            </div>
            <div class="jobInfo">
              <div class="row noMargin">
                <v-col
                  cols="12"
                  sm="3"
                  class="jobDesc flex flexColumn justifyCenter"
                >
                  <div>
                    <skeleton-box width="70%" />
                  </div>
                  <div>
                    <skeleton-box width="50%" />
                  </div>
                </v-col>
                <v-col cols="12" sm="7" class="jobDesc">
                  <div class="flex alignCenter jobControl justifyBetween">
                    <skeleton-box width="40%" />
                  </div>
                  <div>
                    <skeleton-box width="80%" />
                  </div>
                  <div>
                    <skeleton-box width="60%" />
                  </div>
                  <div>
                    <skeleton-box width="40%" />
                  </div>
                </v-col>
                <v-col cols="12" sm="2" class="jobControls">
                  <div class="jobControl">
                    <div class="flex alignCenter jobControl justifyBetween">
                      <skeleton-box width="60%" />
                    </div>
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="proposalOffers" v-if="allDrafts.length > 0">
            <div class="sectionTitle mb-5 px-3 flex justifyBetween">
              <h4 class="ml-1 darkGreyColor">
                DRAFTS ({{ allDrafts.length }})
              </h4>
              <p class="mainColor noMargin">View all</p>
            </div>
            <div class="jobInfo" v-for="job in allDrafts" :key="job.id">
              <div class="row noMargin">
                <v-col
                  cols="12"
                  sm="3"
                  class="jobDesc flex flexColumn justifyCenter"
                >
                  <h3>Initiated on {{ job.created_at | dateSlice }}</h3>
                  <p>{{ job.created_at | formatDate }}</p>
                </v-col>
                <v-col cols="12" sm="7" class="jobDesc">
                  <div class="flex alignCenter jobControl justifyBetween">
                    <h2 class="mainColor noMargin">{{ job.title }}</h2>
                  </div>
                </v-col>
                <v-col cols="12" sm="2" class="jobControls">
                  <div class="jobControl">
                    <v-btn
                      class="greyBtn my-1 fullWidth"
                      :to="`/client/drafts/${job.id}`"
                      >Continue Editing</v-btn
                    >
                    <v-btn
                      class="greyBtn mb-4 fullWidth"
                      @click="deleteDraft(job.id)"
                      :disabled="deleteLoading"
                    >
                      <i class="far fa-trash-alt mr-2 mainColor"></i> Delete
                      Draft</v-btn
                    >
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skeletonBox from "../../../components/skeletonBox";
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "client",
  components: {
    skeletonBox,
  },
  data() {
    return {
      apiLoading: false,
      apiLoadingDrafts: false,
      allJobs: [],
      allDrafts: [],
      deleteLoading: false,
    };
  },
  methods: {
    // ...mapActions({
    //   getAllJobs: 'getAllJobs',
    // }),
    getJobs() {
      this.apiLoading = true;
      this.$store
        .dispatch("client/getAllJobs")
        .then(({ data }) => {
          this.apiLoading = false;
          this.allJobs = data.data;
          console.log(data)
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the available jobs");
        });
    },
    getDrafts() {
      this.apiLoadingDrafts = true;
      this.$store
        .dispatch("client/getAllDrafts")
        .then(({ data }) => {
          this.apiLoadingDrafts = false;
          this.allDrafts = data.data;
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the drafts");
        });
    },
    async deleteDraft(jobId) {
      try {
        this.deleteLoading = true;
        this.$toast.success("Deleting draft.");
        const response = await this.$axios.delete(
          `/v1/client/delete/draft-job/${jobId}`
        );
        this.deleteLoading = false;
        this.$toast.success("This draft has been deleted.");
        window.location.reload();
      } catch (error) {
        this.deleteLoading = false;
        this.$toast.error("There was an error deleting this draft");
      }
    },
  },
  mounted() {
    this.getJobs();
    this.getDrafts();
  },
  computed: {
    // ...mapGetters({
    //   allJobs: "client/allJobs",
    // }),
  },
  filters: {
    changToString: function (value) {
      if (!value) return "";
      return (value = value.toString());
    },
    formatDate(date) {
      const getDuration = (timeStamp, form) => {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const time = { second, minute, hour, day };
        return Math.floor(timeStamp / time[form]);
      };
      const modTimeStamp = Date.parse(date);
      const modDate = new Date(modTimeStamp).toDateString();
      const days = getDuration(Date.now() - modTimeStamp, "day");
      if (days >= 30) {
        const [_, month, day, year] = /\s(\w{3})\s(\d{2})\s(\w{4})/.exec(
          modDate
        );
        return `on ${month} ${parseInt(day)} ${
          new Date().getFullYear() === +year ? "" : year
        }`;
      } else {
        const durations = ["day", "hour", "minute", "second"]
          .map((form) => {
            const since = getDuration(Date.now() - modTimeStamp, form);
            return `${since} ${since > 1 ? form + "s" : form} ago`;
          })
          .filter((value) => parseInt(value) !== 0);
        return durations[0];
      }
    },
  },
};
</script>

<style>
.dashSearch h3 {
  margin-bottom: 10px;
}
.dashSearch input {
  border: solid 1px #e0e0e0;
  border-radius: 20px;
  padding: 3px;
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