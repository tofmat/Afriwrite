<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <div class="jobDetails">
          <div class="row">
            <v-col cols="12" sm="12" lg="9">
              <div class="jobDetailsTexts">
                <h3 class="mb-5 mainColor">YouTube Script for a fashion YouTube Channel</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
              </div>
              <div class="row alignCenter jobTips mt-5">
                <v-col cols="6" sm="4" >
                  <div class="flex alignCenter">
                    <i class="far fa-clock"></i>
                    <div>
                    <p>Less than 30 weeks</p>
                    <p>Hours</p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="6" sm="4" class="flex alignCenter">
                  <i class="far fa-calendar-minus"></i>
                  <div>
                  <p>Less than a month</p>
                  <p>Duration</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="4" class="flex alignCenter">
                  <i class="fas fa-dollar-sign"></i>
                  <div>
                    <p>$15 - $30 /hr</p>
                    <p>Budget</p>
                  </div>
                  
                </v-col>
                <v-col cols="6" sm="4" class="flex alignCenter">
                  <div>
                    <i class="far fa-file-alt"></i>
                  </div>
                  <div>
                    <p>Attachments</p>
                    <p class="mainColor">sample000001.pdf</p>
                    <p class="mainColor">sample0001.pdf</p>
                  </div>
                </v-col>
              </div>
            </v-col>
            <v-col cols="12" sm="12" lg="3" class="flex alignOnMobile">
              <div class="jobFav">
                <i class="fas fa-heart fa-2x ashColor"></i>
              </div>
              <v-btn class="findBtn" to="jobapply">Apply Now</v-btn>
            </v-col>
          </div>
        </div>
        <div class="clientHistory mt-10">
          <h2 class="mainColor">Client's work history</h2>
          <div class="row mt-5">
            <v-col cols="12" sm="8">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
            </v-col>
            <v-col cols="12" sm="4">
              <div class="flex">
                <div class="jobClientPrice">
                  <p>$15 - $30 /hr</p>
                  <p>Budget</p>
                </div>
                <div>
                  <p class="mainColor">Active</p>
                </div>
              </div>
            </v-col>
          </div>
          <hr class="mt-4 fullWidth">
          <div class="row mt-5">
            <v-col cols="12" sm="8">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
            </v-col>
            <v-col cols="12" sm="4">
              <div class="flex">
                <div class="jobClientPrice">
                  <p>$15 - $30 /hr</p>
                  <p>Budget</p>
                </div>
                <div>
                  <p class="mainColor">Active</p>
                </div>
              </div>
            </v-col>
          </div>
        </div>
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
.jobI {
  padding: 2em;
  background-color: white;
  border-radius: 10px;
}
.dashDefaultContent{
    margin: 50px 50px 20px 120px;
}
.jobTips p{
  margin: 0;
}
.jobTips i{
  margin-right: 10px;
  color: #00E68A;
}
.jobFav i{
  margin-right: 20px;
  /* color: #00E68A; */
}
.jobClientPrice{
  margin-right: 20px;
}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 15px 20px 15px;
  }
  .alignOnMobile {
    align-items: center;
  }
}
</style>