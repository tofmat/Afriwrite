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
                    <v-btn class="tagBtn" v-for="niche in niches" :key="niche">{{ niche }}</v-btn>
                  </div>
                </div>
                <div class="row alignCenter jobTips mt-10">
                  <v-col cols="6" sm="4">
                    <div class="flex alignCenter justifyCenter">
                      <p class="mr-2">Budget</p>
                      <h2>${{ singleJob.price }}</h2>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="4" class="flex alignCenter justifyCenter">
                    <div class="flex alignCenter">
                      <p class="mr-2">Number of words</p>
                      <h2>{{ singleJob.number_of_words }}</h2>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="4" class="flex alignCenter justifyCenter">
                    <div class="flex alignCenter">
                      <p class="mr-2">Experience</p>
                      <h2>{{ singleJob.level_of_experience }}</h2>
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
                          >{{ media.file | fileNameSlicee }}</a
                        >
                      </div>
                    </v-col>
                  </row>
                </div>
              </v-col>
              <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
                <v-btn
                  class="findBtn mb-4 fullWidth"
                  @click="deleteJob(singleJob.id)"
                  :loading="deleteLoading"
                  >Delete Job</v-btn
                >
                <v-btn class="greyBtn fullWidth" to="/client/proposals">
                  <i class="fas fa-bookmark mr-2 mt-1"></i> View
                  Proposals</v-btn
                >
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
export default {
  scrollToTop: true,
  apiLoading: false,
  layout: "client",
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
      singleJobMedia: "",
      loading: false,
      apiLoading: false,
      deleteLoading: false,
      niches: []
    };
  },
  methods: {
    getSingleJobs() {
      this.singleJob = "";
      this.apiLoading = true;
      this.$store
        .dispatch("client/getSingleJob", this.$route.params.job)
        .then(({ data }) => {
          this.apiLoading = false;
          this.singleJob = data.data;
          this.singleJobMedia = this.singleJob.media;
          this.niches = JSON.parse(this.singleJob.writing_niches)
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the job");
        });
    },
    async saveJob(job_id) {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `v1/client/jobs/save/${job_id}`
        );
        this.$toast.success("This job has been saved");
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
    async deleteJob(jobId) {
      try {
        this.deleteLoading = true;
        const response = await this.$axios.delete(
          `/v1/client/delete/job/${jobId}`
        );
        this.deleteLoading = false;
        this.$toast.success("This job has been deleted.");
        this.$router.push("/client/jobs") 
      } catch (error) {
        this.deleteLoading = false;
        this.$toast.error("There was an error deleting this job");
      }
    },
  },
  mounted() {
    this.getSingleJobs();
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
@media (max-width: 1000px) {
  .dashDefaultContent {
    margin: 30px 10px 20px 10px;
  }
  .alignOnMobile {
    align-items: center;
  }
}
</style>