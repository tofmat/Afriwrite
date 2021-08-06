<template>
  <div class="dashDefaultContent">
    <h2 class="mainColor mb-5">Job Feeds</h2>
    <div class="flex mb-10">
      <input type="text" placeholder="Search for Jobs" class="mainSearch">
      <input class="submitSearch" type="submit">
    </div>
     <div class="row">
        <v-col cols="12" sm="12" lg="4" class="dashDef">
          <div class="dashSlate">
            <div class="dashSearch">
              <p>{{this.$auth.strategy.token.get()}}</p>
              <h3>Filter By</h3>
              <hr>
              <div class="mt-3">
                <h4>Categories</h4>
                <div class="flex alignCenter catCheck mt-2">
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
          <skeleton-box
          v-if="apiLoading"
          />
          <v-btn @click="getJobs()">Fetch</v-btn>
          <div class="jobInfo" >
            <div class="row noMargin">
              <v-col cols="12" sm="9" class="jobDesc">
                <div class="flex alignCenter jobControl justifyBetween">
                  <h2 class="mainColor noMargin">Job Title</h2>
                  <span class="mainColor saveJob"><i class="fas fa-bookmark mr-2"></i> Save job</span>
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
import skeletonBox from '../../components/skeletonBox'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    skeletonBox
  },
  data () {
    return {
      apiLoading: false,
      allJobs: []
    }
  },
  layout: 'dashboard',
  methods : {
    // ...mapActions({
    //   getAllJobs: 'getAllJobs',
    // }),
    getJobs() {
      this.apiLoading = true;
      this.$store.dispatch('writer/getAllJobs').then(({data}) => {
        this.apiLoading = false
        this.allJobs = data.data
      }).catch((err) => {
        this.apiLoading = false
        this.$toast.success('ERROR OOOOOO')
      })
    }
  },
  mounted() {
    // this.getAllJobs();
  }

}
</script>

<style>
.dashDef {
  /* padding-top: 0 !important; */
}
.submitSearch{
    margin-left: -20px;
    background-color: #008952;
    padding: 0 50px;
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
  margin-bottom: 10px;
}
.mainSearch{
  border: #C5C5C5 1px solid;
  border-radius: 10px;
  width: 100%;
  padding: 10px 15px;
}
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 10px 20px 10px;
  }
}
</style>