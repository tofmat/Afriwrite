<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">All Contracts</h2>
      <input type="text" placeholder="Search proposals" class="my-5 mainSearch">
      <div class="proposalOffers">
        <div class="jobInfo">
          <div class="row noMargin">
            <v-col cols="12" sm="3" class="jobDesc flex flexColumn justifyCenter">
              <h3>Initiated on June 12, 2021</h3>
              <p>5 days ago</p>
              <h3>Hired by</h3>
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
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard'

}
</script>

<style>
.dashSearch h3{
  margin-bottom: 10px;
}
.dashSearch input{
  border: solid 1px #E0E0E0;
  border-radius: 20px;
  padding: 3px;
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