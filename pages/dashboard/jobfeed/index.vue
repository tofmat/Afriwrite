<template>
  <div class="dashDefaultContent">
    <h2 class="mainColor mb-5">Job Feeds</h2>
    <div class="flex mb-10">
      <input type="text" placeholder="Search for Jobs" class="mainSearch" />
      <input class="submitSearch" type="submit" value="" />
    </div>
    <div class="row">
      <!-- <v-col cols="12" sm="12" lg="3" class="dashDef">
        <div class="dashSlate">
          <div class="dashSearch">
            <h3>Filter By</h3>
            <hr />
            <div class="mt-3">
              <h4>Categories:</h4>
              <div class="flex alignCenter catCheck mt-2">
                <input type="checkbox" name="" id="" />
                <p>Writing</p>
              </div>
              <div class="flex alignCenter catCheck">
                <input type="checkbox" name="" id="" />
                <p>Content Creation</p>
              </div>
              <div class="flex alignCenter catCheck">
                <input type="checkbox" name="" id="" />
                <p>Proof Reading</p>
              </div>
            </div>
          </div>
        </div>
      </v-col> -->
      <v-col cols="12" sm="12" lg="12" class="">
        <div class="jobInfo" v-if="apiLoading">
          <div class="row noMargin">
            <v-col cols="12" sm="9" class="jobDesc">
              <div class="flex alignCenter jobControl justifyBetween">
                <skeleton-box width="15%" />
                <span class="mainColor saveJob"
                  ><i class="fas fa-bookmark mr-2"></i> Save job</span
                >
              </div>
              <skeleton-box width="90%" />
              <skeleton-box width="90%" />
              <skeleton-box width="90%" />
              <div class="flex alignCenter scrollable-x">
                <v-btn class="tagBtn"><skeleton-box /></v-btn>
                <v-btn class="tagBtn"><skeleton-box /></v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="3" class="jobControls">
              <div class="jobControl">
                <p>Budget/word</p>
                <skeleton-box width="50%" />
              </div>
              <div class="jobControl">
                <p>Number of words</p>
                <skeleton-box width="60%" />
              </div>
            </v-col>
          </div>
        </div>
        <div v-else>
          <div class="jobInfo" v-for="job in allJobs" :key="job.id">
            <div class="row noMargin">
              <v-col cols="12" sm="9" class="jobDesc">
                <div class="flex alignCenter jobControl justifyBetween">
                  <nuxt-link
                    :to="`/dashboard/jobfeed/${job.public_reference_id}`"
                  >
                    <p class="mainColor" v-if="job.submittedProposal">
                      Proposal Submitted
                    </p>
                    <h2 class="mainColor noMargin">{{ job.title }}</h2>
                  </nuxt-link>
                  <span class="saveJob" v-if="job.saved_jobs.length > 0"
                    ><i class="fas fa-bookmark mr-2"></i> Saved
                  </span>
                  <span
                    class="mainColor saveJob arrowCursor"
                    v-else
                    @click="saveJob(job.id)"
                    ><i class="fas fa-bookmark mr-2"></i> Save job
                  </span>
                </div>
                <p>{{ job.description | descriptionSlice }} ...</p>
                <div class="flex alignCenter scrollable-x">
                  <v-btn class="tagBtn">{{ job.level_of_experience }}</v-btn>
                  <v-btn class="tagBtn">{{ job.project_duration }}</v-btn>
                </div>
              </v-col>
              <v-col cols="12" sm="3" class="jobControls">
                <div class="jobControl">
                  <p>Budget/word</p>
                  <h2>N{{ job.price }}</h2>
                </div>
                <div class="jobControl">
                  <p>Number of words</p>
                  <h2>{{ job.number_of_words }}</h2>
                </div>
              </v-col>
            </div>
          </div>
          <div v-if="allJobs.length == 0">
            <h4>Sorry there are no job available at the moment.</h4>
          </div>
        </div>
      </v-col>
    </div>
  </div>
</template>

<script>
import skeletonBox from "../../../components/skeletonBox";
// import { mapGetters } from "vuex";
export default {
  components: {
    skeletonBox,
  },
  data() {
    return {
      apiLoading: false,
      allJobs: [],
      loading: false,
      deleteSaveLoading: false,
    };
  },
  layout: "dashboard",
  methods: {
    // ...mapActions({
    //   getAllJobs: 'getAllJobs',
    // }),
    getJobs() {
      this.apiLoading = true;
      this.$store
        .dispatch("writer/getAllJobs")
        .then(({ data }) => {
          this.apiLoading = false;
          this.allJobs = data.data;
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the available jobs");
        });
    },
    async saveJob(job_id) {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `v1/writer/jobs/save/${job_id}`
        );
        this.$toast.success("This job has been saved");
        location.reload();
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.$toast.error(
          "There was an error saving this job please try again"
        );
      }
    },
  },
  mounted() {
    this.getJobs();
  },
  computed: {
    // ...mapGetters({
    //   allJobs: "writer/allJobs",
    // }),
  },
  filters: {
    descriptionSlice(data) {
      let str = data.toString();
      let response = str.slice(0, 200);
      return response;
    },
  },
};
</script>

<style>
.dashDef {
  /* padding-top: 0 !important; */
}
.dashSlate {
  padding: 1em;
  border: solid #e0e0e0 1px;
  border-radius: 20px 0 0 20px;
  margin-bottom: 30px;
  margin-top: 1px;
}
.dashDefaultContent {
  margin: 50px 50px 20px 120px;
}
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
.saveJob {
  color: #aaaaaa;
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
.catCheck {
  margin-bottom: 7px;
}
.catCheck p {
  margin: 0;
}
.catCheck input {
  margin-right: 10px;
}
.jobInfo {
  background-color: #f9f9f9;
  margin-bottom: 10px;
}
.mainSearch {
  border: #c5c5c5 1px solid;
  border-radius: 10px;
  width: 100%;
  padding: 5px 15px;
}
@media (max-width: 1000px) {
  .dashDefaultContent {
    margin: 30px 10px 20px 10px;
  }
}
</style>