<template>
  <div>
    <div>
      <div class="row noMargin">
        <v-col cols="12" sm="12" lg="12" class="">
          <div class="dashMainContent">
            <div>
              <div class="row">
                <v-col cols="12" sm="3" lg="2" class="profilePicture">
                  <div class="profileImage">
                    <img
                      :src="user.profile_picture"
                      alt="ProfilePic"
                      v-if="user.profile_picture"
                    />
                    <img
                      src=".././../../assets/images/emptyUser.png"
                      alt="ProfilePic"
                      v-else
                    />
                  </div>
                </v-col>
                <v-col cols="12" sm="8" lg="5">
                  <div class="nameAndLocation">
                    <h1 class="darkGreyColor">
                      {{ user.first_name }}
                      {{ user.last_name }}
                    </h1>
                    <p>{{ user.username }}</p>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-map-marker-alt"></i>
                      <p class="noMargin">{{ user.country }}</p>
                    </div>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-envelope"></i>
                      <p class="noMargin">{{ user.email }}</p>
                    </div>
                    <div class="flex alignCenter mb-3 lca">
                      <i class="fas fa-phone"></i>
                      <p class="noMargin">{{ user.phone_number }}</p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="5" lg="5">
                  <div class="jobStat">
                    <span class="flex alignCenter mt-3 lca darkGreyColor"
                      ><i class="fas fa-ribbon"></i>
                      <p class="noMargin">TOP RATED</p></span
                    >
                  </div>
                </v-col>
              </div>
            </div>
            <div class="mt-10">
              <div class="row">
                <v-col cols="12" sm="12">
                  <div>
                    <p class="textMainColor mt-3">
                      Bio: {{ user.about_me }}
                    </p>
                  </div>
                </v-col>
              </div>
              <div class="row textCenter">
                <v-col cols="6" sm="6">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Hourly Rate</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="6" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Null</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="6" class="">
                  <div class="mx-2 infoCards">
                    <!-- <h3 class="mb-2 mainColor">{{ user.jobs ? user.jobs.length : 0 }}</h3> -->
                    <p class="darkGreyColor">Jobs</p>
                  </div>
                </v-col>
                <v-col cols="6" sm="6" class="">
                  <div class="mx-2 infoCards">
                    <h3 class="mb-2 mainColor">Null</h3>
                    <p class="darkGreyColor">Hours Worked</p>
                  </div>
                </v-col>
              </div>
            </div>
            <div class="mt-10">
              <div class="backWhite workHis">
                <h2 class="mb-4 darkGreyColor">Work history and feedback</h2>
                <hr class="fullWidth" />
                <div class="mt-4">
                  <div v-for="work in user.jobs" :key="work.id">
                    <v-row>
                      <v-col cols="12" sm="8">
                        <h3 class="mainColor">
                          {{ work.job_title }}
                        </h3>
                        <div class="flex alignCenter my-3 lca">
                          <i class="fas fa-star yellowColor"></i
                          ><i class="fas fa-star yellowColor"></i
                          ><i class="fas fa-star yellowColor"></i
                          ><i class="fas fa-star yellowColor"></i>
                          <h3>5.0</h3>
                        </div>
                        <p class="textItalics">
                          As always, great work and working with you
                        </p>
                      </v-col>
                      <v-col cols="12" sm="4" class="rightAlign">
                        <h3>&#8358; {{ work.proposed_amount }}</h3>
                        <h3>Fixed Price</h3>
                      </v-col>
                    </v-row>
                    <hr class="fullWidth mt-4 mb-5" />
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="mt-10" v-if="user.portfolio.length > 0">
              <div class="allArticle">
                <h2 class="mb-4 darkGreyColor">Past written Articles</h2>
                <hr class="fullWidth" />
                <div class="mt-4">
                  <div>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="4"
                        v-for="singleArticle in user.portfolio"
                        :key="singleArticle.id"
                      >
                        <div class="articleSingle">
                          <img
                            src=".././../../assets/images/articleImage.jpg"
                            alt=""
                          />
                          <div class="articleDetails">
                            <h3 class="mainColor">
                              {{ singleArticle.primary_keywords }}
                            </h3>
                            <p>
                              {{ singleArticle.meta_description }}
                            </p>
                            <p
                              class="
                                textItalics
                                rightAlign
                                mainColor
                                cursorPointer
                              "
                            >
                              <a
                                :href="singleArticle.article_link"
                                target="_blank"
                                >Read more</a
                              >
                            </p>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: "client",
  computed:{
    writing_niches(){
      return  this.$auth.user.writing_niches.replaceAll('[', '').replaceAll(']', '').replaceAll('",', '", ').replaceAll('"', '')
    },
    skills(){
      return  this.$auth.user.skills.replaceAll('[', '').replaceAll(']', '').replaceAll('",', '", ').replaceAll('"', '')
    }
  },
  data() {
    return {
      dialog: false,
      loading: false,
      user: this.$auth.user
    };
  },
  methods: {
    copyJobLink() {
      navigator.clipboard.writeText(
        `https://www.afriwrite.com/profile/${this.$auth.user.username}`
      );
      this.$toast.success("Link copied");
    },
  },
  async mounted() {
    const { data } = await this.$auth.fetchUser()
    if(data){
      this.$auth.setUser(data.data)
    }
  },
};
</script>

<style>
.profileImage {
  padding: 5px 7px;
  width: fit-content;
  border: 1px solid rgba(0, 137, 82, 0.2);
  border-radius: 50%;
}
.profileImage img {
  width: 70px !important;
  height: 70px !important;
  border-radius: 50%;
}
.normalInput2 {
  background: #ececec;
  padding: 5px 15px;
  height: 35px;
  border-radius: 5px;
}
.selectBank {
  -webkit-appearance: auto;
}
.articleSingle {
  background: #f9f9f9;
  padding: 0 0 10px 0;
}
.articleSingle img {
  width: 100%;
}
.articleDetails {
  padding: 9px;
}
.textMainColor {
  color: #707070;
}
.jobStat span {
  width: fit-content;
  background-color: rgba(0, 137, 82, 0.05);
  padding: 5px;
  border-radius: 2px;
}
.jobStat .percent {
  width: 70%;
  height: 10px;
  background-color: #00e68a;
  border-radius: 20px;
  margin-top: 10px;
}
.jobStat i {
  color: #ffde00;
}
.colorBlue {
  color: blue;
}
.rightSideDash {
  padding: 30px 30px;
}
.dashMainContent {
  margin: 50px 10px 20px 120px;
}
.profileInfoHolder {
  padding: 15px 15px;
  border-radius: 15px;
  border-left: #008952 15px solid;
  background-color: white;
}
.nameAndLocation {
  margin: 0 !important;
}
.lca i {
  margin-right: 10px;
}
.infoCards {
  background-color: rgba(0, 137, 82, 0.05);
  border-radius: 15px;
  padding: 15px;
}
.infoCards h3 {
  background-color: rgba(0, 137, 82, 0.2);
  width: fit-content;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  margin: auto;
}
.backWhite {
  background-color: white;
}
.workHis {
  padding: 30px;
  border-radius: 20px;
  background-color: rgba(248, 248, 248, 1);
}
.allArticle {
  padding: 30px;
}
.sideB {
  background-color: #f8f8f8;
  border-radius: 25px 0 0 25px;
}
@media (max-width: 1000px) {
  .dashMainContent {
    margin: 1px 5px 20px 5px;
  }
}
@media (max-width: 600px) {
  .profilePicture img {
    width: 150px;
  }
}
</style>