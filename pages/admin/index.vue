<template>
  <div>
    <div>
      <div class="row noMargin">
        <v-col cols="12" sm="12" lg="9" class="">
          <div class="dashMainContent">
            <div>
              <div class="row">
                <v-col cols="12" sm="12" lg="12">
                  <div class="nameAndLocation">
                    <h1 class="darkGreyColor">Admin Panel</h1>
                  </div>
                </v-col>
              </div>
            </div>
            <div class="mt-10">
              <div class="row textCenter">
                <v-col cols="6" sm="6">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Active Writers</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="6" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Suspended Writers</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="6" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">0</h3>
                    <p class="darkGreyColor">Tests Available</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="6" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Tests Passed</p>
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="3">
          <div class="sideB rightSideDash">
            <div>
              <v-btn
                class="myBtn findBtn fullWidth"
                @click="
                  () => {
                    this.dialog = true;
                  }
                "
              >
                Add Test Links
              </v-btn>
            </div>
            <hr class="fullWidth my-5" />
            <div>
              <v-btn
                class="myBtn findBtn fullWidth"
                @click="
                  () => {
                    this.dialog2 = true;
                  }
                "
              >
                Verify Initial Test
              </v-btn>
            </div>
            <hr class="fullWidth my-5" />

            <div>
              <v-btn
                class="myBtn findBtn fullWidth"
                @click="
                  () => {
                    this.dialog3 = true;
                  }
                "
              >
                Verify Final Test
              </v-btn>
            </div>
            <hr class="fullWidth my-5" />
          </div>
        </v-col>
      </div>

      <div class="addTestLinkDialog">
        <v-col cols="auto">
          <v-dialog
            v-model="dialog"
            transition="dialog-top-transition"
            max-width="600"
          >
            <template>
              <v-card class="py-5">
                <div class="centerflex columnFlex">
                  <v-card-text>
                    <h2 class="mainColor textCenter">Add test links</h2>
                    <p class="textCenter mt-3">
                      Please add links to the test writers are to take in each
                      stage of their application.
                    </p>

                    <div class="mt-5">
                      <div class="row">
                        <v-col cols="12" sm="12">
                          <span>Test Stage</span>
                          <div>
                            <select
                              class="selectBank normalInput2 fullWidth"
                              v-model="testLink.test_stage"
                            >
                              <option value="training_phase">
                                Training Phase
                              </option>
                              <option value="stage_one">Stage One Test</option>
                              <option value="stage_two">Stage Two Test</option>
                            </select>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <span>Test url</span>
                          <input
                            type="text"
                            class="normalInput2 fullWidth"
                            v-model="testLink.url"
                          />
                        </v-col>
                      </div>
                    </div>
                  </v-card-text>
                </div>
                <div class="flex justifyCenter mobileColumn">
                  <v-btn
                    @click="addLink()"
                    class="findBtn mx-3 my-1"
                    :loading="loading"
                    >Add Link</v-btn
                  >
                </div>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </div>

      <div class="Dialog2">
        <v-col cols="auto">
          <v-dialog
            v-model="dialog2"
            transition="dialog-top-transition"
            max-width="600"
          >
            <template>
              <v-card class="py-5">
                <div class="centerflex columnFlex">
                  <v-card-text>
                    <h2 class="mainColor textCenter">Verify Initial Test</h2>
                    <p class="textCenter mt-3">
                      Please input the emails of the people that passed or
                      failed. A mail would be sent to them notifying them
                    </p>
                    <div class="mt-5">
                      <div class="row">
                        <v-col cols="12" sm="12">
                          <span>Result</span>
                          <div>
                            <select
                              class="selectBank normalInput2 fullWidth"
                              v-model="first_phase_verify.test_result"
                            >
                              <option value="passed">Passed</option>
                              <option value="failed">Failed</option>
                            </select>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <span>Emails (seperated by comma)</span>
                          <div>
                            <input
                              type="text"
                              class="normalInput2 fullWidth my-1 mr-2"
                              v-model="first_phase_verify.emails"
                            />
                          </div>
                        </v-col>
                        <!-- <v-col cols="12" sm="12">
                          <span>Emails of writers</span>
                          <div
                            v-for="(find, index) in first_phase_verify.emails"
                            :key="index"
                            class="flex alignCenter"
                          >
                            <input
                              type="text"
                              class="normalInput2 fullWidth my-1 mr-2"
                              v-model="find.value"
                            />
                            <div>
                              <a @click="deleteFind">
                                <span><i class="fas fa-trash"></i></span>
                              </a>
                            </div>
                          </div>
                          <div class="my-5">
                            <a @click="addFind"
                              ><p class="mainColor">
                                <span><i class="fas fa-plus"></i></span> New
                                Email
                              </p></a
                            >
                          </div>
                        </v-col> -->
                      </div>
                    </div>
                  </v-card-text>
                </div>
                <div class="flex justifyCenter mobileColumn">
                  <v-btn
                    @click="verifyInitialTest()"
                    class="findBtn mx-3 my-1"
                    :loading="loading"
                    >Add Results</v-btn
                  >
                </div>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </div>

      <div class="Dialog3">
        <v-col cols="auto">
          <v-dialog
            v-model="dialog3"
            transition="dialog-top-transition"
            max-width="600"
          >
            <template>
              <v-card class="py-5">
                <div class="centerflex columnFlex">
                  <v-card-text>
                    <h2 class="mainColor textCenter">Verify Final Test</h2>
                    <p class="textCenter mt-3">
                      Please input the emails of the people that passed or
                      failed. A mail would be sent to them notifying them
                    </p>
                    <div class="mt-5">
                      <div class="row">
                        <v-col cols="12" sm="12">
                          <span>Result</span>
                          <div>
                            <select
                              class="selectBank normalInput2 fullWidth"
                              v-model="final_phase_verify.test_result"
                            >
                              <option value="passed">Passed</option>
                              <option value="failed">Failed</option>
                            </select>
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <span>Emails (seperated by comma)</span>
                          <div>
                            <input
                              type="text"
                              class="normalInput2 fullWidth my-1 mr-2"
                              v-model="final_phase_verify.emails"
                            />
                          </div>
                        </v-col>
                        <!-- <v-col cols="12" sm="12">
                          <span>Emails of writers</span>
                          <div
                            v-for="(find, index) in final_phase_verify.emails"
                            :key="index"
                            class="flex alignCenter"
                          >
                            <input
                              type="text"
                              class="normalInput2 fullWidth my-1 mr-2"
                              v-model="find.value"
                            />
                            <div>
                              <a @click="deleteFind2">
                                <span><i class="fas fa-trash"></i></span>
                              </a>
                            </div>
                          </div>
                          <div class="my-5">
                            <a @click="addFind2"
                              ><p class="mainColor">
                                <span><i class="fas fa-plus"></i></span> New
                                Email
                              </p></a
                            >
                          </div>
                        </v-col> -->
                      </div>
                    </div>
                  </v-card-text>
                </div>
                <div class="flex justifyCenter mobileColumn">
                  <v-btn
                    @click="verifyFinalTest()"
                    class="findBtn mx-3 my-1"
                    :loading="loading"
                    >Add Results</v-btn
                  >
                </div>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      testLink: {
        test_stage: "",
        url: "",
      },
      first_phase_verify: {
        emails: [],
        test_result: "",
      },
      final_phase_verify: {
        emails: [],
        test_result: "",
      },
      loading: false,
    };
  },
  methods: {
    copyJobLink() {
      navigator.clipboard.writeText(
        `https://www.afriwrite.com/profile/${this.$auth.user.username}`
      );
      this.$toast.success("Link copied");
    },
    async addLink() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/admin/save-test-link`,
          this.testLink
        );
        this.$toast.success("You have added the test link successfully!");
        this.loading = false;
        this.dialog = false;
        return response;
      } catch (error) {
        this.loading = false;
        this.$toast.error(error.response.data.error);
      }
    },
    addFind: function () {
      this.first_phase_verify.emails.push({ value: "" });
    },
    deleteFind: function (index) {
      console.log(index);
      console.log(this.first_phase_verify.emails);
      this.first_phase_verify.emails.splice(index, 1);
    },
    addFind2: function () {
      this.final_phase_verify.emails.push({ value: "" });
    },
    deleteFind2: function (index) {
      console.log(index);
      console.log(this.final_phase_verify.emails);
      this.final_phase_verify.emails.splice(index, 1);
    },
    async verifyInitialTest() {
      this.first_phase_verify.emails =
        this.first_phase_verify.emails.split(",");
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/admin/verify-writer-initial-test`,
          this.first_phase_verify
        );
        this.$toast.success(
          "You have added the list of writers result for the initial test!"
        );
        this.loading = false;
        this.dialog2 = false;
        return response;
      } catch (error) {
        this.loading = false;
        this.$toast.error(error.response.data.error);
      }
    },
    async verifyFinalTest() {
      this.final_phase_verify.emails =
        this.final_phase_verify.emails.split(",");
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/admin/verify-writer-final-test`,
          this.final_phase_verify
        );
        this.$toast.success(
          "You have added the list of writers result for the final test!"
        );
        this.loading = false;
        this.dialog3 = false;
        return response;
      } catch (error) {
        this.loading = false;
        this.$toast.error(error.response.data.error);
      }
    },
  },
  mounted() {
    // this.fetchAllBanks;
  },
};
</script>

<style>
.profileImage {
  padding: 5px 7px;
  width: fit-content;
  border: 1px solid rgba(0, 137, 82, 0.2);
  border-radius: 50%;
}
.profileImage img {
  width: 70px !important;
  height: 70px !important;
  border-radius: 50%;
}
.normalInput2 {
  background: #ececec;
  padding: 5px 15px;
  height: 35px;
  border-radius: 5px;
}
.selectBank {
  -webkit-appearance: auto;
}

.textMainColor {
  color: #707070;
}
.jobStat span {
  width: fit-content;
  background-color: rgba(0, 137, 82, 0.05);
  padding: 5px;
  border-radius: 2px;
}
.jobStat .percent {
  width: 70%;
  height: 10px;
  background-color: #00e68a;
  border-radius: 20px;
  margin-top: 10px;
}
.jobStat i {
  color: #ffde00;
}
.colorBlue {
  color: blue;
}
.rightSideDash {
  padding: 30px 30px;
}
.dashMainContent {
  margin: 20px 10px 20px 120px;
}
.profileInfoHolder {
  padding: 15px 15px;
  border-radius: 15px;
  border-left: #008952 15px solid;
  background-color: white;
}
.nameAndLocation {
  margin: 0 !important;
}
.lca i {
  margin-right: 10px;
}
.infoCards {
  background-color: rgba(0, 137, 82, 0.05);
  border-radius: 15px;
  padding: 15px;
}
.infoCards h3 {
  background-color: rgba(0, 137, 82, 0.2);
  width: fit-content;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  margin: auto;
}
.backWhite {
  background-color: white;
}
.workHis {
  padding: 30px;
  border-radius: 20px;
  background-color: rgba(248, 248, 248, 1);
}
.sideB {
  background-color: #f8f8f8;
  border-radius: 25px 0 0 25px;
}
@media (max-width: 1000px) {
  .dashMainContent {
    margin: 1px 5px 20px 5px;
  }
}
@media (max-width: 600px) {
  .profilePicture img {
    width: 150px;
  }
}
</style>