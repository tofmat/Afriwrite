<template>
  <div class="dashDefaultContent">
    <h2 class="mainColor mb-5">Saved Jobs</h2>
    <input type="text" placeholder="search for Jobs" class="mb-10 mainSearch" />
    <div class="row">
      <!-- <v-col cols="12" sm="12" lg="4" class="dashDef">
        <div class="dashSlate">
          <div class="dashSearch">
            <h3>Filter By</h3>
            <hr />
            <div class="mt-3">
              <h4>Categories</h4>
              <div class="flex alignCenter catCheck">
                <input type="checkbox" name="" id="" />
                <p>Basic Level</p>
              </div>
              <div class="flex alignCenter catCheck">
                <input type="checkbox" name="" id="" />
                <p>Basic Level</p>
              </div>
              <div class="flex alignCenter catCheck">
                <input type="checkbox" name="" id="" />
                <p>Basic Level</p>
              </div>
            </div>
          </div>
        </div>
      </v-col> -->
      <v-col cols="12" sm="12" lg="10" class="">
        <div class="jobInfo" v-if="apiLoading">
          <div class="row noMargin">
            <v-col cols="12" sm="9" class="jobDesc">
              <div class="flex alignCenter jobControl justifyBetween">
                <skeleton-box width="15%" />
                <span class="saveJob"
                  ><i class="fas fa-bookmark mr-2"></i> Saved
                  <i class="far fa-trash-alt ml-2 mainColor iconBack"></i
                ></span>
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
              <div class="jobControl">
                <p>Experience</p>
                <skeleton-box width="60%" />
              </div>
            </v-col>
          </div>
        </div>
        <div v-else>
          <div class="jobInfo" v-for="job in savedJobs" :key="job.id">
            <div class="row noMargin">
              <v-col cols="12" sm="9" class="jobDesc">
                <div class="flex alignCenter jobControl justifyBetween">
                  <nuxt-link
                    :to="`/dashboard/jobfeed/${job.job.public_reference_id}`"
                  >
                    <h2 class="mainColor noMargin">{{ job.job.title }}</h2>
                  </nuxt-link>
                  <span class="saveJob"
                    ><i class="fas fa-bookmark mr-2"></i> Saved
                    <i
                      class="
                        far
                        fa-trash-alt
                        ml-2
                        mainColor
                        iconBack
                        arrowCursor
                      "
                      @click="deleteSavedJob(job.job.id)"
                    ></i
                  ></span>
                </div>
                <p>{{ job.job.description | descriptionSlice }} ...</p>
                <div class="flex alignCenter scrollable-x">
                  <v-btn class="tagBtn" v-for="niche in getWritingNiches(job.job.writing_niches)" :key="niche">
                    {{niche}}
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" sm="3" class="jobControls">
                <div class="jobControl">
                  <p>Budget/word</p>
                  <h2>N{{ job.job.price }}</h2>
                </div>
                <div class="jobControl">
                  <p>Number of words</p>
                  <h2>{{ job.job.number_of_words }}</h2>
                </div>
                <div class="jobControl">
                  <p>Experience</p>
                  <h2>{{ job.job.level_of_experience }}</h2>
                </div>
              </v-col>
            </div>
          </div>
        </div>
      </v-col>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

export default {
  layout: "dashboard",
  data() {
    return {
      apiLoading: false,
      savedJobs: [],
    };
  },
  methods: {
    getSavedJobs() {
      this.apiLoading = true;
      this.$store
        .dispatch("writer/getSavedJobs")
        .then(({ data }) => {
          this.apiLoading = false;
          this.savedJobs = data.data;
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the saved jobs");
        });
    },
    async deleteSavedJob(job_id) {
      try {
        this.deleteSaveLoading = true;
        this.$toast.success("Removing from saved jobs");
        const response = await this.$axios.delete(
          `v1/writer/jobs/saved/delete/${job_id}`
        );
        this.$toast.success("Removed from saved jobs");
        window.location.reload();
        this.deleteSaveLoading = false;
      } catch (error) {
        this.deleteSaveLoading = false;
        this.$toast.error("There was an error removing from saved jobs");
      }
    },
    getWritingNiches(niches){
      return niches.split(',')
    }
  },
  mounted() {
    this.getSavedJobs();
  },
  computed: {
    // ...mapGetters({
    //   savedJobs: "writer/savedJobs",
    // }),
  },
  filters: {
    descriptionSlice(data) {
      let response = data.slice(0, 100);
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

.jobControls {
  padding: 1em;
  background-color: #008952;
  border-radius: 0 20px 20px 0;
}
.saveJob {
  color: #aaaaaa;
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
  margin-bottom: 30px;
}
.mainSearch {
  border: #c5c5c5 1px solid;
  border-radius: 15px;
  width: 100%;
  padding: 3px 15px;
}
@media (max-width: 1000px) {
  .dashDefaultContent {
    margin: 30px 10px 20px 10px;
  }
}
</style>