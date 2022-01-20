<template>
  <div>
    <div>
      <div class="row noMargin">
        <v-col cols="12" sm="12" lg="9" class="">
          <div class="dashMainContent">
            <div>
              <div class="row">
                <v-col cols="12" sm="3" lg="2" class="profilePicture">
                  <div class="profileImage">
                    <img
                      src=".././../../assets/images/emptyUser.png"
                      alt="ProfilePic"
                      v-if="!this.$auth.user.profile_picture"
                    />
                    <img
                      :src="this.$auth.user.profile_picture"
                      alt="ProfilePic"
                      v-else
                    />
                  </div>
                </v-col>
                <v-col cols="12" sm="8" lg="5">
                  <div class="nameAndLocation">
                    <h1 class="darkGreyColor">
                      {{ this.$auth.user.first_name }}
                      {{ this.$auth.user.last_name }}
                    </h1>
                    <p>{{ this.$auth.user.username }}</p>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-map-marker-alt"></i>
                      <p class="noMargin">{{ this.$auth.user.country }}</p>
                    </div>
                    <p>Email: {{ this.$auth.user.email }}</p>

                    <p>Phone Number: {{ this.$auth.user.phone_number }}</p>
                    <p class="textMainColor">
                      Bio: {{ this.$auth.user.about_me }}
                    </p>
                  </div>
                </v-col>
                <v-col cols="12" sm="5" lg="5">
                  <div class="jobStat">
                    <span class="flex alignCenter mt-3 lca darkGreyColor"
                      ><i class="fas fa-ribbon"></i>
                      <p class="noMargin">TOP RATED</p></span
                    >
                  </div>
                </v-col>
              </div>
            </div>
            <div class="mt-10">
              <div class="row textCenter">
                <v-col cols="6" sm="6">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Hourly Rate</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="6" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Null</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="6" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">0</h3>
                    <p class="darkGreyColor">Jobs</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="6" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Hours Worked</p>
                  </div>
                </v-col>
              </div>
            </div>
            <!-- <div class="mt-10">
              <div class="backWhite workHis">
                <h2 class="mb-4 darkGreyColor">Work history and feedback</h2>
                <hr class="fullWidth" />
                <div class="mt-4">
                  <div>
                    <v-row>
                      <v-col cols="12" sm="8">
                        <h3 class="mainColor">
                          Storytelling expert with narrative skills and an eye
                          for design
                        </h3>
                        <div class="flex alignCenter my-3 lca">
                          <i class="fas fa-star yellowColor"></i
                          ><i class="fas fa-star yellowColor"></i
                          ><i class="fas fa-star yellowColor"></i
                          ><i class="fas fa-star yellowColor"></i>
                          <h3>5.0</h3>
                        </div>
                        <p class="textItalics">
                          As always, great work and working with you
                        </p>
                      </v-col>
                      <v-col cols="12" sm="4" class="rightAlign">
                        <h3>$60</h3>
                        <h3>Fixed Price</h3>
                      </v-col>
                    </v-row>
                  </div>
                  <hr class="fullWidth mt-4" />
                  <div>
                    <v-row>
                      <v-col cols="12" sm="8">
                        <h3 class="mainColor">
                          Storytelling expert with narrative skills and an eye
                          for design
                        </h3>
                        <div class="flex alignCenter my-3 lca">
                          <i class="fas fa-star yellowColor"></i
                          ><i class="fas fa-star yellowColor"></i
                          ><i class="fas fa-star yellowColor"></i
                          ><i class="fas fa-star yellowColor"></i>
                          <h3>5.0</h3>
                        </div>
                        <p class="textItalics">
                          As always, great work and working with you
                        </p>
                      </v-col>
                      <v-col cols="12" sm="4" class="rightAlign">
                        <h3>$60</h3>
                        <h3>Fixed Price</h3>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="3">
          <div class="sideB rightSideDash">
            <div v-if="!this.$auth.user.recipient_code">
              <v-btn
                class="myBtn findBtn fullWidth"
                @click="
                  () => {
                    this.dialog = true;
                  }
                "
              >
                Add account Number
              </v-btn>
            </div>
            <div class="mt-3">
              <v-btn
                class="myBtn findBtn fullWidth"
                to="/dashboard/profile/edit"
              >
                Edit Profile
              </v-btn>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <p class="darkGreyColor noMargin mb-2">
                <span
                  ><img
                    src="../../../assets/images/24hrs.svg"
                    alt="availableicon"
                    class="mr-2"
                  />AVAILABILITY</span
                >
              </p>
              <h3 class="mainColor" v-if="this.$auth.user.availability == true">
                Currently Available
              </h3>
              <h3 v-else class="mainColor">Not Available</h3>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <div>
                <h4 class="darkGreyColor noMargin mb-2">
                  <span
                    ><i class="far fa-file-alt mr-2 mb-2"></i> Job Link
                  </span>
                </h4>
                <div class="workDiv fullWidth my-3 scrollable-x" to="#">
                  <p class="mainColor noMargin">
                    https://www.afriwrite.com/profile/{{
                      this.$auth.user.username
                    }}
                  </p>
                </div>
                <p class="mainColor arrowCursor" @click="copyJobLink()">
                  Copy link
                </p>
              </div>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <p class="darkGreyColor noMargin mb-2">
                <span
                  ><img
                    src="../../../assets/images/translate.svg"
                    alt="availableicon"
                    class="mr-2"
                  />LANGUAGES</span
                >
              </p>
              <p class="mainColor noMargin">{{ this.$auth.user.languages }}</p>
            </div>
          </div>
        </v-col>
      </div>

      <div>
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
                    <h2 class="mainColor textCenter">Add account number</h2>
                    <p class="textCenter mt-3">
                      Please input the account number you want your money to be
                      settled in. Please cross check before submitting
                    </p>
                    <div class="mt-5">
                      <div class="row">
                        <v-col cols="12" sm="12">
                          <span>Account Number</span>
                          <input
                            type="tel"
                            class="normalInput2 fullWidth"
                            v-model="accountDetails.account_number"
                          />
                        </v-col>
                        <v-col cols="12" sm="12">
                          <span>Name of account</span>
                          <input
                            type="text"
                            class="normalInput2 fullWidth"
                            v-model="accountDetails.description"
                          />
                        </v-col>
                        <v-col cols="12" sm="12">
                          <span>Bank Name</span>
                          <div>
                            <select
                              class="selectBank normalInput2 fullWidth"
                              v-model="accountDetails.bank_code"
                            >
                              <option
                                :value="bank.code"
                                v-for="bank in allBanks"
                                :key="bank.code"
                              >
                                {{ bank.name }}
                              </option>
                            </select>
                          </div>
                        </v-col>
                      </div>
                    </div>
                  </v-card-text>
                </div>
                <div class="flex justifyCenter mobileColumn">
                  <v-btn
                    @click="addAccount()"
                    class="findBtn mx-3 my-1"
                    :loading="loading"
                    >Add Account</v-btn
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
import banks from "../../../static/banks";
export default {
  layout: "dashboard",
  data() {
    return {
      dialog: false,
      allBanks: banks.data,
      accountDetails: {
        account_number: "",
        bank_code: "",
        description: "",
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
    async addAccount() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/writer/payment-transer-recipient`,
          this.accountDetails
        );
        this.$toast.success(
          "You have added your account details successfully!"
        );
        this.loading = false;
        this.dialog = false;
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
  padding: 30px 35px;
  width: fit-content;
  border: 1px solid rgba(0, 137, 82, 0.2);
  border-radius: 50%;
}
.profileImage img {
  width: 50px !important;
  height: 50px !important;
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
  padding: 50px 30px;
}
.dashMainContent {
  margin: 50px 10px 20px 120px;
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