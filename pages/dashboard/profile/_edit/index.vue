<template>
  <div>
    <div>
      <div class="dashDefaultContent">
        <h2 class="mainColor">Edit Profile</h2>
        <div class="mt-10">
          <div class="row">
            <div class="profileImage">
              <img
                src="../.././../../assets/images/emptyUser.png"
                alt="ProfilePic"
              />
            </div>
          </div>
        </div>
        <div class="mt-10">
          <div class="row textCenter">
            <v-col cols="6" sm="6">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Full Name"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Username"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Email Address"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Phone Number"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <div class="mt-3">
                <textarea
                  rows="5"
                  class="textArea2"
                  placeholder="Type your bio here"
                ></textarea>
              </div>
            </v-col>
            <v-col cols="6" sm="6">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Gender"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Writing Niche"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Date of Birth"
              />
            </v-col>
            <v-col cols="6" sm="6">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Availability"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Languages"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <input
                type="text"
                class="normalInput2 fullWidth"
                placeholder="Additional Links"
              />
            </v-col>
          </div>
        </div>
        <div class="mt-10 flex justifyCenter">
          <v-btn class="myBtn findBtn" to="#"> Save Changes </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
};
</script>

<style>
.profileImage {
  padding: 30px;

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