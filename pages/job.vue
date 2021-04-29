<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <div class="jobDetails">
          <div class="row">
            <v-col cols="12" sm="9">
              <div class="jobDetailsTexts">
                <h3 class="mb-5 mainColor">YouTube Script for a fashion YouTube Channel</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
              </div>
              <div class="row alignCenter jobTips mt-5">
                <v-col cols="12" sm="4" class="flex alignCenter">
                  <i class="fab fa-facebook-f"></i>
                  <p>Less than 30 weeks</p>
                </v-col>
                <v-col cols="12" sm="4" class="flex alignCenter">
                  <i class="fab fa-facebook-f"></i>
                  <p>Less than a month</p>
                </v-col>
                <v-col cols="12" sm="4" class="flex alignCenter">
                  <i class="fab fa-facebook-f"></i>
                  <p>$15 - $30 /hr</p>
                </v-col>
                <v-col cols="12" sm="4" class="flex">
                  <div>
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <div>
                    <p>Attachments</p>
                    <p class="mainColor">sample000001.pdf</p>
                    <p class="mainColor">sample0001.pdf</p>
                  </div>
                </v-col>
              </div>
            </v-col>
            <v-col cols="12" sm="3" class="flex">
              <div class="jobFav">
                <i class="fab fa-facebook-f"></i>
              </div>
              <v-btn class="findBtn">Apply Now</v-btn>
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
}
.jobFav i{
  margin-right: 20px;
  color: #00E68A;
}
.jobClientPrice{
  margin-right: 20px;
}
</style>