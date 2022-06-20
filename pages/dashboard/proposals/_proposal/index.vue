<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <h2 class="mainColor mb-5">Submit a Proposal</h2>

        <div v-if="apiLoading">
          <spinner />
        </div>

        <div class="jobDetails" v-else>
          <div class="row">
            <v-col cols="12" sm="12" lg="9">
              <h2 class="blackColor mb-3">{{ singleJob.title }}</h2>
              <hr class="mb-3" />
              <div class="jobDetailsTexts">
                <p>{{ singleJob.description }}</p>
                <div class="flex alignCenter scrollable-x">
                  <v-btn class="tagBtn">Writing</v-btn>
                  <v-btn class="tagBtn">Content writing</v-btn>
                  <v-btn class="tagBtn">Proof reading</v-btn>
                </div>
              </div>
              <div class="row alignCenter jobTips mt-10">
                <v-col cols="6" sm="4">
                  <div class="flex alignCenter justifyCenter">
                    <p class="mr-2">Budget</p>
                    <h2>&#8358;{{ singleJob.price }}</h2>
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
            </v-col>

            <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
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
                  <h4>USA</h4>
                  <p class="mb-5">20 Jobs posted</p>
                </div>
              </div>
            </v-col>
          </div>
          <form @submit.prevent="sendProposal()">
            <div class="terms mt-10">
              <div class="row">
                <v-col cols="12" sm="12" lg="9">
                  <h2 class="darkGreyColor mb-3">Terms</h2>
                  <hr class="mb-3" />
                </v-col>

                <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
                  <div>
                    <div class="sideGreenInfo">
                      <p>Clients Budget</p>
                      <h2>&#8358;{{ singleJob.price }} NGN</h2>
                    </div>
                  </div>
                </v-col>
              </div>

              <div class="mt-5">
                <h3>How do you want to get paid?</h3>
                <v-container class="px-0 radioTerms" fluid>
                  <v-radio-group v-model="proposal.payment_mode">
                    <v-radio color="green darken-3" value="by_project">
                      <template v-slot:label>
                        <div>
                          <p class="darkGreyColor">By Project</p>
                          <p>
                            You get paid at once when you complete the project.
                            Payment is made on approval of a job well done by
                            the client
                          </p>
                        </div>
                      </template>
                    </v-radio>
                    <v-radio
                      color="green darken-3"
                      value="by_milestone"
                      disabled
                    >
                      <template v-slot:label>
                        <div>
                          <p class="darkGreyColor">
                            By Milestone (coming soon)
                          </p>
                          <p>
                            You get paid the equivalent milestone amount when
                            you complete the particular milestone. Payment is
                            made on approval of the milestone by the client
                          </p>
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-container>

                <div
                  class="
                    flex
                    alignCenter
                    width70
                    mt-5
                    justifyBetween
                    breakToColumn
                  "
                  v-if="proposal.payment_mode === 'by_project'"
                >
                  <div>
                    <h3>Proposed Amount</h3>
                    <p>Total amount you would like to get paid (Per Word)</p>
                  </div>
                  <input
                    type="tel"
                    v-model="proposal.proposed_amount"
                    placeholder="N5"
                    class="normalInput"
                  />
                </div>

                <div
                  class="mt-5"
                  v-if="proposal.payment_mode === 'by_milestone'"
                >
                  <h3 class="mb-5">Add as many milestones as you need</h3>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Description</th>
                          <th class="text-left">Deliverable</th>
                          <th class="text-left">Milestone Amount</th>
                          <th class="textCenter"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="singleItem in proposal.milestones"
                          :key="singleItem.id"
                        >
                          <td>
                            <v-text-field
                              v-model="singleItem.description"
                              placeholder="Description of this milestone"
                              required
                            ></v-text-field>
                          </td>
                          <td>
                            <v-text-field
                              v-model="singleItem.expected_time"
                              placeholder="What would you deliver in this milestone ?"
                              required
                            ></v-text-field>
                          </td>
                          <td>
                            <v-text-field
                              placeholder="Price per unit"
                              v-model="singleItem.milestone_amount"
                              required
                            >
                              <v-icon slot="prepend" color="green">
                                mdi-currency-ngn
                              </v-icon>
                            </v-text-field>
                          </td>
                          <td class="textCenter">
                            <i
                              class="far fa-times-circle"
                              @click="removeItem(singleItem)"
                            ></i>
                          </td>
                        </tr>
                      </tbody>
                      <div class="my-5">
                        <a @click="addItem()"
                          ><p class="mainColor">
                            <span><i class="fas fa-plus"></i></span> Add new
                            Milestone
                          </p></a
                        >
                      </div>
                    </template>
                  </v-simple-table>
                </div>

                <div class="mt-10">
                  <div class="width70">
                    <div class="flex projectAmount my-5 justifyBetween">
                      <div class="width40">
                        <h4 class="darkGreyColor">
                          Total Project Amount
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <i
                                class="fas fa-info-circle ml-1"
                                v-bind="attrs"
                                v-on="on"
                              ></i>
                            </template>
                            <span
                              >This includes the total milestone amount, <br />
                              and is the amount the client will see on your
                              proposal</span
                            >
                          </v-tooltip>
                        </h4>
                      </div>
                      <div>
                        <h4>&#8358;</h4>
                      </div>
                      <div>
                        <h4>60.00 NGN</h4>
                      </div>
                    </div>
                    <hr />

                    <div class="flex projectAmount my-5 justifyBetween">
                      <div class="width40">
                        <h4 class="darkGreyColor">
                          AfriWrites Service Charge
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <i
                                class="fas fa-info-circle ml-1"
                                v-bind="attrs"
                                v-on="on"
                              ></i>
                            </template>
                            <span>Learn More</span>
                          </v-tooltip>
                        </h4>
                      </div>
                      <div>
                        <h4>&#8358;</h4>
                      </div>
                      <div>
                        <h4>-10.00 NGN</h4>
                      </div>
                    </div>
                    <hr />
                    <div class="flex projectAmount my-5 justifyBetween">
                      <div class="width40">
                        <h4 class="darkGreyColor">
                          You would be paid
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <i
                                class="fas fa-info-circle ml-1"
                                v-bind="attrs"
                                v-on="on"
                              ></i>
                            </template>
                            <span
                              >Estimated amount you will be paid after <br />
                              completing this project</span
                            >
                          </v-tooltip>
                        </h4>
                      </div>
                      <div>
                        <h4>&#8358;</h4>
                      </div>
                      <div>
                        <h4>50.00 NGN</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="duration mt-10">
              <div class="row">
                <v-col cols="12" sm="12" lg="9">
                  <h2 class="darkGreyColor mb-3">Duration</h2>
                  <hr class="mb-3" />
                </v-col>

                <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
                  <div>
                    <div class="sideGreenInfo">
                      <p>Client’s Estimated Time</p>
                      <h2>{{ singleJob.duration_of_job_in_days }} Days</h2>
                    </div>
                  </div>
                </v-col>
              </div>
              <div
                class="
                  flex
                  alignCenter
                  width70
                  mt-5
                  justifyBetween
                  breakToColumn
                "
              >
                <div>
                  <h3>How long will this project take?</h3>
                  <p>Total estimated time that this project will take (Days)</p>
                </div>
                <input
                  type="number"
                  v-model="proposal.duration"
                  placeholder="2 Days"
                  class="normalInput"
                />
              </div>
            </div>

            <div class="additionalInfo mt-10">
              <div class="row">
                <v-col cols="12" sm="12" lg="9">
                  <h2 class="darkGreyColor mb-3">Additional Information</h2>
                  <hr class="mb-3" />
                </v-col>

                <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
                  <!-- <div>
                  <div class="sideGreenInfo">
                    <p>Client’s Estimated Time</p>
                    <h2>1-2 Months</h2>
                  </div>
                </div> -->
                </v-col>
              </div>
              <div class="mt-3">
                <h4>Cover Letter</h4>
                <p>
                  Why are you the best fit for this gig/role? Introduce and
                  explain yourself. Keep it short and simple
                </p>
                <textarea
                  v-model="proposal.cover_letter"
                  rows="5"
                  class="textArea"
                  placeholder="Type cover letter here"
                ></textarea>
              </div>
              <div class="mt-5">
                <h4>Attachments</h4>
                <p>
                  Include any other attachments to further prove your
                  qualification
                </p>
                <label class="custom-file-upload">
                  <input
                    className="inputDefault"
                    type="file"
                    accept="file_extension|audio/*|video/*|image/*|media_type"
                    v-on:change="onChange"
                    multiple
                  />
                  <div class="flex alignCenter attachFile mt-5">
                    <i class="fas fa-paperclip"></i>
                    <p>Attach Files</p>
                  </div>
                </label>
                <div v-if="this.proposal.file" class="mt-3">
                  <span v-for="file in this.proposal.file" :key="file.id"
                    >{{ file.name }},&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div class="mt-10 flex justifyCenter">
              <v-btn class="findBtn" type="submit" :loading="loading"
                >Apply Now</v-btn
              >
            </div>
          </form>

          <v-col cols="auto">
            <v-dialog
              v-model="dialog"
              transition="dialog-top-transition"
              max-width="600"
              persistent
            >
              <template>
                <v-card class="py-5">
                  <div class="centerflex columnFlex">
                    <div class="">
                      <img
                        src="../../../../assets/images/Group156.png"
                        alt="Check Mail"
                      />
                    </div>
                    <v-card-text>
                      <h3 class="darkGreyColor textCenter">
                        Successfully Submitted
                      </h3>
                      <p class="textCenter mt-3">
                        Good job! You have successfully given that a shot.
                        Checkout more jobs on your job feed
                      </p>
                    </v-card-text>
                  </div>
                  <div class="flex justifyCenter mobileColumn">
                    <v-btn class="findBtn mx-3 my-1" to="/dashboard/jobfeed"
                      >My Job Feeds</v-btn
                    >
                  </div>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import addMilestoneForm from "../../../../components/addMilestoneForm";
