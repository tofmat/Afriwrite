<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Post a Job</h2>
      <h3 class="mainColor slimText">Get Started</h3>
      <div v-if="pageLoading">
        <spinner />
      </div>
      <form @submit.prevent="addJob()" v-else>
        <small v-if="errors">{{ errors }}</small>
        <div class="postJob mt-5">
          <div class="flex mb-5">
            <div class="mr-3">
              <p class="circleRound mainColor mt-1">1</p>
            </div>
            <div class="fullWidth">
              <h3>Enter the title of your job</h3>
              <p>Make it well descriptive and understandable</p>
              <input
                type="text"
                class="mainSearch"
                required
                v-model="jobInfo.title"
                placeholder="UX Writer needed for a writing gig"
              />
              <div>
                <h4 class="darkGreyColor mt-3">
                  A few examples you can emulate
                </h4>
                <p class="noMargin">
                  <span><i class="far fa-dot-circle mr-3"></i></span>UX Writer
                  needed for a writing gig
                </p>
                <p class="noMargin">
                  <span><i class="far fa-dot-circle mr-3"></i></span>UX Writer
                  needed for a writing gig
                </p>
                <p class="noMargin">
                  <span><i class="far fa-dot-circle mr-3"></i></span>UX Writer
                  needed for a writing gig
                </p>
              </div>
            </div>
          </div>
          <div class="flex mb-5">
            <div class="mr-3">
              <p class="circleRound mainColor mt-1">2</p>
            </div>
            <div class="fullWidth">
              <h3>Job Description</h3>
              <p>Describe deliverables, anything unique about the project</p>
              <textarea
                name="apply"
                id="apply"
                rows="5"
                class="textArea"
                placeholder="Input text here"
                v-model="jobInfo.description"
              ></textarea>

              <!-- <h3 class="mt-3">Choose Category</h3>
              <p>
                Select the category this job falls under (You can select more
                than one)
              </p>
              <v-autocomplete
                v-model="jobInfo.category"
                :items="items"
                outlined
                dense
                chips
                color="green darken-3"
                small-chips
                label="Categories"
                multiple
              ></v-autocomplete> -->
              <h3 class="my-3">Attach additional project files (optional)</h3>
              <div class="dragAndDrop">
                <p class="textCenter">
                  Drag and drop, or
                  <span class="mainColor arrowCursor" @click="onPickFile"
                    >upload</span
                  >
                  files
                </p>
                <div v-if="this.jobInfo.file" class="textCenter">
                  <span v-for="file in this.jobInfo.file" :key="file.id"
                    >{{ file.name }},&nbsp;</span
                  >
                </div>
              </div>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="file_extension|audio/*|video/*|image/*|media_type"
                v-on:change="onChange"
                multiple
              />
              <small
                >Attach a maximum of 3 files, not more than 10mb each</small
              >
            </div>
          </div>
          <div class="flex mb-5">
            <div class="mr-3">
              <p class="circleRound mainColor mt-1">3</p>
            </div>
            <div class="fullWidth">
              <div>
                <h3>Select Duration</h3>
                <p>Set the duration and type of job this is</p>
                <v-radio-group v-model="jobInfo.project_duration">
                  <div class="row noMargin">
                    <v-col cols="12" sm="4">
                      <div class="radioBoxDiv">
                        <div class="flex flexRowReverse">
                          <v-radio
                            color="green darken-3"
                            value="one-term"
                          ></v-radio>
                        </div>
                        <div class="flex alignCenter justifyCenter columnFlex">
                          <img
                            src="../../../../assets/images/working.svg"
                            alt="work"
                            width="30px"
                          />
                          <h3>One-time Gig</h3>
                          <p class="textCenter">
                            Find the perfect freelancer for a very short term
                            project
                          </p>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <div class="radioBoxDiv">
                        <div class="flex flexRowReverse">
                          <v-radio
                            color="green darken-3"
                            value="long-term"
                          ></v-radio>
                        </div>
                        <div class="flex alignCenter justifyCenter columnFlex">
                          <img
                            src="../../../../assets/images/working-at-home.svg"
                            alt="work"
                            width="30px"
                          />
                          <h3>Long Term Engagement</h3>
                          <p class="textCenter">
                            Find the perfect freelancer for a very short term
                            project
                          </p>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <div class="radioBoxDiv">
                        <div class="flex flexRowReverse">
                          <v-radio
                            color="green darken-3"
                            value="extended-term"
                          ></v-radio>
                        </div>
                        <div class="flex alignCenter justifyCenter columnFlex">
                          <img
                            src="../../../../assets/images/handshake.svg"
                            alt="work"
                            width="30px"
                          />
                          <h3>Extended Engagement</h3>
                          <p class="textCenter">
                            Find the perfect freelancer for a very short term
                            project
                          </p>
                        </div>
                      </div>
                    </v-col>
                  </div>
                </v-radio-group>
              </div>
              <div>
                <h3>What level of experience do you need?</h3>
                <p>Set the duration and type of job this is</p>
                <v-radio-group v-model="jobInfo.level_of_experience">
                  <div class="row noMargin">
                    <v-col cols="12" sm="4">
                      <div class="radioBoxDiv">
                        <div class="flex flexRowReverse">
                          <v-radio
                            color="green darken-3"
                            value="entry-level"
                          ></v-radio>
                        </div>
                        <div
                          class="flex alignCenter justifyCenter columnFlex mb-5"
                        >
                          <h3>Entry Level</h3>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <div class="radioBoxDiv">
                        <div class="flex flexRowReverse">
                          <v-radio
                            color="green darken-3"
                            value="intermediate"
                          ></v-radio>
                        </div>
                        <div
                          class="flex alignCenter justifyCenter columnFlex mb-5"
                        >
                          <h3>Intermediate</h3>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <div class="radioBoxDiv">
                        <div class="flex flexRowReverse">
                          <v-radio
                            color="green darken-3"
                            value="expert"
                          ></v-radio>
                        </div>
                        <div
                          class="flex alignCenter justifyCenter columnFlex mb-5"
                        >
                          <h3>Expert</h3>
                        </div>
                      </div>
                    </v-col>
                  </div>
                </v-radio-group>
              </div>
            </div>
          </div>
          <div class="flex mb-5">
            <div class="mr-3">
              <p class="circleRound mainColor mt-1">4</p>
            </div>
            <div class="">
              <div class="mb-5">
                <h3>Proposed Project Price Range, Duration, and Amount</h3>
                <p>Propose an amount and time for a freelancer to work with</p>
              </div>
              <div>
                <div class="my-2">
                  <h4>Price per word ($)</h4>
                  <small>Afriwrite recommended price per word is N20.</small>
                  <div class="flex alignCenter my-1">
                    <input
                      type="text"
                      class="mainSearch"
                      placeholder="20"
                      v-model="jobInfo.price"
                    />
                  </div>
                </div>
                <div class="my-2">
                  <h4>Number of words</h4>
                  <div class="flex alignCenter my-1">
                    <input
                      type="text"
                      class="mainSearch"
                      placeholder="400"
                      v-model="jobInfo.number_of_words"
                    />
                  </div>
                </div>
                <div class="my-2">
                  <h4>Duration in days</h4>
                  <div class="flex alignCenter my-1">
                    <input
                      type="text"
                      class="mainSearch"
                      placeholder="Days"
                      v-model="jobInfo.duration_of_job_in_days"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 flex justifyCenter mobileColumn">
          <v-btn class="findBtn mx-3 my-1" type="submit" :loading="loading"
            >Post Job</v-btn
          >
          <v-btn
            class="greyBtn mx-3 my-1"
            :loading="draftLoading"
            @click="addDraftJob()"
            >Save to Draft</v-btn
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "client",
  data: () => ({
    errors: "",
    loading: false,
    draftLoading: false,
    draftedJob: "",
    pageLoading: false,
    items: ["Content writing", "Articles", "Blogging", "Copywriting"],
    values: ["Articles", "Blogging"],
    value: null,
    jobInfo: {
      title: "",
      description: "",
      project_duration: "",
      category: "E-commerce Website Articles",
      level_of_experience: "",
      number_of_words: "",
      price: "",
      duration_of_job_in_days: "",
      file: null,
    },
  }),
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onChange(event) {
      this.jobInfo.file = event.target.files;
    },
    async addJob() {
      let formData = new FormData();
      if (this.jobInfo.file) {
        for (const i of Object.keys(this.jobInfo.file)) {
          formData.append("file[" + i + "]", this.jobInfo.file[i]);
        }
      }
      formData.append("title", this.jobInfo.title);
      formData.append("description", this.jobInfo.description);
      formData.append("price", this.jobInfo.price);
      formData.append("project_duration", this.jobInfo.project_duration);
      formData.append("category", this.jobInfo.category);
      formData.append("level_of_experience", this.jobInfo.level_of_experience);
      formData.append("number_of_words", this.jobInfo.number_of_words);
      formData.append(
        "duration_of_job_in_days",
        this.jobInfo.duration_of_job_in_days
      );
      try {
        this.loading = true;
        const response = await this.$axios.post(
          "/v1/client/create-job",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.$toast.success("Your Job has been added successfully");
        this.loading = false;
        this.jobInfo = "";
        return response;
      } catch (error) {
        this.jobInfo = "";
        this.loading = false;
        this.errors = error.response.data.error;
        this.$toast.error("An error occured, check all fields and try again");
      }
    },
    async addDraftJob() {
      let formData = new FormData();
      if (this.jobInfo.file) {
        for (const i of Object.keys(this.jobInfo.file)) {
          formData.append("file[" + i + "]", this.jobInfo.file[i]);
        }
      }
      formData.append("title", this.jobInfo.title);
      if (this.jobInfo.description) {
        formData.append("description", this.jobInfo.description);
      }
      if (this.jobInfo.duration_of_job_in_days) {
        formData.append(
          "duration_of_job_in_days",
          this.jobInfo.duration_of_job_in_days
        );
      }
      if (this.jobInfo.number_of_words) {
        formData.append("number_of_words", this.jobInfo.number_of_words);
      }
      if (this.jobInfo.level_of_experience) {
        formData.append(
          "level_of_experience",
          this.jobInfo.level_of_experience
        );
      }
      if (this.jobInfo.category) {
        formData.append("category", this.jobInfo.category);
      }
      if (this.jobInfo.project_duration) {
        formData.append("project_duration", this.jobInfo.project_duration);
      }
      if (this.jobInfo.price) {
        formData.append("price", this.jobInfo.price);
      }
      try {
        this.draftLoading = true;
        const response = await this.$axios.post(
          "/v1/client/save-draft-job",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.$toast.success("Your Job has been saved to draft successfully");
        this.draftLoading = false;
        this.jobInfo = "";
        return response;
      } catch (error) {
        // this.jobInfo = ''
        this.draftLoading = false;
        this.errors = error.response.data.message;
        this.$toast.error(
          "An error occured, Please make sure the title is filled to save a draft."
        );
      }
    },
    getDraftedJob() {
      this.singleContract = "";
      this.pageLoading = true;
      this.$store
        .dispatch("client/getDraftedJob", this.$route.params.draft)
        .then(({ data }) => {
          this.pageLoading = false;
          this.draftedJob = data.data;
          this.jobInfo.title = this.draftedJob.title;
          this.jobInfo.description = this.draftedJob.description;
          this.jobInfo.duration_of_job_in_days =
            this.draftedJob.duration_of_job_in_days;
          this.jobInfo.number_of_words = this.draftedJob.number_of_words;
          this.jobInfo.price = this.draftedJob.price;
          this.jobInfo.price = this.draftedJob.price;
        })
        .catch((err) => {
          console.log(err);
          this.pageLoading = false;
          this.$toast.success("There was an error getting the job");
        });
    },
  },
  mounted() {
    this.getDraftedJob();
  },
  computed: {
    ...mapGetters({
      draftedJob: "client/draftedJob",
    }),
  },
};
</script>

<style>
.circleRound {
  border: 2px solid #008952;
  border-radius: 50%;
  padding: 1px 8px;
}
.dragAndDrop {
  padding: 40px;
  border: 1px dashed #008952;
}
.radioBoxDiv {
  border: 1px #008952 solid;
  border-radius: 10px;
  padding: 15px;
}
</style>
