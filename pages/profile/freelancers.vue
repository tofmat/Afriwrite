<template>
  <div class="signUp">
    <div class="fullHeight">
      <div class="signupField">
        <v-container>
          <div>
            <h1 class="flex centerflex mb-3">View Our Freelancers</h1>
            <div
              class="row noMargin lightGreyBack mb-5"
              v-for="writer in freelancers"
              :key="writer.public_reference_id"
            >
              <v-col cols="12" sm="1">
                <div v-if="writer.profile_picture">
                  <img
                    :src="writer.profile_picture"
                    alt="user"
                    style="border-radius: 50%; width: 70px;"
                  />
                </div>
                <div v-else>
                  <img
                    src="../../assets/images/Ellipse29.png"
                    alt="user"
                  />
                </div>
              </v-col>
              <v-col cols="12" sm="9">
                <h4 class="mainColor">
                  {{ writer.first_name }} {{ writer.last_name }} 
                </h4>
                <p class="noMargin">
                  <b>Category:</b> {{ writer.category }}
                </p>
                <p class="noMargin">
                  <b>Bio:</b> {{ writer.about_me  }}
                </p>
                <p class="noMargin">
                  <b>Writing Niches:</b> {{ formatStringData(writer.writing_niches) }}
                </p>
                <p class="noMargin">
                  <b>Skills:</b> {{ formatStringData(writer.skills) }}
                </p>
                <p class="noMargin">
                  <b>Country:</b> {{ writer.country }}
                </p>
                <p>
                  <b>Languages:</b> {{ writer.languages  }}
                </p>
              </v-col>
              <v-col cols="12" sm="2">
                <v-btn
                  v-if="user && user.role === 'client'"
                  class="greyBtn my-1 fullWidth mt-5"
                  :to="`/profile/${writer.public_reference_id}`"
                  ><i class="far fa-comments mr-2 mainColor"></i>
                  View Profile</v-btn
                >
              </v-col>
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import { Constants } from "../../static/constants"

export default {
  data(){
    return {
      loading: false,
      user: this.$auth.user,
      freelancers: []
    }
  },
  beforeMount(){
    this.getWritersProfile()
  },
  methods: {
    async getWritersProfile(){
      try {
        this.loading = true;
        const { data } = await this.$axios.get(
          `/get-verified-writers-profile`, {
            headers: {
              PUBLICJOBPOSTINGKEY: Constants.PUBLIC_JOB_POSTING_KEY
            }
          },
        );

        console.log(data.data)

        if(data && data.data != null){
          this.freelancers = data.data
        }else{
          this.$toast.error("An error occurred. please try again");
          window.location.assign('/')
        }
      } catch (error) {
        this.loading = false;
        console.log(error)
        this.$toast.error(
          "An error occurred. please try again"
        );
        window.location.assign('/')
      }
    }
  }
}
</script>