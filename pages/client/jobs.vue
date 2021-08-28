<template>
  <div>
    <div class="dashDefaultContent">
      <div class="flex alignCenter justifyBetween">
        <div>
          <h2 class="mainColor">{{this.$auth.user.first_name}} {{this.$auth.user.last_name}}</h2>
          <p>Client</p>
        </div>
        <div class="">
          <nuxt-link to="/client/post" class="findBtn">Post a Job</nuxt-link>
        </div>
      </div>

      <div class="activeJobbs">
        <div v-if="apiLoading">
          <div class="proposalOffers">
            <div class="sectionTitle mb-5 px-3 flex justifyBetween">
              <h4 class="ml-1 darkGreyColor">POSTINGS (...) </h4>
              <p class="darkGreyColor noMargin">View all</p>
            </div>
            <div class="jobInfo">
              <div class="row noMargin">
                <v-col cols="12" sm="3" class="jobDesc flex flexColumn justifyCenter">
                  <div>
                    <skeleton-box width="70%" />
                  </div>
                  <div>
                    <skeleton-box width="50%" />
                  </div>
                </v-col>
                <v-col cols="12" sm="7" class="jobDesc">
                  <div class="flex alignCenter jobControl justifyBetween">
                    <skeleton-box width="40%" />
                  </div>
                  <div>
                    <skeleton-box width="80%" />
                  </div>
                  <div>
                    <skeleton-box width="60%" />
                  </div>
                  <div>
                    <skeleton-box width="40%" />
                  </div>
                </v-col>
                <v-col cols="12" sm="2" class="jobControls">
                    <div class="jobControl">
                      <p> Proposed Amount</p>
                      <div>
                        <skeleton-box width="40%" />
                      </div>
                    </div>
                    <div class="jobControl">
                      <p>Est. Time</p>
                      <div>
                        <skeleton-box width="40%" />
                      </div>
                    </div>
                </v-col>
              </div>
            </div>
          </div>
        </div>
        <div class="proposalOffers" v-else>
          <div class="sectionTitle mb-5 px-3 flex justifyBetween">
            <h4 class="ml-1 darkGreyColor">POSTINGS ({{allJobs.length}})</h4>
            <p class="mainColor noMargin">View all</p>
          </div>
          <div class="jobInfo" v-for="job in allJobs" :key="job.id">
            <div class="row noMargin">
              <v-col cols="12" sm="3" class="jobDesc flex flexColumn justifyCenter">
                <h3>Initiated on {{job.created_at | slicee}}</h3>
                <p>{{job.created_at | formatDate}}</p>
              </v-col>
              <v-col cols="12" sm="7" class="jobDesc">
                <div class="flex alignCenter jobControl justifyBetween">
                  <h2 class="mainColor noMargin">{{job.title}}</h2>
                </div>
                <p>{{job.description}}</p>
              </v-col>
              <v-col cols="12" sm="2" class="jobControls">
                  <div class="jobControl">
                    <p> Proposed Amount</p>
                    <h2>${{job.price}}</h2>
                  </div>
                  <div class="jobControl">
                    <p>Number of words</p>
                    <h2>${{job.number_of_words}}</h2>
                  </div>
                  <div class="jobControl">
                    <p>Est. Time</p>
                    <h2>1 month</h2>
                  </div>
              </v-col>
            </div>
          </div>
          <div class="sectionTitle mb-5 px-3 flex justifyBetween" v-if="allJobs.length == 0">
            <h4 class="ml-1 darkGreyColor">You have not posted any job.</h4>
          </div>
        </div>
      </div>

      
      <div class="draftss">
        <div v-if="apiLoadingDrafts">
          <div class="proposalOffers">
            <div class="sectionTitle mb-5 px-3 flex justifyBetween">
              <h4 class="ml-1 darkGreyColor">DRAFTS (...)</h4>
              <p class="mainColor noMargin">View all</p>
            </div>
            <div class="jobInfo">
              <div class="row noMargin">
                <v-col cols="12" sm="3" class="jobDesc flex flexColumn justifyCenter">
                  <div>
                    <skeleton-box width="70%" />
                  </div>
                  <div>
                    <skeleton-box width="50%" />
                  </div>
                </v-col>
                <v-col cols="12" sm="7" class="jobDesc">
                  <div class="flex alignCenter jobControl justifyBetween">
                    <skeleton-box width="40%" />
                  </div>
                  <div>
                    <skeleton-box width="80%" />
                  </div>
                  <div>
                    <skeleton-box width="60%" />
                  </div>
                  <div>
                    <skeleton-box width="40%" />
                  </div>
                </v-col>
                <v-col cols="12" sm="2" class="jobControls">
                    <div class="jobControl">
                      <p> Continue Editing</p>
                      <h2>Go to job</h2>
                    </div>
                </v-col>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="proposalOffers">
            <div class="sectionTitle mb-5 px-3 flex justifyBetween">
              <h4 class="ml-1 darkGreyColor">DRAFTS ({{allDrafts.length}})</h4>
              <p class="mainColor noMargin">View all</p>
            </div>
            <div class="jobInfo" v-for="job in allDrafts" :key="job.id">
              <div class="row noMargin">
                <v-col cols="12" sm="3" class="jobDesc flex flexColumn justifyCenter">
                  <h3>Initiated on {{job.created_at | slicee}}</h3>
                  <p>{{job.created_at | formatDate}}</p>
                </v-col>
                <v-col cols="12" sm="7" class="jobDesc">
                  <div class="flex alignCenter jobControl justifyBetween">
                    <h2 class="mainColor noMargin">{{job.title}}</h2>
                  </div>
                </v-col>
                <v-col cols="12" sm="2" class="jobControls">
                    <div class="jobControl">
                      <p> Continue Editing</p>
                      <h2>Go to job</h2>
                    </div>
                </v-col>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import skeletonBox from '../../components/skeletonBox'
