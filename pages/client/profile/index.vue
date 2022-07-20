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
                    <p>{{ this.$auth.user.link }}</p>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-map-marker-alt"></i>
                      <p class="noMargin">{{ this.$auth.user.country }}</p>
                    </div>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-envelope"></i>
                      <p class="noMargin">{{ this.$auth.user.email }}</p>
                    </div>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-phone"></i>
                      <p class="noMargin">{{ this.$auth.user.phone_number }}</p>
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
              <div class="row textCenter">
                <v-col cols="6" sm="6">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Completed contracts</p>
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
                    <p class="darkGreyColor">Amount payed</p>
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="3">
          <div class="sideB rightSideDash">
            <div v-if="this.$auth.user.client_id_verification_status != 'completed'"> 
              <v-btn
                class="myBtn findBtn fullWidth"
                @click="
                  () => {
                    this.idDialog = true;
                  }
                "
              >
                Add ID for Verification
              </v-btn>
            </div>
            <div v-if="this.$auth.user.client_buy_now_pay_later_status === 'pending'"> 
              <v-btn
                class="myBtn findBtn fullWidth"
                @click="
                  () => {
                    this.BNPLDialog = true;
                  }
                "
              >
                Apply For BNPL Feature
              </v-btn>
            </div>
            <div class="mt-3">
              <v-btn class="myBtn findBtn fullWidth" to="/client/profile/edit">
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
            <!-- <div class="profileInfoHolder">
              <div>
                <h4 class="darkGreyColor noMargin mb-2">
                  <span
                    ><i class="far fa-file-alt mr-2 mb-2"></i> Profile Link
                  </span>
                </h4>
                <div class="workDiv fullWidth my-3 scrollable-x" to="#">
                  <p class="mainColor noMargin">
                    https://www.afriwrite.com/profile/{{
                      this.$auth.user.link
                    }}
                  </p>
                </div>
                <p class="mainColor arrowCursor" @click="copyJobLink()">
                  Copy link
                </p>
              </div>
            </div> -->
          </div>
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
              <v-btn class="greyBtn mx-3 my-1" to="/client/profile/edit"
                >Edit Profile</v-btn
              >
            </div>
          </v-card>
        </v-dialog>
      </v-col>
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
                  Please upload your ID to get full access to this platform features
                </h3>
                <p class="textCenter mt-2">
                  <v-file-input
                    chips
                    counter
                    small-chips
                    truncate-length="15"
                    v-on:change="onFileChange"
                  ></v-file-input>
                </p>
              </v-card-text>
            </div>
            <div class="flex justifyCenter mobileColumn">
              <v-btn text 
                @click="() => {
                  this.idDialog = false;
                }"
              >
                Cancel
              </v-btn>

              <v-btn class="greyBtn mx-3 my-1" 
                :disabled="!IDUpload"
                @click="submitIdVerification"
                :loading="loading"
              >
                Submit
              </v-btn>
            </div>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="auto">
        <v-dialog
          v-model="BNPLDialog"
          persistent
          transition="dialog-top-transition"
          max-width="600"
        >
          <v-card class="py-5">
            <div class="centerflex columnFlex">
              <v-card-text>
                <h3 class="darkGreyColor textCenter mb-4">
                  Apply for Buy Now and Pay Later (BNPL) feature
                </h3>
                <div class="row">
                  <v-col cols="12" sm="12">
                    <span>Why do you want to use this feature?:</span>
                    <v-textarea
                      auto-grow
                      outlined
                      rows="3"
                      row-height="50"
                      class="mt-3"
                      placeholder="Express yourself accurately"
                      v-model.trim="BNPLRequest.reason"
                    ></v-textarea>

                    <span>Please include at least 2 social media handles:</span>
                    <v-text-field
                      label="Facebook link"
                      hide-details="auto"
                      :rules="facebookRule"
                      v-model.trim="BNPLRequest.facebook_link"
                    ></v-text-field>

                    <v-text-field
                      label="Linkedin link"
                      hide-details="auto"
                      :rules="linkedinRule"
                      v-model.trim="BNPLRequest.linkedin_link"
                    ></v-text-field>

                    <v-text-field
                      label="Twitter link"
                      hide-details="auto"
                      :rules="twitterRule"
                      v-model.trim="BNPLRequest.twitter_link"
                    ></v-text-field>

                    <v-text-field
                      label="Instagram link"
                      hide-details="auto"
                      :rules="instagramRule"
                      v-model.trim="BNPLRequest.instagram_link"
                    ></v-text-field>
                  </v-col>
                </div>
              </v-card-text>
            </div>
            <div class="flex justifyCenter mobileColumn">
              <v-btn text 
                @click="() => {
                  this.BNPLDialog = false;
                }"
              >
                Cancel
              </v-btn>

              <v-btn class="greyBtn mx-3 my-1" 
                :disabled="BNPLInfoRequired"
                @click="requestForBNPL"
                :loading="loading"
              >
                Submit
              </v-btn>
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
  layout: "client",
  data() {
    return {
      idDialog: false,
      BNPLDialog: false,
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
      IDUpload: '',
      BNPLRequest: {
        reason: '',
        facebook_link: '',
        instagram_link: '',
        twitter_link: '',
        linkedin_link: ''
      },
      facebookRule: [
        value => {
          const pattern = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/
          if(value){
            return pattern.test(value) || 'Invalid facebook link.'
          }
          return true
        },
      ],
      twitterRule: [
        value => {
          const pattern = /(?:http:\/\/)?(?:www\.)?twitter\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/
          if(value){
            return pattern.test(value) || 'Invalid twitter link.'
          }
          return true
        },
      ],
      instagramRule: [
        value => {
          const pattern = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/
          if(value){
            return pattern.test(value) || 'Invalid instagram link.'
          }
          return true
        },
      ],
      linkedinRule: [
        value => {
          const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
          if(value){
            return pattern.test(value) || 'Invalid linkedin link.'
          }
          return true
        },
      ],
    };
  },
  computed:{
    BNPLInfoRequired(){
      if(!this.BNPLRequest.reason.length || this.filledValuesCount < 2) return true
    },
    filledValuesCount() {
      return [this.BNPLRequest.facebook_link, this.BNPLRequest.instagram_link, this.BNPLRequest.twitter_link, this.BNPLRequest.linkedin_link]
        // ensure all values are Strings and remove whitespace around
        .map((value) => String(value || '').trim())

        // an empty String will be considered false
        // so only "filled" values will pass the filter
        .filter(Boolean)

        // return the number of "filled" values
        .length;
    },
  },
  methods: {
    onFileChange(event){
      this.IDUpload= event;
    },
    copyJobLink() {
      navigator.clipboard.writeText(
        `https://www.afriwrite.com/profile/${this.$auth.user.link}`
      );
      this.$toast.success("Link copied");
    },
    async submitIdVerification(){
      let formData = new FormData();
      formData.append("file", this.IDUpload);

      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/user/client-submit-id-verification`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.$toast.success(
          "You have added your ID successfully!"
        );
        this.loading = false;
        this.idDialog = false;
        return response;
      } catch (error) {
        this.loading = false;
        this.$toast.error(error.response.data.error);
      }
    },
    async requestForBNPL(){
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/user/client-request-for-bnpl`,
          this.BNPLRequest
        );
        this.$toast.success(
          "Your request has been submitted successfully!"
        );
        this.loading = false;
        this.BNPLDialog = false;
        return response;
      } catch (error) {
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