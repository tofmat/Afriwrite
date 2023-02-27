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
            <h2 class="mt-4 mb-3">All Users</h2>
            <v-card>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">S/N</th>
                      <th class="text-left">Name</th>
                      <th class="text-left">Email</th>
                      <th class="text-left">Role</th>
                      <th class="text-left">Phone Number</th>
                      <th class="text-left">Account Status</th>
                      <th class="text-left">Date Joined</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(user, index) in users"
                      :key="user.id"
                    >
                      <td>
                        {{ index+1 }}
                      </td>
                      <td>
                        {{ user.first_name }}  {{ user.last_name }}
                      </td>
                      <td>
                        {{ user.email }}
                      </td>
                      <td>
                        {{ user.role }}
                      </td>
                      <td>
                        {{ user.phone_number ? user.phone_number : '------' }}
                      </td>
                      <td>
                        <span :class=" user.account_status == 'active' ? 'text-success': 'text-danger'">
                          {{ user.account_status }}
                        </span>
                      </td>
                      <td>
                        {{ prettyPrintDate(user.created_at) }}
                      </td>
                      <td>
                        <v-btn class="findBtn mb-4 mt-3 fullWidth"
                          @click="openStatusModal(user)"
                        >
                          Update User Status
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
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
                Verify Writer Test
              </v-btn>
            </div>
            <hr class="fullWidth my-5" />
          </div>
        </v-col>
      </div>
      <div class="p-5 mt-10 table">
        <v-col cols="12">
        
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
                              <!-- <option value="training_phase">
                                Training Phase
                              </option> -->
                              <option value="stage_one" selected>Stage One Test</option>
                              <!-- <option value="stage_two">Stage Two Test</option> -->
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
                    <h2 class="mainColor textCenter">Verify Writer Test</h2>
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

      <v-col cols="auto">
        <v-dialog
          v-model="updateStatusModal"
          persistent
          transition="dialog-top-transition"
          max-width="600"
        >
          <v-card class="py-5">
            <div class="centerflex columnFlex">
              <v-card-text>
                <h3 class="darkGreyColor textCenter">
                  Update {{ selectedUser.email }} account status!
                </h3>
                <v-col cols="12" sm="12">
                  <div class="d-flex">
                  <span class="mt-3 mr-4">Select Status:</span>
                  <div>
                    <select
                      class="selectBank normalInput2 fullWidth form-control mt-2"
                      v-model="selectedUser.status"
                    >
                      <option value="">-- select status --</option>
                      <option value="active">Active</option>
                      <option value="pending">Inactive</option>
                      <option value="suspended">Suspend</option>
                    </select>
                  </div>
                  </div>
                </v-col>
              </v-card-text>
            </div>
            <div class="flex justifyCenter mobileColumn">
                <v-btn text 
                @click="() => {
                  this.updateStatusModal = false;
                }"
              >
                Cancel
              </v-btn>
              <v-btn class="greyBtn mx-3 my-1"
                :loading="loading"
                @click="updateUserStatus()"
              >
                Update
              </v-btn>
            </div>
          </v-card>
        </v-dialog>
      </v-col>
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
      updateStatusModal: false,
      users: [],
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
      selectedUser:{
        status: '',
        email: '',
        id: ''
      }
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
        console.log(error.response)
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
    async getAllUsers(){
      try {
        const { data } = await this.$axios.get(
          `/v1/user/all`
        );
        if(data && data.data){
          this.users = data.data
          console.log(data.data)
          return true; 
        }
      } catch (error) {
        this.loading = false;
        console.log(error.response)
        this.$toast.error(error.response.data.error);
      }
    },
    openStatusModal(user){
      this.selectedUser.email = user.email
      this.selectedUser.id = user.id
      this.selectedUser.status = user.account_status
      this.updateStatusModal = true
    },
    async updateUserStatus(){
     this.loading = true
      try {
        const { data } = await this.$axios.post(
          `/v1/user/update-account-status/${this.selectedUser.id}`,
          this.selectedUser
        );
        if(data && data.data){
          this.$toast.success("Successful");
          this.loading = false;
          this.updateStatusModal = false;

          // reset form
          this.selectedUser.email = ""
          this.selectedUser.id = ""
          this.selectedUser.status = ""
          this.getAllUsers()
        }
      } catch (error) {
        this.loading = false;
        console.log(error)
        this.$toast.error(error.response.data.error);
      }
    }
  },
  mounted() {
    this.getAllUsers();
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