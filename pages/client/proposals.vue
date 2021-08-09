<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Proposals</h2>
      <input type="text" placeholder="Search proposals" class="my-5 mainSearch">
      <div class="allProposals">
        <v-tabs color = "green darken-3">
          <v-tab>Active</v-tab>
          <v-tab-item class="mt-5">
            <div class="mt-5">
              <div class="sectionTitle mb-5 px-3 flex justifyBetween">
                <h4 class="ml-1 darkGreyColor">UX Designer for a quick project...</h4>
                <p class="mainColor noMargin">View all</p>
              </div>
              <div class="row noMargin lightGreyBack">
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
            </div>
            <div class="mt-5">
              <div class="sectionTitle mb-5 px-3 flex justifyBetween">
                <h4 class="ml-1 darkGreyColor">UX Designer for a quick project...</h4>
                <p class="mainColor noMargin">View all</p>
              </div>
              <div class="row noMargin lightGreyBack">
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
        this.$toast.success('There was an error getting the pro')
      })
    }
  },
  mounted() {
    this.getJobs();
  },
  computed: {
    ...mapGetters({
      allJobs: 'writer/allJobs',
    })
  }

}
</script>