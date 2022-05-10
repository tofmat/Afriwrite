<template>
  <div>
    <div>
      <div class="dashDefaultContent">
        <h2 class="mainColor">Edit Profile</h2>
        <div class="mt-10">
          <div class="row">
            <div class="profileImageEdit">
              <div class="profileImg">
                <div
                  class="profileImage"
                  v-if="this.$auth.user.profile_picture"
                >
                  <img
                    :src="`${this.$auth.user.profile_picture}`"
                    alt="ProfilePic"
                  />
                </div>
                <div class="profileImage" v-else>
                  <img
                    src="../.././../../assets/images/emptyUser.png"
                    alt="ProfilePic"
                  />
                </div>
                <div class="profileLoadingSmall" v-if="this.profileLoading">
                  <i class="fas fa-spinner"></i>
                </div>
              </div>
              <label class="custom-file-upload noFlex">
                <input
                  className="inputDefault"
                  type="file"
                  accept="image/png, image/jpeg"
                  v-on:change="onChange"
                />
                <div class="profileImg">
                  <div class="editDp">
                    <img src="../.././../../assets/images/editDp.svg" alt="" />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="mt-10 editProfileForm">
          <div class="row">
            <v-col cols="6" sm="6">
              <span>Username </span>
              <input
                v-model="profileDetails.username"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Username"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <span>Phone Number </span>
              <input
                v-model="profileDetails.phone_number"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Phone Number"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <div class="mt-3">
                <span>Your Bio </span>
                <textarea
                  v-model="profileDetails.about_me"
                  rows="5"
                  class="textArea2"
                  placeholder="Type your bio here"
                ></textarea>
              </div>
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>Gender </span>
              <select
                v-model="profileDetails.gender"
                class="normalInput2 fullWidth"
              >
                <option
                  value="male"
                  :selected="`${
                    this.profileDetails.gender == 'male' ? true : false
                  }`"
                >
                  Male
                </option>
                <option
                  value="female"
                  :selected="`${
                    this.profileDetails.gender == 'female' ? true : false
                  }`"
                >
                  Female
                </option>
              </select>
            </v-col>
            <v-col cols="6" sm="6">
              <span>Writing Niche </span>
              <input
                v-model="profileDetails.writing_niches"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Preffered Writing Niche"
              />
            </v-col>
            <v-col cols="4" sm="4">
              <span>DOB</span>
              <input
                v-model="profileDetails.date_of_birth"
                type="date"
                class="normalInput2 fullWidth"
                placeholder="Date of Birth"
              />
            </v-col>
            <v-col cols="4" sm="4" class="inputWithLabel">
              <span> Availability </span>
              <select
                v-model="profileDetails.availability"
                class="normalInput2 fullWidth"
              >
                <option
                  value="true"
                  :selected="`${
                    this.profileDetails.availability == 'true' ? true : false
                  }`"
                >
                  Available to work
                </option>
                <option
                  value="false"
                  :selected="`${
                    this.profileDetails.availability == 'false' ? true : false
                  }`"
                >
                  Not Available to work
                </option>
              </select>
            </v-col>
            <v-col cols="4" sm="4">
              <span>Country</span>
              <input
                v-model="profileDetails.country"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Country"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <span>List of languages, seperated by comma</span>
              <input
                v-model="profileDetails.languages"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Languages"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <span>Any link you would like us to see? Portfolio?</span>
              <input
                v-model="profileDetails.additional_links"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Additional Links"
              />
            </v-col>
          </div>
        </div>
        <div
          class="mt-10 editProfileForm articleSection"
          v-for="singleArticle in profileDetails.articles"
          :key="singleArticle.id"
        >
          <div class="row">
            <v-col cols="12" sm="12">
              <div class="">
                <div class="flex justifyBetween">
                  <span class="">Article Title</span>

                  <i
                    class="far fa-trash-alt mr-2 mainColor"
                    @click="removeItem(singleArticle)"
                    v-if="profileDetails.articles.length > 1"
                  ></i>
                </div>

                <input
                  v-model="singleArticle.primary_keywords"
                  type="link"
                  class="normalInput2 fullWidth mt-3"
                  placeholder="COVID-19 as a Threat"
                />
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div class="flex justifyBetween">
                <h4>Article Additional Info</h4>
                <v-icon
                  large
                  color="green darken-2"
                  v-if="selected"
                  @click="showArticleContent"
                >
                  mdi-chevron-up
                </v-icon>
                <v-icon
                  large
                  color="green darken-2"
                  v-if="!selected"
                  @click="showArticleContent"
                >
                  mdi-chevron-down
                </v-icon>
              </div></v-col
            >
          </div>
          <div v-if="selected" class="row">
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>Article Link</span>
              <input
                v-model="singleArticle.article_link"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="https://goole.com/my-article/2022"
              />
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>Keyword</span>
              <input
                v-model="singleArticle.secondary_keywords"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="COVID, Pandemic, Relief, Lockdown"
              />
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>User Search Intent</span>
              <input
                v-model="singleArticle.search_intent"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="COVID, Pandemic, Relief, Lockdown"
              />
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>Tone</span>
              <input
                v-model="singleArticle.tone"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Informative"
              />
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>Meta Description</span>
              <input
                v-model="singleArticle.meta_description"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Covid as a threat"
              />
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>Meta Tags</span>
              <input
                v-model="singleArticle.meta_tags"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="COVID, Pandemic, Relief, Lockdown"
              />
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>Clients Website</span>
              <input
                v-model="singleArticle.client_website"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="https://clientsite.com"
              />
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>Internal Link & anchor texts</span>
              <input
                v-model="singleArticle.internal_link"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="https://covidreliefsite.com/info"
              />
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>External Link & anchor texts</span>
              <input
                v-model="singleArticle.external_link"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="https://covidreliefsite.com/info"
              />
            </v-col>
          </div>
        </div>
        <div class="my-5">
          <a @click="addItem()"
            ><p class="mainColor">
              <span><i class="fas fa-plus"></i></span> Add new article link
            </p></a
          >
        </div>
        <div class="mt-10 flex justifyCenter">
          <v-btn
            class="myBtn findBtn"
            @click="updateProfile"
            :loading="loading"
          >
            Save Changes
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      profileDetails: {
        username:
          `${this.$auth.user.username}` !== "null"
            ? `${this.$auth.user.username}`
            : "",
        gender:
          `${this.$auth.user.gender}` !== "null"
            ? `${this.$auth.user.gender}`
            : "",
        phone_number:
          `${this.$auth.user.phone_number}` !== "null"
            ? `${this.$auth.user.phone_number}`
            : "",
        country:
          `${this.$auth.user.country}` !== "null"
            ? `${this.$auth.user.country}`
            : "",
        date_of_birth:
          `${this.$auth.user.date_of_birth}` !== "null"
            ? `${this.$auth.user.date_of_birth}`
            : "",
        availability:
          `${this.$auth.user.availability}` !== "null"
            ? `${this.$auth.user.availability}`
            : "",
        profile_picture:
          `${this.$auth.user.profile_picture}` !== "null"
            ? `${this.$auth.user.profile_picture}`
            : "",
        about_me:
          `${this.$auth.user.about_me}` !== "null"
            ? `${this.$auth.user.about_me}`
            : "",
        languages:
          `${this.$auth.user.languages}` !== "null"
            ? `${this.$auth.user.languages}`
            : "",
        writing_niches:
          `${this.$auth.user.writing_niches}` !== "null"
            ? [`${this.$auth.user.writing_niches}`]
            : "",
        additional_links:
          `${this.$auth.user.additional_links}` !== "null"
            ? `${this.$auth.user.additional_links}`
            : " ",
        articles: [
          {
            article_link: "",
            primary_keywords: "",
            secondary_keywords: "",
            search_intent: "",
            tone: "",
            meta_description: "",
            meta_tags: "",
            client_website: "",
            internal_link: "",
            external_link: "",
          },
        ],
      },
      selected: false,
      loading: false,
      profileLoading: false,
      profilePicture: null,
    };
  },
  methods: {
    showArticleContent() {
      this.selected = !this.selected;
    },
    onChange(event) {
      this.profilePicture = event.target.files;
    },
    async updateProfilePicture() {
      let formData = new FormData();
      formData.append("profile_picture", this.profilePicture[0]);
      try {
        this.profileLoading = true;
        const response = await this.$axios.post(
          "/v1/user/update-profile",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        this.$toast.success("Your profile picture has been uploaded");
        this.profileLoading = false;
        this.profilePicture = "";
        window.location.reload();
        return response;
      } catch (error) {
        this.profilePicture = "";
        this.profileLoading = false;
        this.errors = error.response.data.error;
        this.$toast.error("An error occured, please try again");
      }
    },

    async updateProfile() {
      let editedProfileDetails = {
        username: this.profileDetails.username,
        gender: this.profileDetails.gender,
        phone_number: this.profileDetails.phone_number,
        country: this.profileDetails.country,
        date_of_birth: this.profileDetails.date_of_birth,
        availability: this.profileDetails.availability,
        profile_picture: this.profileDetails.profile_picture,
        about_me: this.profileDetails.about_me,
        languages: this.profileDetails.languages,
        writing_niches: [this.profileDetails.writing_niches],
        additional_links: this.profileDetails.additional_links,
        articles: this.profileDetails.articles[0].article_link
          ? this.profileDetails.articles
          : [],
      };
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/user/update-profile`,
          editedProfileDetails
        );
        this.loading = false;
        this.$toast.success("Your profile has been updated.");
        window.location.assign("/dashboard/profile");
      } catch (error) {
        this.loading = false;
        this.$toast.error("There was an error updating your profile");
      }
    },
    removeItem(val) {
      this.profileDetails.articles = this.profileDetails.articles.reduce(
        (p, c) => (c.article_link !== val.article_link && p.push(c), p),
        []
      );
    },
    addItem() {
      this.profileDetails.articles.push({
        article_link: "",
        primary_keywords: "",
        secondary_keywords: "",
        search_intent: "",
        tone: "",
        meta_description: "",
        meta_tags: "",
        client_website: "",
        internal_link: "",
        external_link: "",
      });
    },
  },
  watch: {
    // whenever profilePicture changes, this function will run
    profilePicture() {
      this.updateProfilePicture();
    },
  },
};
</script>

<style>
.custom-file-upload input[type="file"] {
  display: none;
}
.custom-file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.profileLoadingSmall {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  left: 40%;
}
.profileAccountImage {
  width: 80px !important;
  height: 80px !important;
  border-radius: 500px !important;
}
.profileImg {
  position: relative;
}
.editDp {
  bottom: 0px;
  height: 38px;
  left: 100%;
  margin-left: 40px;
  position: absolute;
  width: 38px;
  z-index: 2;
  cursor: pointer;
}
.inputWithLabel {
  /* display: flex;
  align-items: center; */
}
.profileImageEdit {
  position: relative;
}
.profileImg {
  position: relative;
}
.inputWithLabel span {
  margin-right: 10px;
}
.editProfileForm span {
  color: #787878;
}
.editProfileForm select {
  -webkit-appearance: auto !important;
}
.profileImage {
  padding: 5px 7px;

  border: 1px solid rgba(0, 137, 82, 0.2);
  border-radius: 50%;
}
.articleSection {
  background: rgba(236, 236, 236, 0.3);
  padding: 20px;
}
.textArea2 {
  background: #ececec;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
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
.profilePicture img {
  width: 200px;
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