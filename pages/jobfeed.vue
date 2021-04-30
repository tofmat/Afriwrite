<template>
  <div class="dashDefaultContent">
     <div class="row">
        <v-col cols="12" sm="12" lg="4" class="dashDef">
          <div class="dashSlate">
            <div class="dashSearch">
              <h3>Start Your Search</h3>
              <input type="text" name="" id="">
            </div>
          </div>
          <div class="dashSlate">
            <div class="dashSearch">
              <h3>Categories</h3>
              <input type="text" name="" id="">
              <div class="mt-3">
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
          <div class="dashSlate">
            <div class="dashSearch">
              <h3>Search Locations</h3>
              <input type="text" name="" id="">
              <div class="mt-3">
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
          <div class="dashSlate">
            <div class="dashSearch">
              <h3>Project Length</h3>
              <div class="mt-3">
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
          <div class="dashSlate">
            <div class="dashSearch">
              <p class="">Click "Apply Filter" to apply latest changes made by you</p>
              <v-btn class="findBtn" to="#">Apply Filters</v-btn>              
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="8" class="">
          <div class="jobInfo">
            <div class="row">
              <v-col cols="12" sm="8" class="jobDesc">
                <h3>This is the job title</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?</p>
              </v-col>
              <v-col cols="12" sm="4" class="jobControls">
                  <div class="flex alignCenter jobControl">
                    <i class="fas fa-dollar-sign mainColor"></i>
                    <p>Basic Level</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="far fa-folder blueColor"></i>
                    <p>Type Fixed</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="far fa-clock redColor"></i>
                    <p>Less than a week</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="fas fa-heart ashColor"></i>
                    <p>Click to save</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <v-btn class="findBtn mt-5" to="job">View Job</v-btn>  
                  </div>
              </v-col>
            </div>
          </div>
          <div class="jobInfo">
            <div class="row">
              <v-col cols="12" sm="8" class="jobDesc">
                <h3>This is the job title</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?</p>
              </v-col>
              <v-col cols="12" sm="4" class="jobControls">
                  <div class="flex alignCenter jobControl">
                    <i class="fas fa-dollar-sign mainColor"></i>
                    <p>Basic Level</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="far fa-folder blueColor"></i>
                    <p>Type Fixed</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="far fa-clock redColor"></i>
                    <p>Less than a week</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="fas fa-heart ashColor"></i>
                    <p>Click to save</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <v-btn class="findBtn mt-5" to="job">View Job</v-btn>  
                  </div>
              </v-col>
            </div>
          </div>
          <div class="jobInfo">
            <div class="row">
              <v-col cols="12" sm="8" class="jobDesc">
                <h3>This is the job title</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?</p>
              </v-col>
              <v-col cols="12" sm="4" class="jobControls">
                  <div class="flex alignCenter jobControl">
                    <i class="fas fa-dollar-sign mainColor"></i>
                    <p>Basic Level</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="far fa-folder blueColor"></i>
                    <p>Type Fixed</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="far fa-clock redColor"></i>
                    <p>Less than a week</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <i class="fas fa-heart ashColor"></i>
                    <p>Click to save</p>
                  </div>
                  <div class="flex alignCenter jobControl">
                    <v-btn class="findBtn mt-5" to="job">View Job</v-btn>  
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
  padding-top: 0 !important;
}
.dashSlate {
  background-color: white;
  padding: 2em;
  margin-bottom: 30px;
}
.dashDefaultContent{
    margin: 50px 50px 20px 120px;
}
.dashSearch h3{
  margin-bottom: 20px;
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
.jobDesc h3 {
  padding-bottom: 15px; 
}
.jobControls{
  padding: 2em;
}
.jobControls p {
  margin: 0;
}
.jobControls i {
  margin-right: 10px;
  /* color: #00E68A; */
}
.jobControl{
  margin-bottom: 10px;
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
  background-color: white;
  margin-bottom: 30px;
}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 10px 20px 10px;
  }
}
</style>