export default {
  components: {
    addMilestoneForm,
  },
  layout: "dashboard",
  data() {
    return {
      singleJob: "",
      singleProposal: "",
      loading: false,
      apiLoading: false,
      clientInfo: "",
      activities: "",
      savedJobs: "",
      dialog: false,
      proposal: {
        duration: "",
        cover_letter: "",
        proposed_amount: "",
        payment_mode: "by_project",
        milestones: [
          {
            description: "",
            deliverables: "",
            amount: "",
          },
        ],
        file: null,
      },
    };
  },
  methods: {
    onChange(event) {
      this.proposal.file = event.target.files;
    },
    addItem() {
      this.proposal.milestones.push({
        description: "",
        milestone_amount: "",
        expected_time: "",
      });
    },
    removeItem(val) {
      this.milestones = this.milestones.reduce(
        (p, c) => (c.description !== val.description && p.push(c), p),
        []
      );
    },
    openDialog() {
      this.dialog = true;
    },
    getSingleJobs() {
      this.singleJob = "";
      this.apiLoading = true;
      this.$store
        .dispatch("writer/getSingleJob", this.$route.params.proposal)
        .then(({ data }) => {
          this.apiLoading = false;
          this.singleJob = data.data;
          this.clientInfo = this.singleJob.client;
          this.activities = this.singleJob.activities;
          this.savedJobs = this.singleJob.saved_jobs;
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the job");
        });
    },
    getSingleProposal() {
      this.singleProposal = "";
      this.apiLoading = true;
      this.$store
        .dispatch(
          "writer/getSingleProposal",
          this.$route.params.proposal
        )
        .then(({ data }) => {
          this.apiLoading = false;
          this.singleProposal = data.data;
          this.proposal.cover_letter = this.singleProposal.cover_letter;
          this.proposal.proposed_amount = this.singleProposal.proposed_amount;
          this.proposal.duration = this.singleProposal.duration;
          this.proposal.payment_mode = this.singleJob.payment_mode;
        })
        .catch((err) => {
          this.apiLoading = false;
          this.$toast.success("There was an error getting the job");
        });
    },
    copyJobLink() {
      navigator.clipboard.writeText(
        `https://www.afriwrite.com/jobs/${this.singleJob.public_reference_id}`
      );
      this.$toast.success("Link copied");
    },
    async sendProposal() {
      let formData = new FormData();
      if (this.proposal.file) {
        for (const i of Object.keys(this.proposal.file)) {
          formData.append("file[" + i + "]", this.proposal.file[i]);
        }
      }
      formData.append("duration", this.proposal.duration);
      formData.append("cover_letter", this.proposal.cover_letter);
      formData.append("proposed_amount", this.proposal.proposed_amount);
      formData.append("payment_mode", this.proposal.payment_mode);
      formData.append("milestones[]", this.proposal.milestones);
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/writer/jobs/${this.singleJob.id}/submit-proposal`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.$toast.success("You have successfully submitted a proposal!");
        this.loading = false;
        this.dialog = true;
        this.proposal = "";
        return response;
      } catch (error) {
        this.loading = false;
        // this.errors = error.response.data.error;
        this.$toast.error(error.response.data.error);
      }
    },
  },
  mounted() {
    this.getSingleJobs();
    this.getSingleProposal();
  },
  computed: {
    ...mapGetters({
      // singleJob: "writer/singleJob",
      // singleProposal: "writer/singleProposal",
      savedProposal: "writer/savedProposal",
    }),
  },
};
</script>

<style>
.width40 {
  width: 30%;
}
.v-radio {
  background-color: #f5f5f5;
  padding: 15px 8px;
  border-radius: 5px;
}
.v-item--active {
  background-color: rgba(0, 137, 82, 0.13) !important;
}
.jobI {
  /* padding: 1em; */
  background-color: white;
  /* border-radius: 10px; */
}
.custom-file-upload input[type="file"] {
  display: none;
}
.custom-file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.workDiv {
  padding: 10px !important;
  background-color: transparent !important;
  border: #008952 solid 1px;
  color: #008952 !important;
  box-shadow: none !important;
}
.radioTerms p {
  margin: 0;
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
.jobTips h2 {
  color: white;
  font-weight: 700;
}
.jobTips p {
  margin: 0;
}
.jobClientPrice {
  margin-right: 20px;
}

.sideGreenInfo {
  background-color: #008952;
  padding: 15px;
  color: #fff !important;
  border-radius: 0 25px 25px 0;
}
.sideGreenInfo p {
  color: white;
  margin: 0;
}
.attachFile p {
  margin: 0;
}
.attachFile i {
  margin-right: 10px;
  color: #00e68a;
}
.clientInfo {
  background-color: #f8f8f8;
  padding: 20px;
  color: #4d4d4d;
  border-radius: 20px;
}

.clientInfo h4 {
  color: #4d4d4d;
}
@media (max-width: 1000px) {
  .dashDefaultContent {
    margin: 30px 8px 20px 8px;
  }
}
</style>
