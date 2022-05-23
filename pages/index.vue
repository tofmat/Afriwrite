<template>
  <!-- <v-container class="firstHead"> -->
  <div>
    <v-container class="firstHead">
      <v-row align="center">
        <v-col cols="12" sm="6" class="text">
          <h1>Connect with Top Writing Talents in Africa</h1>
          <p>
            AfriWrites bridges the gap between excellent African Freelance
            Writers and clients.
          </p>
          <div class="headButtons">
            <v-btn class="px-5 mr-2 findBtn2" to="jobfeed"> Find Talent</v-btn>
            <v-btn class="px-5 mr-2 greyBtn2" to="jobfeed"> Find Work</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <img src="../assets/images/headImage.png" alt="HeadImage" />
        </v-col>
      </v-row>
    </v-container>
    <Features />
    <explore />

    <africaWriters />
  </div>
</template>

<script>
import explore from "../components/indexpage/explore";
import africaWriters from "../components/indexpage/africaWriters";
import Features from "../components/indexpage/features.vue";
export default {
  components: {
    explore,
    africaWriters,
    Features,
  },
};
</script>

<style>
.firstHead {
  padding: 120px 10px 80px;
}
.findBtn2 {
  margin: 0 !important;
  padding: 10px 30px !important;
  background-color: #008952 !important;
  color: white !important;
  box-shadow: none !important;
  text-transform: none !important;
  letter-spacing: normal !important;
  font-size: 18px !important;
  /* margin-right: 10px; */
  border-radius: 2px !important;
}
.greyBtn2 {
  margin: 0 !important;
  font-size: 18px !important;
  letter-spacing: normal !important;
  padding: 10px 30px !important;
  background-color: #e5e5e5 !important;
  color: #008952 !important;
  box-shadow: none !important;
  text-transform: none !important;
  /* margin-right: 10px; */
  border-radius: 2px !important;
}
.firstHead h1 {
  color: #008952;
  font-size: 56px;
  line-height: 60px;
  padding-bottom: 20px;
}
.headButtons {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
.firstHead p {
  font-size: 26px;
  color: #7a7a7a;
}
.firstHead img {
  width: 100%;
}
@media (max-width: 600px) {
  .firstHead {
    padding: 80px 20px 50px;
  }
  .firstHead h1 {
    font-size: 40px;
    line-height: 42px;
    padding-bottom: 20px;
    margin-top: 20px;
  }
  .firstHead img {
    margin-top: 20px;
    width: 100%;
  }
}
</style>
