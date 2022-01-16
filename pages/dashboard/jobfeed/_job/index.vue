<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <div class="jobDetails">
          <div v-if="apiLoading">
            <spinner />
          </div>
          <div v-else>
            <h2 class="blackColor mb-3">{{ singleJob.title }}</h2>
            <div class="row">
              <v-col cols="12" sm="12" lg="9">
                <hr class="mb-3" />
                <div class="jobDetailsTexts">
                  <p>{{ singleJob.description }}</p>
                  <div class="flex alignCenter scrollable-x">
                    <v-btn class="tagBtn">{{
                      singleJob.project_duration
                    }}</v-btn>
                  </div>
                </div>
                <div class="row alignCenter jobTips mt-10">
                  <v-col cols="6" sm="3">
                    <div class="flex alignCenter justifyCenter">
                      <p class="mr-2">Budget</p>
                      <h2>N{{ singleJob.price }}</h2>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <div class="flex alignCenter justifyCenter">
                      <p class="mr-2">Number of words</p>
                      <h2>{{ singleJob.number_of_words }}</h2>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <div class="flex alignCenter justifyCenter">
                      <p class="mr-2">Experience</p>
                      <h2>{{ singleJob.level_of_experience }}</h2>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <div class="flex alignCenter justifyCenter">
                      <p class="mr-2">Duration</p>
                      <h2>{{ singleJob.duration_of_job_in_days }} Days</h2>
                    </div>
                  </v-col>
                </div>
                <div class="mt-10 attachments" v-if="singleJobMedia.length > 0">
                  <h3 class="mb-5">Attachments</h3>
                  <row class="row">
                    <v-col cols="6" sm="6">
                      <div
                        class="flex alignCenter"
                        v-for="media in singleJob.media"
                        :key="media.id"
                      >
                        <i class="fas fa-link"></i>
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
                <div class="mt-5 activities">
                  <h3 class="mb-5">Activity on this Job</h3>
                  <div>
                    <p>
                      Proposals:
                      <span class="boldText">{{
                        activities.total_proposals
                      }}</span>
                    </p>
                    <p>
                      Last viewed by Client:
                      <span class="boldText">{{
                        lastViewedByCLient | dateSlice
                      }}</span>
                    </p>
                    <!-- <p>Interviewing: <span class="boldText">5</span></p> -->
                    <p>
                      Unanswered proposals:
                      <span class="boldText">{{
                        activities.total_unanswered_proposals
                      }}</span>
                    </p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
                <v-btn
                  class="findBtn mb-4 fullWidth"
                  :to="`/dashboard/jobfeed/${this.$route.params.job}/submit`"
                  >Submit a Proposal</v-btn
                >
                <div
                  class="flex alignCenter fullWidth mt-1"
                  v-if="savedJobs.length > 0"
                >
                  <div class="darkGreyColor savedDiv saveJob">
                    <i class="fas fa-bookmark mr-2 mt-1"></i> Saved
                  </div>
                  <i
                    class="far fa-trash-alt ml-2 mainColor iconBack arrowCursor"
                    @click="deleteSavedJob(singleJob.id)"
                  ></i>
                </div>
                <div v-else>
                  <v-btn
                    class="greyBtn fullWidth"
                    @click="saveJob(singleJob.id)"
                    :loading="loading"
                  >
                    <i class="fas fa-bookmark mr-2 mt-1"></i> Save Job</v-btn
                  >
                </div>

                <div>
                  <div class="clientInfo mt-10">
                    <h4>
                      <span
                        ><i class="far fa-file-alt mr-2 mb-5"></i> ABOUT THE
                        CLIENT
                      </span>
                    </h4>
                    <p class="mb-5 darkGreyColor">
                      <span>
                        Payment Verified
                        <i class="fas fa-certificate yellowColor"></i
                      ></span>
                    </p>
                    <h4>
                      {{ clientInfo.first_name }} {{ clientInfo.last_name }}
                    </h4>
                    <!-- <h4>USA</h4> -->
                    <!-- <h4>20 Jobs posted</h4> -->
                    <!-- <p class="mb-5">20 Jobs posted</p> -->
                    <p class="mb-5">
                      Member since {{ clientCreatedAt | dateSlice }}
                    </p>
                    <div>
                      <h4>
                        <span
                          ><i class="far fa-file-alt mr-2 mb-2"></i> Job Link
                        </span>
                      </h4>
                      <div class="workDiv fullWidth my-3 scrollable-x" to="#">
                        https://www.afriwrite.com/jobs/{{
                          singleJob.public_reference_id
                        }}
                      </div>
                      <p class="mainColor arrowCursor" @click="copyJobLink()">
                        Copy link
                      </p>
                    </div>
                  </div>
                </div>
              </v-col>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spinner from "../../../../components/spinner.vue";
