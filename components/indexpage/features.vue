<template>
  <div class="featureSection">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" class="text">
          <div class="featureText">
            <h3>Freelance writing in its best</h3>
            <p>
              Hire an Excellent African Freelance Writer at Your Best Budget,
              and Get Your Job Done Excellently
            </p>
          </div>
          <div class="mt-10">
            <div class="featureWrapper my-2">
              <img src="../../assets/images/satisfaction.png" alt="HeadImage" />
              <h1>100% Satisfaction</h1>
              <p>
                Our writers are some of the best freelance writers in Africa.
                They have been tested, trained, and retested before they can
                work with us. Moreover, we have put in place a "content quality
                control system" that includes a group of Proofreaders and
                Correctors who can help you when there's dispute between you and
                the freelancer you hire. All these ensure your job is done the
                way you want it.
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="featureWrapper my-2">
            <img src="../../assets/images/vetted.png" alt="HeadImage" />
            <h1>Professionally Vetted Writing</h1>
            <p>
              All writing projects posted on this platform have specific
              guidelines/instructions the freelancer must follow. Job-givers can
              either adopt one of our guidelines, edit our guidelines to suit
              their needs, or attach their own guidelines to the job when
              posting. This ensures writers work within specific instructions,
              which may enhance content readability, SEO, and attractiveness.
            </p>
          </div>
          <div class="featureWrapper mt-8">
            <img src="../../assets/images/protection.png" alt="HeadImage" />
            <h1>Writers and Client’s Interest Protection</h1>
            <p>
              At AfriWrites, we bridge the gap between Elite African Freelance
              Writers and their clients from every part of the world. All
              writers on this platform have passed through rigorous website
              content writing trainings and passed the tests of their abilities
              in their specific writing niches.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.featureSection {
  background: #008952;
  padding: 80px 0;
}

.featureText h3 {
  font-style: normal;
  font-weight: 500;
  color: white !important;
  font-size: 50px !important;
}
.featureText p {
  margin-top: 20px;
  color: white !important;
  font-size: 20px;
}
.featureWrapper {
  flex-direction: column;
  background: #ffffff;
  border-radius: 30px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.featureWrapper img {
  width: 150px;
  margin-bottom: 40px;
}
.featureWrapper h1 {
  line-height: 30px;
  color: black;
  text-align: center;
  font-weight: 800;
  font-size: 26px;
  margin-bottom: 20px;
}
.featureWrapper p {
  color: #787878;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
}
@media (max-width: 600px) {
  .featureSection {
    background: #008952;
    padding: 40px 0;
  }
  .featureText h3 {
    font-style: normal;
    font-weight: 500;
    color: white !important;
    font-size: 40px !important;
  }
  .featureText p {
    margin-top: 20px;
    color: white !important;
    font-size: 20px;
  }
}
</style>