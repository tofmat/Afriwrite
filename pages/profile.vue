<template>
  <div>
    <div>
      <div class="row noMargin">
        <v-col cols="12" sm="12" lg="9" class="">
          <div class="dashMainContent">
            <div>
              <div class="row">
                <v-col cols="12" sm="4" lg="3" class="profilePicture">
                  <img src="../assets/images/Profil.png" alt="ProfilePic" />
                </v-col>
                <v-col cols="12" sm="8" lg="5">
                  <div class="nameAndLocation">
                    <h1 class="darkGreyColor">Christian Johnson</h1>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-map-marker-alt"></i>
                      <p class="noMargin">Accra, Ghana</p>
                    </div>
                    <p class="textMainColor">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam. More
                    </p>
                  </div>
                </v-col>
                <v-col cols="12" sm="4" lg="4">
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
                <v-col cols="6" sm="3">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">$50.00</h3>
                    <p class="darkGreyColor">Hourly Rate</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="3" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">$50k+</h3>
                    <p class="darkGreyColor">Total Earned</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="3" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">37</h3>
                    <p class="darkGreyColor">Jobs</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="3" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">5,188</h3>
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
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="3">
          <div class="sideB rightSideDash">
            <div>
              <v-btn class="myBtn findBtn fullWidth" to="#">
                Edit Profile
              </v-btn>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <p class="darkGreyColor noMargin mb-2">
                <span
                  ><img
                    src="../assets/images/24hrs.svg"
                    alt="availableicon"
                    class="mr-2"
                  />AVAILABILITY</span
                >
              </p>
              <h3 class="mainColor">Currently Available</h3>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <p class="darkGreyColor noMargin mb-2">
                <span
                  ><img
                    src="../assets/images/link.svg"
                    alt="availableicon"
                    class="mr-2"
                  />PROFILE LINK</span
                >
              </p>
              <p class="mainColor noMargin">https://www.johnson.com</p>
            </div>
            <hr class="fullWidth my-5" />
            <div class="profileInfoHolder">
              <p class="darkGreyColor noMargin mb-2">
                <span
                  ><img
                    src="../assets/images/translate.svg"
                    alt="availableicon"
                    class="mr-2"
                  />LANGUAGES</span
                >
              </p>
              <p class="mainColor noMargin">English - Native</p>
              <p class="mainColor noMargin">Spanish - Fluent</p>
            </div>
          </div>
        </v-col>
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