import skeletonBox from "../../../../components/skeletonBox";
import { mapGetters } from "vuex";
export default {
  scrollToTop: true,
  apiLoading: false,
  layout: "dashboard",
  components: {
    skeletonBox,
    spinner,
  },
  data() {
    return {
      singleJob: "",
      clientInfo: "",
      activities: "",
      savedJobs: "",
      clientCreatedAt: "",
      loading: false,
      apiLoading: false,
      singleJobMedia: [],
      lastViewedByCLient: "",
    };
  },
  methods: {
    getSingleJobs() {
      this.singleJob = "";
      this.apiLoading = true;
      this.$store
        .dispatch("writer/getSingleJob", this.$route.params.job)
        .then(({ data }) => {
          this.apiLoading = false;
          this.singleJob = data.data;
          this.singleJobMedia = this.singleJob.media;
          this.clientInfo = this.singleJob.client;
          this.lastViewedByCLient = this.singleJob.last_viewed_by_client;
          this.clientCreatedAt = this.clientInfo.created_at;
          this.activities = this.singleJob.activities;
          this.savedJobs = this.singleJob.saved_jobs;
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the job");
        });
    },
    async saveJob(job_id) {
      try {
        this.loading = true;
        this.$toast.success("Saving Job");
        const response = await this.$axios.post(
          `v1/writer/jobs/save/${job_id}`
        );
        this.$toast.success("This job has been saved");
        this.getSingleJobs();
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.$toast.error(
          "There was an error saving this job please try again"
        );
      }
    },
    copyJobLink() {
      navigator.clipboard.writeText(
        `https://www.afriwrite.com/jobs/${this.singleJob.public_reference_id}`
      );
      this.$toast.success("Link copied");
    },
    async deleteSavedJob(job_id) {
      try {
        this.deleteSaveLoading = true;
        this.$toast.success("Removing from saved jobs");
        const response = await this.$axios.delete(
          `v1/writer/jobs/saved/delete/${job_id}`
        );
        this.$toast.success("Removed from saved jobs");
        this.getSingleJobs();
        this.deleteSaveLoading = false;
      } catch (error) {
        this.deleteSaveLoading = false;
        this.$toast.error("There was an error removing from saved jobs");
      }
    },
  },
  mounted() {
    this.getSingleJobs();
  },
  computed: {
    ...mapGetters({
      singleJob: "writer/singleJob",
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
.clientInfo {
  border-radius: 20px;
  background-color: #f8f8f8;
  padding: 20px;
  color: #4d4d4d;
}

.clientInfo h4 {
  color: #4d4d4d;
}
.jobI {
  /* padding: 1em; */
  background-color: white;
  /* border-radius: 10px; */
}
.dashDefaultContent {
  margin: 50px 50px 20px 120px;
}
.jobTips {
  padding: 20px 0;
  background-color: #008952;
  border-radius: 0 0 20px 20px;
}
.jobTips p {
  color: #fff;
  margin: 0;
}
.jobTips i {
  margin-right: 10px;
  color: #fff;
}
.workDiv {
  padding: 10px !important;
  background-color: transparent !important;
  border: #008952 solid 1px;
  color: #008952 !important;
  box-shadow: none !important;
}
.jobTips h2 {
  color: white;
  font-weight: 700;
}
.jobFav i {
  margin-right: 20px;
  /* color: #00E68A; */
}
.jobClientPrice {
  margin-right: 20px;
}
.attachments p {
  margin: 0;
}
.attachments i {
  margin-right: 10px;
  color: #aaaaaa;
}
.savedDiv {
  background-color: #e5e5e5;
  padding: 8px;
  width: 100%;
  text-align: center;
}
.saveJob {
  color: #aaaaaa;
}
@media (max-width: 1000px) {
  .dashDefaultContent {
    margin: 30px 10px 20px 10px;
  }
  .alignOnMobile {
    align-items: center;
  }
}
</style>