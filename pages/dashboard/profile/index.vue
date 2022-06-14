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
                      :src="user.profile_picture"
                      alt="ProfilePic"
                      v-if="user.profile_picture"
                    />
                    <img
                      src=".././../../assets/images/emptyUser.png"
                      alt="ProfilePic"
                      v-else
                    />
                  </div>
                </v-col>
                <v-col cols="12" sm="8" lg="5">
                  <div class="nameAndLocation">
                    <h1 class="darkGreyColor">
                      {{ user.first_name }}
                      {{ user.last_name }}
                    </h1>
                    <p>{{ user.username }}</p>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-map-marker-alt"></i>
                      <p class="noMargin">{{ user.country }}</p>
                    </div>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-envelope"></i>
                      <p class="noMargin">{{ user.email }}</p>
                    </div>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-phone"></i>
                      <p class="noMargin">{{ user.phone_number }}</p>
                    </div>
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
              <div class="row">
                <v-col cols="12" sm="12">
                  <div>
                    <p class="textMainColor mt-3">
                      Bio: {{ user.about_me }}
                    </p>
                  </div>
                </v-col>
              </div>
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
                    <h3 class="mb-2 mainColor">{{ user.jobs.length }}</h3>
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
            <div class="mt-10">
              <div class="backWhite workHis">
                <h2 class="mb-4 darkGreyColor">Work history and feedback</h2>
                <hr class="fullWidth" />
                <div class="mt-4">
                  <div v-for="work in user.jobs" :key="work.id">
                    <v-row>
                      <v-col cols="12" sm="8">
                        <h3 class="mainColor">
                          {{ work.job_title }}
                        </h3>
                        <div class="flex alignCenter my-3 lca">
                          <star-rating v-model="work.feedback_rating" :increment="0.1" :active-color="'#008952'"
                            :read-only="true" :fixed-points="2"
                          ></star-rating>
                        </div>
                        <p class="textItalics">
                          {{ work.feedback_comment }}
                        </p>
                      </v-col>
                      <v-col cols="12" sm="4" class="rightAlign">
                        <h3>&#8358; {{ work.proposed_amount }}</h3>
                        <h3>Fixed Price</h3>
                      </v-col>
                    </v-row>
                    <hr class="fullWidth mt-4 mb-5" />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-10" v-if="user.portfolio.length > 0">
              <div class="allArticle">
                <h2 class="mb-4 darkGreyColor">Past written Articles</h2>
                <hr class="fullWidth" />
                <div class="mt-4">
                  <div>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="4"
                        v-for="singleArticle in user.portfolio"
                        :key="singleArticle.id"
                      >
                        <div class="articleSingle">
                          <img
                            src=".././../../assets/images/articleImage.jpg"
                            alt=""
                          />
                          <div class="articleDetails">
                            <h3 class="mainColor">
                              {{ singleArticle.primary_keywords }}
                            </h3>
                            <p>
                              {{ singleArticle.meta_description }}
                            </p>
                            <p
                              class="
                                textItalics
                                rightAlign
                                mainColor
                                cursorPointer
                              "
                            >
                              <a
                                :href="singleArticle.article_link"
                                target="_blank"
                                >Read more</a
                              >
                            </p>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="3">
          <div class="sideB rightSideDash">
            <div v-if="!user.recipient_code">
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
            <div class="mt-3" v-if="userVerificationComplete">
              <v-btn 
                class="myBtn findBtn fullWidth"
                @click="requestForTestLink"
                :loading="loading"
              >
                Request For Verification Test Link
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
              <h3 class="mainColor" v-if="user.availability == true">
                Currently Available
              </h3>
              <h3 v-else class="mainColor">Not Available</h3>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <p class="darkGreyColor noMargin mb-2">
                <span
                  ><img
                    src="../../../assets/images/category.svg"
                    alt="availableicon"
                    class="mr-2"
                  />CATEGORY</span
                >
              </p>
              <p class="mainColor noMargin">
                {{ user.category }}
              </p>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <p class="darkGreyColor noMargin mb-2">
                <span
                  ><img
                    src="../../../assets/images/writing2.svg"
                    alt="availableicon"
                    class="mr-2"
                  />WRITING NICHES</span
                >
              </p>
              <p class="mainColor noMargin">
                {{ writing_niches }}
              </p>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <p class="darkGreyColor noMargin mb-2">
                <span
                  ><img
                    src="../../../assets/images/civil.svg"
                    alt="availableicon"
                    class="mr-2"
                  />SKILLS</span
                >
              </p>
              <p class="mainColor noMargin">
                {{ skills }}
              </p>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <div>
                <h4 class="darkGreyColor noMargin mb-2">
                  <span
                    ><i class="far fa-file-alt mr-2 mb-2"></i> PROFILE LINK
                  </span>
                </h4>
                <div class="workDiv fullWidth my-3 scrollable-x" to="#">
                  <p class="mainColor noMargin">
                    {{ profileLink }}
                  </p>
                </div>
                <p class="mainColor arrowCursor" @click="copyLink(profileLink)">
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
              <p class="mainColor noMargin">
                {{ user.languages }}
              </p>
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
                                :key="bank.id"
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

      <v-col cols="auto">
        <v-dialog
          v-model="dialog2"
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
                  Hey we would love if you completed your profile!
                </p>
              </v-card-text>
            </div>
            <div class="flex justifyCenter mobileColumn">
              <v-btn class="greyBtn mx-3 my-1" to="/dashboard/profile/edit"
                >Edit Profile</v-btn
              >
            </div>
          </v-card>
        </v-dialog>
      </v-col>
    </div>
  </div>
</template>

<script>
import banks from "../../../static/banks";

export default {
  layout: "dashboard",
  computed:{
    userVerificationComplete(){
      if(this.user.writing_niches && this.user.skills && this.user.category && this.user.subcategory 
        && (this.user.writer_stage_one_test_status === 'pending')
      ){
          return true
      }
    },
    writing_niches(){
      return  this.user.writing_niches.replaceAll('[', '').replaceAll(']', '').replaceAll('",', '", ').replaceAll('"', '')
    },
    skills(){
      return  this.user.skills.replaceAll('[', '').replaceAll(']', '').replaceAll('",', '", ').replaceAll('"', '')
    },
    profileLink(){
      return `${window.location.host}/profile/${this.user.public_reference_id}`
    }
  },
  data() {
    return {
      dialog: false,
      dialog2:
        this.$auth.user.phone_number &&
        this.$auth.user.username &&
        this.$auth.user.country
          ? false
          : true,
      allBanks: banks.data,
      accountDetails: {
        account_number: "",
        bank_code: "",
        description: "",
      },
      loading: false,
      user: this.$auth.user
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
        location.reload()
        return response;
      } catch (error) {
        this.loading = false;
        this.$toast.error(error.response.data.error);
      }
    },
    async requestForTestLink(){
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/auth/complete-registration`
        );
        this.$toast.success(
          "Test Link has been sent to your email!"
        );
        this.loading = false;
        return 
      } catch (error) {
        console.log(error.response)
        this.loading = false;
        this.$toast.error(error.response.data.error);
      }
    }
  },
  async mounted() {
    const { data } = await this.$auth.fetchUser()
    if(data){
      this.$auth.setUser(data.data)
    }
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
.articleSingle {
  background: #f9f9f9;
  padding: 0 0 10px 0;
}
.articleSingle img {
  width: 100%;
}
.articleDetails {
  padding: 9px;
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
.allArticle {
  padding: 30px;
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