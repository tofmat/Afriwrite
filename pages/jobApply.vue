<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <div class="jobDetails">
          <div class="row">
            <v-col cols="12" sm="12">
              <div class="jobDetailsTexts">
                <h3 class="mb-5 mainColor">YouTube Script for a fashion YouTube Channel</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
              </div>
              <div class="row alignCenter jobTips mt-5">
                <v-col cols="12" sm="4" class="flex alignCenter">
                  <i class="far fa-clock"></i>
                  <p>Less than 30 weeks</p>
                </v-col>
                <v-col cols="12" sm="4" class="flex alignCenter">
                  <i class="far fa-calendar-minus"></i>
                  <p>Less than a month</p>
                </v-col>
                <v-col cols="12" sm="4" class="flex alignCenter">
                  <i class="fas fa-dollar-sign"></i>
                  <p>$15 - $30 /hr</p>
                </v-col>
              </div>
            </v-col>
          </div>
        </div>
        <div class="mt-10">
          <textarea name="apply" id="apply" cols="30" rows="10" class="textArea"></textarea>
          <div class="flex alignCenter attachFile mt-5">
            <i class="fas fa-paperclip"></i>
            <p>Attach Files</p>
          </div>
          <div class="mt-10">
            <v-btn class="findBtn fullWidth Drag and Drop File/Select" to="#">Drag and Drop File/Select</v-btn>
          </div>
          <div class="mt-10 centerflex ">
            <v-btn class="findBtn" to="#">Apply Now</v-btn>
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
}
.jobClientPrice{
  margin-right: 20px;
}
.textArea{
  border: solid 1px #CACACA;
  width: 100%;
  padding: 10px;
}
.attachFile p {
  margin: 0;
}
.attachFile i {
  margin-right: 10px;
  color: #00E68A;
}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 15px 20px 15px;
  }
}
</style>