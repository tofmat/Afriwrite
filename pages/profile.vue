<template>
  <div>
      <div>
          <div class="row">
              <v-col cols="12" sm="9" class="">
                  <div class="dashMainContent">
                    <div>
                        <div class="row">
                            <v-col cols="12" sm="3" class="profilePicture">
                                <img src="../assets/images/Profil.png" alt="ProfilePic">
                            </v-col>
                            <v-col cols="12" sm="5">
                                <div class="nameAndLocation">
                                    <h1>Christian Johnson</h1>
                                    <div class="flex alignCenter mb-3 lca"><i class="fas fa-map-marker-alt textMainColor"></i><p class="noMargin textMainColor">Accra, Ghana</p></div>
                                    <p class="textMainColor">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. More</p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <div class="jobStat">
                                    <h2>82%</h2>
                                    <div class="percent"></div>
                                    <p class="mt-2 textMainColor">Job Success</p>
                                    <div class="flex alignCenter mt-3 lca"><i class="fas fa-award colorBlue"></i><p class="noMargin colorBlue">TOP RATED</p></div>
                                </div>
                            </v-col>
                        </div>
                    </div>
                    <div class="mt-10">
                        <div class="row textCenter">
                            <v-col cols="12" sm="3">
                                <h3 class="mb-2">$50.00</h3>
                                <p class="textMainColor">Hourly Rate</p>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <h3 class="mb-2">$50k+</h3>
                                <p class="textMainColor">Total Earned</p>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <h3 class="mb-2">37</h3>
                                <p class="textMainColor">Jobs</p>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <h3 class="mb-2">5,188</h3>
                                <p class="textMainColor">Hours Worked</p>
                            </v-col>
                        </div>
                    </div>
                    <div class="mt-10">
                        <div class="backWhite workHis">
                            <h2 class="mb-4">Work history and feedback</h2>
                            <hr class="fullWidth">
                            <div class="mt-4"> 
                                <div>
                                    <v-row>
                                        <v-col cols="12" sm="8">
                                            <h3 class="mainColor">Storytelling expert with narrative skills and an eye for design</h3>
                                            <div class="flex alignCenter my-3 lca"><i class="fas fa-star mainColor"></i><i class="fas fa-star mainColor"></i><i class="fas fa-star mainColor"></i><i class="fas fa-star mainColor"></i><h3>5.0</h3></div>
                                            <p class="textItalics">As always, great work and working with you</p>
                                        </v-col>
                                        <v-col cols="12" sm="4" class="rightAlign">
                                            <h3>$60</h3>
                                            <h3>Fixed Price</h3>
                                        </v-col>
                                    </v-row>
                                </div>
                                <hr class="fullWidth mt-4"> 
                                <div>
                                    <v-row>
                                        <v-col cols="12" sm="8">
                                            <h3 class="mainColor">Storytelling expert with narrative skills and an eye for design</h3>
                                            <div class="flex alignCenter my-3 lca"><i class="fas fa-star mainColor"></i><i class="fas fa-star mainColor"></i><i class="fas fa-star mainColor"></i><i class="fas fa-star mainColor"></i><h3>5.0</h3></div>
                                            <p class="textItalics">As always, great work and working with you</p>
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
                    <div class="mt-10">
                        <div class="backWhite workHis">
                            <h2 class="mb-4">Skills</h2>
                            <hr class="fullWidth">
                            <div class="mt-4"> 
                                <div class="flex">
                                    <v-btn class="workBtn mr-2">
                                        Blog Post
                                    </v-btn>
                                    <v-btn class="workBtn">
                                        Blog Post
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </v-col>
              <v-col cols="12" sm="3" class="rightSideDash">
                  <div >
                      Helo
                  </div>
              </v-col>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    layout: 'dashboard'

}
</script>

<style>
.textMainColor{
    color: #707070;
}
.jobStat .percent {
    width: 70%;
    height: 10px;
    background-color: #00E68A;
    border-radius: 20px;
    margin-top: 10px;
}
.colorBlue{
    color: blue;
}
.rightSideDash{
    background-color: white;
    padding: 50px 30px;
}
.dashMainContent{
    margin: 50px 10px 20px 120px;
}
.profilePicture{
    width: 200px;
}
.nameAndLocation{
    margin: 0 !important;
}
.lca i {
    margin-right: 10px;
}
.backWhite{
    background-color: white;
}
.workHis{
    padding: 30px;
    border-radius: 20px;
}
.workBtn{
    padding: 20px !important;
    background-color: transparent !important;
    border: #00E68A solid 1px;
    color: #00E68A !important;
    box-shadow: none !important;
}

</style>