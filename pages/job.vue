<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <div class="jobDetails">
          <h2 class="blackColor mb-3">Job Title</h2>
          <div class="row">
            <v-col cols="12" sm="12" lg="9">
              <hr class="mb-3">
              <div class="jobDetailsTexts">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
                <div class="flex alignCenter">
                  <v-btn class="tagBtn">Writing</v-btn>
                  <v-btn class="tagBtn">Content writing</v-btn>
                  <v-btn class="tagBtn">Proof reading</v-btn>
                </div>
              </div>
              <div class="row alignCenter jobTips mt-10">
                <v-col cols="6" sm="4" >
                  <div class="flex alignCenter justifyCenter">
                    <p class="mr-2">Budget</p>
                    <h2>$5-10</h2>
                  </div>
                </v-col>
                <v-col cols="6" sm="4" class="flex alignCenter justifyCenter">
                  <div class="flex alignCenter">
                    <p class="mr-2">Estimated time</p>
                    <h2>1-2 Months</h2>
                  </div>
                </v-col>
                <v-col cols="6" sm="4" class="flex alignCenter justifyCenter">
                  <i class="fas fa-dollar-sign"></i>
                  <div>
                    <h2>Remote</h2>
                  </div>
                  
                </v-col>
              </div>
              <div class="mt-10 attachments">
                <h2 class="mb-5">Attachments</h2>
                <row class="row">
                  <v-col cols="6" sm="6">
                    <div class="flex alignCenter">
                      <i class="fas fa-link"></i>
                      <p class="mainColor">sample000001.pdf</p>
                    </div>
                    <div class="flex alignCenter">
                      <i class="fas fa-link"></i>
                      <p class="mainColor">sample000001.pdf</p>
                    </div>
                    <div class="flex alignCenter">
                      <i class="fas fa-link"></i>
                      <p class="mainColor">sample000001.pdf</p>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="6">
                    <div class="flex alignCenter">
                      <i class="fas fa-link"></i>
                      <p class="mainColor">sample000001.pdf</p>
                    </div>
                    <div class="flex alignCenter">
                      <i class="fas fa-link"></i>
                      <p class="mainColor">sample000001.pdf</p>
                    </div>
                    <div class="flex alignCenter">
                      <i class="fas fa-link"></i>
                      <p class="mainColor">sample000001.pdf</p>
                    </div>
                  </v-col>
                </row>
              </div>
              <div class="mt-5 activities">
                <h2 class="mb-5">Activity on this Job</h2>
                <div>
                  <p>Proposals: <span class="boldText">10-30</span></p>
                  <p>Last viewed by Client: <span class="boldText">4 Hours ago</span></p>
                  <p>Interviewing: <span class="boldText">5</span></p>
                  <p>Unanswered proposals: <span class="boldText">5-10</span></p>
                </div>

              </div>
            </v-col>

            <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
              <v-btn class="findBtn mb-4 fullWidth" to="submit">Submit a Proposal</v-btn>
              <v-btn class="greyBtn fullWidth"> <i class="fas fa-bookmark mr-2 mt-1"></i> Save Job</v-btn>
              <div class="flex alignCenter fullWidth mt-1">
                <div class="darkGreyColor savedDiv"> <i class="fas fa-bookmark mr-2 mt-1"></i> Saved</div>
                <i class="far fa-trash-alt ml-2 mainColor iconBack"></i>
              </div>
              <div>
                <div class="clientInfo mt-10">
                  <h4><span><i class="far fa-file-alt mr-2 mb-5"></i> ABOUT THE CLIENT </span></h4>
                  <p class="mb-5 darkGreyColor"><span> Payment Verified <i class="fas fa-certificate yellowColor"></i></span></p>
                  <h4>USA</h4>
                  <p class="mb-5">10:00am</p>
                  <h4>20 Jobs posted</h4>
                  <p class="mb-5">100% hire rate</p>
                  <p class="mb-5">Member since August, 2021</p>
                  <div>
                    <h4><span><i class="far fa-file-alt mr-2 mb-2"></i> Job Link </span></h4>
                    <v-btn class="workBtn fullWidth my-3" to="#">
                        https://www.upwork
                    </v-btn>
                    <p class="mainColor">Copy link</p>
                  </div>

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
.clientInfo {
  background-color: #F8F8F8;
  padding: 20px;
  color: #4D4D4D;
}

.clientInfo h4 {
  color: #4D4D4D;

}
.jobI {
  padding: 1em;
  background-color: white;
  border-radius: 10px;
}
.dashDefaultContent{
    margin: 50px 50px 20px 120px;
}
.jobTips {
  padding: 20px 0;
  background-color:#008952;
  border-radius: 0 0 20px 20px;
}
.jobTips p{
  color: #fff;
  margin: 0;
}
.jobTips i{
  margin-right: 10px;
  color: #fff;
}
.jobTips h2 {
  color: white;
  font-weight: 700;
}
.jobFav i{
  margin-right: 20px;
  /* color: #00E68A; */
}
.jobClientPrice{
  margin-right: 20px;
}
.attachments p {
  margin: 0;
}
.attachments i {
  margin-right: 10px;
  color: #AAAAAA;
}
.savedDiv{
  background-color: #E5E5E5;
  padding: 8px;
  width: 100%;
  text-align: center;
}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 7x 20px 7px;
  }
  .alignOnMobile {
    align-items: center;
  }
}
</style>