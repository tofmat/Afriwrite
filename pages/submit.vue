<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <h2 class="mainColor mb-5">Submit a Proposal</h2>
        <div class="jobDetails">
          <div class="row">
            <v-col cols="12" sm="12" lg="9">
              <h2 class="blackColor mb-3">Job Title</h2>
              <hr class="mb-3">
              <div class="jobDetailsTexts">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>
                <div class="flex alignCenter">
                  <v-btn class="tagBtn">Writing</v-btn>
                  <v-btn class="tagBtn">Content writing</v-btn>
                  <v-btn class="tagBtn">Proof reading</v-btn>
                </div>
              </div>
            </v-col>

            <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
              <div>
                <div class="clientInfo">
                  <h4><span><i class="far fa-file-alt mr-2 mb-5"></i> ABOUT THE CLIENT </span></h4>
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

          <div class="terms mt-10">
            <div class="row">
              <v-col cols="12" sm="12" lg="9">
                <h2 class="darkGreyColor mb-3">Terms</h2>
                <hr class="mb-3">
              </v-col>

              <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
                <div>
                  <div class="sideGreenInfo">
                    <p>Clients Budget</p>
                    <h2>$5-10 USD</h2>
                  </div>
                </div>
              </v-col>
            </div>
            <div class="mt-5">
              <h3>How do you want to get paid?</h3>
              <v-container class="px-0 radioTerms" fluid >
                <v-radio-group v-model="radioGroup">
                  <v-radio color="green darken-3" value="n1">
                    <template v-slot:label>
                      <div> <p class="darkGreyColor">By Project</p> 
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores </p></div>
                    </template>
                  </v-radio>
                  <v-radio color="green darken-3" value="n2">
                    <template v-slot:label>
                      <div> <p class="darkGreyColor">By Milestone</p> 
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores </p></div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-container>
              <div class="mt-5">
                <h3 class="mb-5">Add as many milestones as you need</h3>
                <addMilestoneForm
                      v-for="singleItem in milestones.items"
                      v-bind:key="singleItem.item_num"
                      v-bind:initialItem="singleItem"
                 >
                </addMilestoneForm>
                <div class="my-5 ">
                  <a @click="addItem()"><p class="mainColor"><span><i class="fas fa-plus"></i></span> Add new Milestone</p></a>
                </div>
              </div>
              <div class="mt-5">
                <div class="width70">
                  <div class="flex projectAmount my-5 justifyBetween">
                    <div class="width40">
                      <h4 class="darkGreyColor">Total Project Amount <span><i class="fas fa-info-circle ml-1"></i> </span></h4>
                    </div>
                    <div>
                      <h4>$</h4>
                    </div>
                    <div>
                      <h4>60.00 USD</h4>
                    </div>
                  </div>
                  <hr />
                  
                  <div class="flex projectAmount my-5 justifyBetween">
                    <div class="width40">
                      <h4 class="darkGreyColor">AfriWrites Service Charge <span><i class="fas fa-info-circle ml-1"></i> </span></h4>
                    </div>
                    <div>
                      <h4>$</h4>
                    </div>
                    <div>
                      <h4>-10.00 USD</h4>
                    </div>
                  </div>
                  <hr>
                  <div class="flex projectAmount my-5 justifyBetween">
                    <div class="width40">
                      <h4 class="darkGreyColor">You will be paid <span><i class="fas fa-info-circle ml-1"></i> </span></h4>
                    </div>
                    <div>
                      <h4>$</h4>
                    </div>
                    <div>
                      <h4>50.00 USD</h4>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div class="duration mt-10">
            <div class="row">
              <v-col cols="12" sm="12" lg="9">
                <h2 class="darkGreyColor mb-3">Duration</h2>
                <hr class="mb-3">
              </v-col>

              <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
                <div>
                  <div class="sideGreenInfo">
                    <p>Client’s Estimated Time</p>
                    <h2>1-2 Months</h2>
                  </div>
                </div>
              </v-col>
            </div>
            <div class="flex alignCenter width70 mt-5 justifyBetween breakToColumn">
              <div>
                <h3>How long will this project take?</h3>
                <p>Total estimated time that this project will take</p>
              </div>
              <input type="text" name="" placeholder="2 Months" class="normalInput">
            </div>
          </div>

          <div class="additionalInfo mt-10">
            <div class="row">
              <v-col cols="12" sm="12" lg="9">
                <h2 class="darkGreyColor mb-3">Additional Information</h2>
                <hr class="mb-3">
              </v-col>

              <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
                <!-- <div>
                  <div class="sideGreenInfo">
                    <p>Client’s Estimated Time</p>
                    <h2>1-2 Months</h2>
                  </div>
                </div> -->
              </v-col>
            </div>
            <div class="mt-3">
              <h4>Cover Letter</h4>
              <p>Why are you the best fit for this gig/role? Introduce and explain yourself. Keep it short and simple</p>
              <textarea name="apply" id="apply" rows="5" class="textArea" placeholder="Input text here"></textarea>
            </div>
            <div class="mt-5">
              <h4>Attachments</h4>
              <p>Include any other attachments to further prove your qualification</p>
              <div class="flex alignCenter attachFile mt-5">
                <i class="fas fa-paperclip"></i>
                <p>Attach Files</p>
              </div>
            </div>
          </div>

          <div class="mt-10 flex justifyCenter">
            <v-btn class="findBtn" to="#">Apply Now</v-btn>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addMilestoneForm from '../components/addMilestoneForm'
export default {
  components: {
    addMilestoneForm
  },
  layout: 'dashboard',
  data () {
    return {
      radioGroup: 'n1',
      milestones: {
        items: [
          {
            description: 'acdwrcar',
            item_num: 0
          }
        ]
      }
    }
  },
  methods: {
    addItem() {
      this.milestones.items.push({
          item_num: this.milestones.items.length,
          description: ''
      })
    },
  }
}
</script>

<style>
.projectAmount {
  
}
.width40 {
  width: 30%;
}
.v-radio {
  background-color: #f5f5f5;
  padding: 15px 8px;
  border-radius: 5px;
}
.v-item--active {
  background-color: rgba(0, 137, 82, 0.13) !important;;
}
.jobI {
  /* padding: 1em; */
  background-color: white;
  /* border-radius: 10px; */
}
.radioTerms p {
  margin: 0;
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
  border-radius: 10px;
  width: 100%;
  padding: 10px;
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
.attachFile p {
  margin: 0;
}
.attachFile i {
  margin-right: 10px;
  color: #00E68A;
}
.clientInfo {
  background-color: #F8F8F8;
  padding: 20px;
  color: #4D4D4D;
  border-radius: 20px;
}

.clientInfo h4 {
  color: #4D4D4D;

}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 8px 20px 8px;
  }
}
</style>