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
                  class="inputDefault"
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
              <input
                v-model="profileDetails.username"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Username"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <input
                v-model="profileDetails.phone_number"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Phone Number"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <div class="mt-3">
                <textarea
                  v-model="profileDetails.about_me"
                  rows="5"
                  class="textArea2"
                  placeholder="Type your bio here"
                ></textarea>
              </div>
            </v-col>
            <v-col cols="6" sm="6">
              <input
                v-model="profileDetails.country"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Country"
              />
            </v-col>
            <v-col cols="6" sm="6" class="inputWithLabel">
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
                  Available to hire
                </option>
                <option
                  value="false"
                  :selected="`${
                    this.profileDetails.availability == 'false' ? true : false
                  }`"
                >
                  Not Available to hire
                </option>
              </select>
            </v-col>
          </div>
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
  layout: "client",
  data() {
    return {
      profileDetails: {
        username:
          `${this.$auth.user.username}` !== "null"
            ? `${this.$auth.user.username}`
            : "",
        // gender: `${this.$auth.user.gender}` !== "null" ? "" : "",
        phone_number:
          `${this.$auth.user.phone_number}` !== "null"
            ? `${this.$auth.user.phone_number}`
            : "",
        country:
          `${this.$auth.user.country}` !== "null"
            ? `${this.$auth.user.country}`
            : "",
        availability:
          `${this.$auth.user.availability}` !== "null"
            ? `${this.$auth.user.availability}`
            : "",
        // date_of_birth:
        //   `${this.$auth.user.date_of_birth}` !== "null"
        //     ? `${this.$auth.user.date_of_birth}`
        //     : "",
        // availability:
        //   `${this.$auth.user.availability}` !== "null"
        //     ? `${this.$auth.user.availability}`
        //     : "",
        profile_picture:
          `${this.$auth.user.profile_picture}` !== "null"
            ? `${this.$auth.user.profile_picture}`
            : "",
        about_me:
          `${this.$auth.user.about_me}` !== "null"
            ? `${this.$auth.user.about_me}`
            : "",
      },
      loading: false,
      profileLoading: false,
      profilePicture: null,
    };
  },
  methods: {
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
        availability: this.profileDetails.availability,
        // profile_picture: this.profileDetails.profile_picture,
        about_me: this.profileDetails.about_me,
      };
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/user/update-profile`,
          editedProfileDetails
        );
        this.loading = false;
        this.$toast.success("Your profile has been updated.");
        window.location.assign("/client/profile");
      } catch (error) {
        this.loading = false;
        this.$toast.error("There was an error updating your profile");
      }
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
.profileAccountImage {
  width: 80px !important;
  height: 80px !important;
  border-radius: 500px !important;
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
  display: flex;
  align-items: center;
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
.profileLoadingSmall {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  left: 40%;
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
.profileImg {
  position: relative;
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