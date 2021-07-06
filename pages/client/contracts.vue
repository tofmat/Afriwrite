<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">All Contracts</h2>
      <input type="text" placeholder="Search proposals" class="my-5 mainSearch">
      <div>
        <v-tabs color = "green darken-3">
          <v-tab>Project</v-tab>
          <v-tab>Milestones</v-tab>
          
          <v-tab-item class="mt-5">
            <div class="proposalOffers">
              <div class="jobInfo">
                <div class="row noMargin">
                  <v-col cols="12" sm="3" class="jobDesc flex flexColumn justifyCenter">
                    <h3>Initiated on June 12, 2021</h3>
                    <p>5 days ago</p>
                    <h3>Client</h3>
                    <p>Praise Aderinwale</p>
                  </v-col>
                  <v-col cols="12" sm="7" class="jobDesc">
                    <div class="flex alignCenter jobControl justifyBetween">
                      <h2 class="mainColor noMargin">Job Title</h2>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?</p>
                  </v-col>
                  <v-col cols="12" sm="2" class="jobControls">
                      <div class="jobControl">
                        <p> Approved Amount</p>
                        <h2>$15</h2>
                      </div>
                      <div class="jobControl">
                        <p>Est. Time</p>
                        <h2>1 month</h2>
                      </div>
                  </v-col>
                </div>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item class="mt-5">
            <div class="proposalOffers">
              <div class="jobInfo">
                <div class="row noMargin">
                  <v-col cols="12" sm="3" class="jobDesc flex flexColumn justifyCenter">
                    <h3>Initiated on June 12, 2021</h3>
                    <p>5 days ago</p>
                    <h3>Cient</h3>
                    <p>Praise Aderinwale</p>
                  </v-col>
                  <v-col cols="12" sm="7" class="jobDesc">
                    <div class="flex alignCenter jobControl justifyBetween">
                      <h2 class="mainColor noMargin">Job Title</h2>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?</p>
                  </v-col>
                  <v-col cols="12" sm="2" class="jobControls">
                      <div class="jobControl">
                        <p> Approved Amount</p>
                        <h2>$15</h2>
                      </div>
                      <div class="jobControl">
                        <p>Est. Time</p>
                        <h2>1 month</h2>
                      </div>
                  </v-col>
                </div>
                <div class="row noMargin">
                  <v-col cols="12" class="jobDescMile">
                    <h3 class="darkGreyColor">MILESTONES</h3>
                    <div class="flex alignCenter justifyBetween my-1">
                      <div>
                        <div class="flex alignCenter">
                          <h4 class="mr-4">1.</h4>
                          <div>
                            <h4>Description</h4>
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
                        <h4 class="mainColor">Paid</h4>
                      </div>
                    </div>
                    <div class="flex alignCenter justifyBetween my-1">
                      <div>
                        <div class="flex alignCenter">
                          <h4 class="mr-4">2.</h4>
                          <div>
                            <h4>Description</h4>
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
                  </v-col>
                </div>
              </div>
            </div>
          </v-tab-item>
        </v-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      tab: null
    }
  }

}
</script>

<style>
.dashSearch h3{
  margin-bottom: 10px;
}
.jobDescMile{
  padding: 1em 2em;
}
.dashSearch input{
  border: solid 1px #E0E0E0;
  border-radius: 20px;
  padding: 3px;
}
.paymentStatusMilestone{
  background-color: rgba(0, 137, 82, 0.05);
  padding: 10px 20px;
  border-radius: 0 30px 30px 0;
}
.jobControls{
  background-color: #EBFFF7;
}
.jobDesc{
  padding: 2em;
}


.jobControls{
  padding: 1em;
  background-color: #008952;
  border-radius: 0 20px 20px 0;
}
.jobControls {
  margin: 0;
}
.jobControls i {
  margin-right: 10px;
  color: #fff;
}
.jobControl{
  margin-bottom: 10px;
}

.jobControl{
  margin-bottom: 10px;
}

.jobControl p, h2{
  color: white;
  margin: 0;
}
.jobInfo{
  background-color: #F9F9F9;
  margin-bottom: 30px;
}
</style>