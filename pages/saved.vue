<template>
  <div class="dashDefaultContent">
    <h2 class="mainColor mb-5">Saved Jobs</h2>
    <input type="text" placeholder="search for Jobs" class="mb-10 mainSearch">
     <div class="row">
        <v-col cols="12" sm="12" lg="4" class="dashDef">
          <div class="dashSlate">
            <div class="dashSearch">
              <h3>Filter By</h3>
              <hr>
              <div class="mt-3">
                <h4>Categories</h4>
                <div class="flex alignCenter catCheck">
                  <input type="checkbox" name="" id="">
                  <p>Basic Level</p>
                </div>
                <div class="flex alignCenter catCheck">
                  <input type="checkbox" name="" id="">
                  <p>Basic Level</p>
                </div>
                <div class="flex alignCenter catCheck">
                  <input type="checkbox" name="" id="">
                  <p>Basic Level</p>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="8" class="">
          <div class="jobInfo">
            <div class="row noMargin">
              <v-col cols="12" sm="9" class="jobDesc">
                <div class="flex alignCenter jobControl justifyBetween">
                  <h2 class="mainColor noMargin">Job Title</h2>
                  <span class="saveJob"><i class="fas fa-bookmark mr-2"></i> Saved <i class="far fa-trash-alt ml-2 mainColor iconBack"></i></span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?</p>
                <div class="flex alignCenter scrollable-x">
                  <v-btn class="tagBtn">Writing</v-btn>
                  <v-btn class="tagBtn">Content writing</v-btn>
                  <v-btn class="tagBtn">Proof reading</v-btn>
                </div>
              </v-col>
              <v-col cols="12" sm="3" class="jobControls">
                  <div class="jobControl">
                    <p>Budget</p>
                    <h2>$5-10</h2>
                  </div>
                  <div class="jobControl">
                    <p>Est. Time</p>
                    <h2>1-2 months</h2>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Remote</p>
                  </div>
              </v-col>
            </div>
          </div>
        </v-col>
     </div>
 
  </div> 
</template>

<script>
export default {
  layout: 'dashboard'

}
</script>

<style>
.dashDef {
  /* padding-top: 0 !important; */
}
.dashSlate {
  padding: 1em;
  border: solid #E0E0E0 1px;
  border-radius: 20px 0 0 20px;
  margin-bottom: 30px;
  margin-top: 1px;
}
.dashDefaultContent{
    margin: 50px 50px 20px 120px;
}
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
.saveJob{
  color: #AAAAAA;
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
.catCheck {
  margin-bottom: 7px;
}
.catCheck p {
  margin: 0;
}
.catCheck input {
  margin-right: 10px;
}
.jobInfo{
  background-color: #F9F9F9;
  margin-bottom: 30px;
}
.mainSearch{
  border: #C5C5C5 1px solid;
  border-radius: 15px;
  width: 100%;
  padding: 3px 15px;
}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 10px 20px 10px;
  }
}
</style>