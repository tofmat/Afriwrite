<template>
  <div>
    <div class="dashDefaultContent">
      <div class="jobI">
        <div class="jobDetails">
          <h2 class="blackColor mb-3">{{ job.title }}</h2>
          <div class="row">
            <v-col cols="12" sm="12" lg="9">
              <hr class="mb-3">
              <div class="jobDetailsTexts">
                <p>{{ job.description }}</p>
                <div class="flex alignCenter scrollable-x">
                  <v-btn class="tagBtn" v-for="niche in job.writing_niches" :key="niche">{{ niche }}</v-btn>
                </div>
              </div>
              <div class="row alignCenter jobTips mt-10">
                <v-col cols="6" sm="3">
                  <div class="flex alignCenter justifyCenter">
                    <p class="mr-2">Budget</p>
                    <h2>N {{ job.total_amount }}</h2>
                  </div>
                </v-col>
                <v-col cols="6" sm="3">
                  <div class="flex alignCenter justifyCenter">
                    <p class="mr-2">Estimated time</p>
                    <h2>{{ job.duration_of_job_in_days}} Days</h2>
                  </div>
                </v-col>
                 <v-col cols="6" sm="3">
                    <div class="flex alignCenter justifyCenter">
                      <p class="mr-2">Number of words</p>
                      <h2>{{ job.number_of_words }}</h2>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <div class="flex alignCenter justifyCenter">
                      <p class="mr-2">Experience</p>
                      <h2>{{ job.level_of_experience }}</h2>
                    </div>
                  </v-col>
              </div>
              <div class="mt-10 attachments">
                <h2 class="mb-5">Attachments</h2>
                <row class="row">
                  <v-col cols="6" sm="6">
                    <div class="flex alignCenter" v-for="media in job.media" :key="media.id">
                      <i class="fas fa-link"></i>
                      <a
                        :href="`${media.file}`"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mainColor"
                      >
                        {{ media.file | fileNameSlicee }}
                      </a>
                    </div>
                  </v-col>
                </row>
              </div>
              <div class="mt-5 activities">
                <h2 class="mb-5">Activity on this Job</h2>
                <div>
                  <p>Proposals: <span class="boldText">
                    {{ job.activities.total_proposals }}
                  </span></p>
                  <p>Last viewed by Client: <span class="boldText">
                    {{ job.last_viewed_by_client }}
                  </span></p>
                  <!-- <p>Interviewing: <span class="boldText">5</span></p> -->
                  <p>Unanswered proposals: <span class="boldText">
                    {{ job.activities.total_unanswered_proposals }}
                  </span></p>
                </div>

              </div>
            </v-col>

            <v-col cols="12" sm="12" lg="3" class="alignOnMobile">
              <v-btn class="findBtn mb-4 fullWidth" @click="submitProposal">Submit a Proposal</v-btn>
              <div>
                <div class="clientInfo mt-10">
                  <h4><span><i class="far fa-file-alt mr-2 mb-5"></i> ABOUT THE CLIENT </span></h4>
                  <p class="mb-5 darkGreyColor"><span> Payment Verified <i class="fas fa-certificate yellowColor"></i></span></p>
                  <h4>
                    {{ job.client.first_name }} {{ job.client.last_name }}
                  </h4>
                  <h4>{{ job.client.country }}</h4>
                  <!-- <p class="mb-5">10:00am</p> -->
                  <!-- <h4>20 Jobs posted</h4> -->
                  <!-- <p class="mb-5">100% hire rate</p> -->
                  <p class="mb-5">Member since {{ job.client.created_at }}</p>
                  <div>
                    <h4><span><i class="far fa-file-alt mr-2 mb-2"></i> Job Link </span></h4>
                    <v-btn class="workDiv fullWidth my-3 scrollable-x" to="#">
                        {{ publicJobPostLink }}
                    </v-btn>
                    <p class="mainColor" @click="copyLink(publicJobPostLink)">Copy link</p>
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
import { Constants } from "../../../static/constants"

export default {
  layout: 'job',
  data(){
    return{
      job: {
        activities: {},
        client: {},
        media: {}
      }
    }
  },
   computed: {
    publicJobPostLink(){
      return window.location
    }
  },
  mounted(){
    this.getJob(this.$route.params.job)
  },
  methods:{
    async getJob(job_id) {
      try {
        this.loading = true;
        const { data } = await this.$axios.get(
          `/public-job-post`, {
            headers: {
              PUBLIC_JOB_POSTING_KEY: Constants.PUBLIC_JOB_POSTING_KEY
            },
            params: {
              public_reference_id: job_id
            }
          },
        );

        if(data && data.data != null){
          this.job = data.data
          this.job.writing_niches = this.job.writing_niches.split(',')
        }else{
          this.$toast.error("Job not found");
          window.location.assign('/')
        }
      } catch (error) {
        this.loading = false;
        console.log(error)
        this.$toast.error(
          "There was an error getting this job. please try again"
        );
      }
    },
    submitProposal(){
      this.$router.push(`/dashboard/jobfeed/${this.$route.params.job}/submit`)
    }
  }
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
@media(max-width: 1000px){
  .dashDefaultContent{
      margin: 30px 10px 20px 10px;
  }
  .alignOnMobile {
    align-items: center;
  }
}
</style>