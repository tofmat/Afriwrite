<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Proposals</h2>
      <div class="flex my-5">
        <input type="text" placeholder="Search proposals" class="mainSearch">
        <input class="submitSearch" type="submit" value="">
      </div>
      <div class="allProposals">
        <v-tabs color = "green darken-3">
          <v-tab>Active</v-tab>
          <v-tab-item class="mt-5">
            <div>
              <div class="mt-5">
                <div v-if="apiLoading">
                  <div class="sectionTitle mb-5 px-3 flex justifyBetween">
                    <div>
                      <skeleton-box width="10%" />
                    </div>
                    <p class="darkGreyColor noMargin">View all</p>
                  </div>
                  <div class="row noMargin lightGreyBack">
                    <v-col cols="12" sm="1">
                      <skeleton-box
                        width="80px"
                        height="70px"
                        class="roundRadius"
                      />
                    </v-col>
                    <v-col cols="12" sm="9">
                      <div>
                        <skeleton-box width="10%" />
                      </div>
                      <div>
                        <skeleton-box width="5%" height="10px" />
                      </div>
                      <div>
                        <skeleton-box width="30%" />
                      </div>
                      <div>
                        <skeleton-box width="40%" />
                      </div>
                      <div>
                        <skeleton-box width="90%" />
                      </div>
                    </v-col>
                    <v-col cols="12" sm="2">
                      <v-btn class="findBtn my-1 fullWidth" to="#" disabled>Invite to Job</v-btn>
                      <v-btn class="greyBtn my-1 fullWidth" to="#" disabled><i class="far fa-comments mr-2 mainColor"></i> Contact</v-btn>
                      <v-btn class="greyBtn mb-4 fullWidth" disabled><i class="far fa-trash-alt mr-2 mainColor"></i> Delete</v-btn>
                    </v-col>
                  </div>
                </div>
                <div v-else>
                  <div v-if="allProposals.length > 0">
                    <div v-for="jobs in allProposals" :key="jobs.id">
                      <div class="sectionTitle my-5 px-3 flex justifyBetween">
                        <h4 class="ml-1 darkGreyColor">{{jobs.title}}</h4>
                        <p class="mainColor noMargin">View all</p>
                      </div>
                      <div class="row noMargin lightGreyBack" v-for="proposal in jobs.proposals" :key="proposal.id">
                        <v-col cols="12" sm="1">
                          <img src="../../assets/images/Ellipse29.png" alt="user">
                        </v-col>
                        <v-col cols="12" sm="9">
                          <h4 class="mainColor">Praise Ade</h4>
                          <small>Designer</small>
                          <p class="noMargin">Bid: $60</p>
                          <p class="noMargin">Duration: 1 Month</p>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla...</p>
                        </v-col>
                        <v-col cols="12" sm="2">
                          <v-btn class="findBtn my-1 fullWidth" to="#">Invite to Job</v-btn>
                          <v-btn class="greyBtn my-1 fullWidth" to="#"><i class="far fa-comments mr-2 mainColor"></i> Contact</v-btn>
                          <v-btn class="greyBtn mb-4 fullWidth"><i class="far fa-trash-alt mr-2 mainColor"></i> Delete</v-btn>
                        </v-col>
                      </div>
                      <h5 v-if="jobs.proposals.length == 0">Sorry you have received no proposal for this job at the moment.</h5>
                    </div>
                  </div>
                  <div v-if="allProposals.length == 0">
                    <div class="sectionTitle mb-5 px-3 flex">
                      <h4 class="ml-1 darkGreyColor">You have not uploaded any job. Please do and come back later.</h4>
                    </div>
                  </div>
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
      allProposals: []
    }
  },
  methods : {
    getJobs() {
      this.apiLoading = true;
      this.$store.dispatch('client/getAllProposals').then(({data}) => {
        this.apiLoading = false
        this.allProposals = data.data
      }).catch((err) => {
        this.apiLoading = false
        this.$toast.success('There was an error getting the proposals')
      })
    }
  },
  mounted() {
    this.getJobs();
  },
  computed: {
    ...mapGetters({
      allProposals: 'client/allProposals',
    })
  }

}
</script>

<style>
.roundRadius {
  border-radius: 50%;
}
</style>