import { mapGetters, mapActions } from 'vuex'
export default {
  layout: 'client',
  components: {
    skeletonBox
  },
  data () {
    return {
      apiLoading: false,
      apiLoadingDrafts: false,
      allJobs: [],
      allDrafts: []
    }
  },
  methods : {
    // ...mapActions({
    //   getAllJobs: 'getAllJobs',
    // }),
    getJobs() {
      this.apiLoading = true;
      this.$store.dispatch('client/getAllJobs').then(({data}) => {
        this.apiLoading = false
        this.allJobs = data.data
      }).catch((err) => {
        this.apiLoading = false
        this.$toast.success('There was an error getting the available jobs')
      })
    },
    getDrafts() {
      this.apiLoadingDrafts = true;
      this.$store.dispatch('client/getAllDrafts').then(({data}) => {
        this.apiLoadingDrafts = false
        this.allDrafts = data.data
      }).catch((err) => {
        this.apiLoading = false
        this.$toast.success('There was an error getting the drafts')
      })
    }
  },
  mounted() {
    this.getJobs();
    this.getDrafts();
  },
  computed: {
    ...mapGetters({
      allJobs: 'client/allJobs',
    })
  },
  filters: {
    changToString: function(value) {
      if (!value) return "";
      return (value = value.toString());
    },
    slicee(data) {
      let str = data.toString();
      let res = str.slice(0, 10);
      return res;
    },
    formatDate(date) {
      const getDuration = (timeStamp, form) => {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const time = { second, minute, hour, day};
        return Math.floor(timeStamp / time[form]);
      }
      const modTimeStamp = Date.parse(date);
      const modDate = (new Date(modTimeStamp)).toDateString()
      const days = getDuration(Date.now() - modTimeStamp, "day");
      if(days >= 30){
        const [_, month, day, year] = /\s(\w{3})\s(\d{2})\s(\w{4})/.exec(modDate);
        return `on ${month} ${parseInt(day)} ${(new Date()).getFullYear() === +year ? "" : year}`
      }
      else{
        const durations =  ["day", "hour", "minute", "second"].map(form =>{
          const since = getDuration(Date.now() - modTimeStamp, form)
            return `${since} ${since > 1 ? form + "s": form} ago`;
          })
          .filter( value => parseInt(value) !== 0)
        return durations[0];
      }
    }
  },

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