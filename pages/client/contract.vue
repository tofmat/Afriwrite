
<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <h2 class="mainColor mb-5">Contract Details</h2>
        <div class="jobDetails">
          <h2 class="blackColor mb-3">Job Title</h2>
          <div class="row">
            <v-col cols="12" sm="12" lg="9">
              <hr class="mb-3">
              <div class="jobDetailsTexts">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?</p>
                <div class="flex alignCenter scrollable-x">
                  <v-btn class="tagBtn">Writing</v-btn>
                  <v-btn class="tagBtn">Content writing</v-btn>
                  <v-btn class="tagBtn">Proof reading</v-btn>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
              <div>
                <div class="clientInfo">
                  <h4><span><i class="far fa-user mr-2 mb-5"></i> ABOUT THE CLIENT </span></h4>
                  <p class="mb-5 darkGreyColor"><span> Payment Verified <i class="fas fa-certificate yellowColor"></i></span></p>
                  <h4>USA</h4>
                  <p class="mb-5">10:00am</p>
                  <h4>20 Jobs posted</h4>
                  <p class="mb-5">100% hire rate</p>
                  <p class="mb-5">Member since August, 2021</p>
                </div>
              </div>
            </v-col>
          </div>
        </div>
        <div class="mt-5">
          <div class="row">
            <v-col cols="12" sm="12" lg="9">
              <h2 class="darkGreyColor mb-3">Contract Terms</h2>
              <hr class="mb-3">
            </v-col>

            <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
              <div>
                <div class="sideGreenInfo">
                  <p>Project Budget</p>
                  <h2>$5-10 USD</h2>
                </div>
              </div>
            </v-col>
          </div>
          <div>
            <h3 class="">How do you want to be paid?</h3>
            <p>By Project</p>
            <h3>Bid</h3>
            <small>Total amount the client will see on your proposal</small>
            <p>$10</p>
            <h3>You will be paid</h3>
            <small>Estimated amount you will be paid after completing this project</small>
            <p>$8</p>
          </div>
        </div>
        <div class="mt-5">
          <div class="">
            <h3 class="darkGreyColor">MILESTONE</h3>
            <div class="flex alignCenter justifyBetween my-1">
              <div>
                <div class="flex alignCenter">
                  <div>
                    <h4 class="darkGreyColor">Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
              <div>
                <h4>Expected Time</h4>
                <p>29-07-2021</p>
              </div>
              <div>
                <h4>Milestone Amount</h4>
                <p>$500</p>
              </div>
              <div class="paymentStatusMilestone">
                <p class="mainColor">Completed</p>
                <h4 class="mainColor">Unpaid</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 flex justifyCenter mobileColumn">
          <v-btn class="findBtn mx-3 my-1" to="#">Submit work for payment</v-btn>
          <v-btn class="greyBtn mx-3 my-1" to="#">Cancel Contract</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
layout: 'client'
}
</script>

<style>
.clientInfo {
  border-radius: 20px;
  background-color: #F8F8F8;
  padding: 20px;
  color: #4D4D4D;
}

.clientInfo h4 {
  color: #4D4D4D;

}
.jobI {
  /* padding: 1em; */
  background-color: white;
  /* border-radius: 10px; */
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
.paymentStatusMilestone{
  background-color: rgba(0, 137, 82, 0.05);
  padding: 10px 20px;
  border-radius: 0 30px 30px 0;
}
.sideGreenInfo {
  background-color: #008952;
  padding: 15px;
  color: #fff !important;
  border-radius: 0 25px 25px 0;
}
.sideGreenInfo p {
  color: white;
  margin: 0;
}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 10px 20px 10px;
  }
  .alignOnMobile {
    align-items: center;
  }
}
</style>