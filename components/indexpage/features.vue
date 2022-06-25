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
              <p align="justify">
                The freelance writers on this platform are some of the best on the African continent. 
                They have been tested before they gained access to this platform. Moreover, 
                we've put in place some features (such as the escrow payment and after-service 
                feedback & rating) that encourage writers to meet the needs of their clients. 
                You can also make use of the Disputes Resolution feature or contact our Problems 
                Resolution Center when things are getting out of hand with your writer or client. 
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="featureWrapper my-2">
            <img src="../../assets/images/vetted.png" alt="HeadImage" />
            <h1>Professionally Vetted Writing</h1>
            <p align="justify">
              All writing projects posted on this platform must come with specific guidelines/instructions 
              the freelancers must follow. Job givers must give necessary guidelines to the freelancers 
              before signing contracts. This ensures writers work with specific instructions, which may 
              enhance content readability, SEO, attractiveness, overall quality, and acceptability. 
            </p>
          </div>
          <div class="featureWrapper mt-8">
            <img src="../../assets/images/protection.png" alt="HeadImage" />
            <h1>Writers and Client’s Interest Protection</h1>
            <p align="justify">
              At AfriWrites, we bridge the gap between Elite African Freelance Writers and their Clients 
              from every part of the world. All writers and clients have been assessed before they are given 
              access to the platform, and we know we've put proper checks in place to ensure the interests 
              of all parties are protected. 
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