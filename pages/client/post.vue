<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Post a Job</h2>
      <h3 class="mainColor slimText">Get Started</h3>
      <form @submit.prevent="addJob()">
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
                  <span><i class="far fa-dot-circle mr-3"></i></span>SEO Writer
                  needed for a website copy
                </p>
                <p class="noMargin">
                  <span><i class="far fa-dot-circle mr-3"></i></span>Content
                  Creator needed for reasearch and documentation
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
              <h3 class="mt-3">Choose Category</h3>
              <p>
                Select the category this job falls under 
              </p>
              <v-autocomplete
                v-model="jobInfo.category"
                :items="categoryItems"
                outlined
                dense
                chips
                color="green darken-3"
                small-chips
                label="Categories"
              ></v-autocomplete>
              <h3 class="mt-3">Choose Niches</h3>
              <p>
                Select the writing niches you want for the job (You can select more
                than one)
              </p>
              <v-autocomplete
                v-model="niches"
                :items="nicheItems"
                outlined
                dense
                chips
                color="green darken-3"
                small-chips
                label="Select Niches"
                multiple
              ></v-autocomplete>
              <h3 class="mt-3">Choose Skills</h3>
              <p>
                Select the skills that you want the freelancer to have(You can select more
                than one)
              </p>
              <v-select
                v-model="skills"
                :items="skillItems"
                :menu-props="{ maxHeight: '400' }"
                multiple
                chips
                persistent-hint
                color="green darken-3"
                required
                outlined
                dense
                label="Select Skills"
              ></v-select>
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
                            src="../../assets/images/working.svg"
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
                            src="../../assets/images/working-at-home.svg"
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
                            src="../../assets/images/handshake.svg"
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
                  <h4>Price per word (&#8358;)</h4>
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
                <div class="my-2" v-if="isUseBNPL">
                  <v-checkbox
                    v-model="jobInfo.is_bnpl_enabled"
                    label="Use Buy Now Pay Later Feature"
                  ></v-checkbox>
                </div>
                <div class="my-2" v-if="isBNPLTemporaryApproval">
                  <h4>Please attach screenshots of detailed conversations you had with the original client for proof:</h4>
                   <v-file-input
                    chips
                    counter
                    multiple
                    small-chips
                    truncate-length="15"
                    v-on:change="onBNPLFileChange"
                    label="Attach screenshots (you can select more than one media at the same time)."
                  ></v-file-input>
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
    <v-col cols="auto">
      <v-dialog
        v-model="idDialog"
        persistent
        transition="dialog-top-transition"
        max-width="600"
      >
        <v-card class="py-5">
          <div class="centerflex columnFlex">
            <v-card-text>
              <h3 class="darkGreyColor textCenter">
                Please complete your profile to get full control of your
                profile
              </h3>
              <p class="textCenter mt-2">
                You have to add your ID and get verified before posting jobs!
              </p>
            </v-card-text>
          </div>
          <div class="flex justifyCenter mobileColumn">
            <v-btn class="greyBtn mx-3 my-1" to="/client/profile"
              >Edit Profile</v-btn
            >
          </div>
        </v-card>
      </v-dialog>
    </v-col>
    <suspensionDialog />
  </div>
</template>

<script>
import suspensionDialog from "../../components/suspensionDialog";
export default {
  layout: "client",
  components: { suspensionDialog },
  data: () => ({
    errors: "",
    loading: false,
    draftLoading: false,
    categoryItems: [
      "Article Writing",
      "Website Copywriting",
      "Sales and Marketing Copy",
      "Career Writing",
      "Academic Writing",
      "Creative Writing ",
      "Social Media Writing",
    ],
    skills: [],
    niches: [],
    jobInfo: {
      title: "",
      description: "",
      project_duration: "",
      category: "",
      level_of_experience: "",
      number_of_words: "",
      price: "",
      duration_of_job_in_days: "",
      file: null,
      writing_niches: [],
      skills: [],
      is_bnpl_enabled: false,
      bnpl_contract_proof_assets: []
    },
    skillItems:[
      "Search Engine Optimization (SEO)", "In-depth Topic Research", "Keyword Research", 
      "Image Optimization", "Meta Description", "Meta Tags", "Title Tags", "Slug Writing", 
      "Blog Copywriting", "H1-H6 Headline Usage", "WordPress Content Upload", 
      "WordPress Content Optimization", "WordPress Blog Management", "Blog Editing and Proofreading", 
      "SurferSEO", "Grammarly Premium", "Copyscape", "Ahrefs", "SEMRush", "Ubersuggest"
    ],
    nicheItems: [
      "Finance and Accounting", "Law and Legal Writing", "Cryptocurrency and Stocks", 
      "Medical, Health, and Fitness", "News and Press Release", "Technology and Technical Writing", 
      "Digital Marketing", "Social Media Marketing", "Food, Wine, and Drinks", "Real Estate", 
      "Fashion and Beauty", "Entertainment, Music, and Movies", "Sports", "Travel"
    ]
  }),
  async mounted() {
    const { data } = await this.$auth.fetchUser()
    if(data){
      this.$auth.setUser(data.data)
    }
  },
  computed:{
    idDialog(){
      if(this.$auth.user.client_id_verification_status != 'completed') return true
    },
    user(){
      return this.$auth.user
    },
    isUseBNPL(){
      return this.user.client_buy_now_pay_later_status === 'temporary_approval' || this.user.client_buy_now_pay_later_status === 'completed'
    },
    isBNPLTemporaryApproval(){
      return this.jobInfo.is_bnpl_enabled && this.user.client_bpnl_temporary_approval_counter < 3
    } 
  },
  methods: {
    onBNPLFileChange(event){
      this.jobInfo.bnpl_contract_proof_assets = event;
    },
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

      if (this.jobInfo.bnpl_contract_proof_assets) {
        for (const j of Object.keys(this.jobInfo.bnpl_contract_proof_assets)) {
          formData.append("bnpl_contract_proof_assets[" + j + "]", this.jobInfo.bnpl_contract_proof_assets[j]);
        }
      }

      if(this.skills.length > 0){
        this.jobInfo.skills = this.skills
      }

      if(this.niches.length > 0){
        this.jobInfo.writing_niches = this.niches
      }
      
      formData.append("title", this.jobInfo.title);
      formData.append("description", this.jobInfo.description);
      formData.append("price", this.jobInfo.price);
      formData.append("project_duration", this.jobInfo.project_duration);
      formData.append("category", this.jobInfo.category);
      formData.append("level_of_experience", this.jobInfo.level_of_experience);
      formData.append("number_of_words", this.jobInfo.number_of_words);
      formData.append("writing_niches", JSON.stringify(this.jobInfo.writing_niches));
      formData.append("skills", JSON.stringify(this.jobInfo.skills));
      formData.append("is_bnpl_enabled", this.jobInfo.is_bnpl_enabled)

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
        this.resetForm();
        return response;
      } catch (error) {
        this.jobInfo = "";
        this.loading = false;
        this.errors = error.response.data.error;
        this.$toast.error("An error occured, check all fields and try again");
      }
    },
    resetForm(){
      this.jobInfo.title = ""
      this.jobInfo.description = ""
      this.jobInfo.project_duration = ""
      this.jobInfo.category = ""
      this.jobInfo.level_of_experience = ""
      this.jobInfo.number_of_words = ""
      this.jobInfo.price = ""
      this.jobInfo.duration_of_job_in_days = ""
      this.jobInfo.file = null
      this.jobInfo.writing_niches = []
      this.jobInfo.skills = []
      this.jobInfo.is_bnpl_enabled = false
      this.niches = []
      this.skills = []

      // scroll to the top of the page
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
        this.resetForm();
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
