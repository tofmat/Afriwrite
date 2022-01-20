<template>
  <div>
    <div>
      <div class="dashDefaultContent">
        <h2 class="mainColor">Edit Profile</h2>
        <div class="mt-10">
          <div class="row">
            <div class="profileImageEdit">
              <div class="profileImage">
                <img
                  src="../.././../../assets/images/emptyUser.png"
                  alt="ProfilePic"
                />
              </div>
              <label class="custom-file-upload noFlex">
                <input
                  className="inputDefault"
                  type="file"
                  accept="image/png, image/jpeg"
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
            <v-col cols="6" sm="6" class="inputWithLabel">
              <span>Gender</span>
              <select
                v-model="profileDetails.gender"
                class="normalInput2 fullWidth"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </v-col>
            <v-col cols="6" sm="6">
              <input
                v-model="profileDetails.writing_niches"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Preffered Writing Niche"
              />
            </v-col>
            <v-col cols="4" sm="4">
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
                <option value="1">Available to work</option>
                <option value="0">Not Availanle</option>
              </select>
            </v-col>
            <v-col cols="4" sm="4">
              <input
                v-model="profileDetails.country"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Country"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <input
                v-model="profileDetails.languages"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Languages"
              />
              <span>List of languages, seperated by comma</span>
            </v-col>
            <v-col cols="12" sm="12">
              <input
                v-model="profileDetails.additional_links"
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Additional Links"
              />
              <span>Any link you would like us to see? Portfolio?</span>
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
  layout: "dashboard",
  data() {
    return {
      profileDetails: {
        username:
          `${this.$auth.user.username}` !== "null"
            ? `${this.$auth.user.username}`
            : "",
        gender: `${this.$auth.user.gender}` !== "null" ? "" : "",
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
            ? `${this.$auth.user.writing_niches}`
            : "",
        additional_links:
          `${this.$auth.user.additional_links}` !== "null"
            ? `${this.$auth.user.additional_links}`
            : " ",
      },
      loading: false,
    };
  },
  methods: {
    async updateProfile() {
      try {
        this.loading = true;
        const response = await this.$axios.post(
          `/v1/user/update-profile`,
          this.profileDetails
        );
        this.loading = false;
        this.$toast.success("Your profile has been updated.");
        window.location.assign("/dashboard/profile");
      } catch (error) {
        this.loading = false;
        this.$toast.error("There was an error updating your profile");
      }
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
  padding: 30px 35px;

  border: 1px solid rgba(0, 137, 82, 0.2);
  border-radius: 50%;
}
.textArea2 {
  background: #ececec;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
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