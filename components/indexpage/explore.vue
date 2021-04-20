<template>
  <div class="exploreSection">
      <v-container>
          <div class="exploreText">
              <h1 class="textCenter">
                  Explore the Marketplace
              </h1>
              <p class="textCenter">
                  Profession by categories
              </p>
              <div class="marginy-20">
                <div class="divider centerflex"></div>
              </div>
              <p class="textCenter">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/> Ab quisquam accusantium, consequatur cupiditate, libero, culpa fugiat in quidem aperiam.</p>
          </div>
          <div class="fourCards">
            <v-row>
                <v-col cols="12" sm="3">
                    <v-card class="pa-2 rounded-xl centerflex p-10 tile columnFlex" outlined tile >
                        <img src="../../assets/images/writing.svg" alt="icon">
                        <p>Affiliate Marketing Review Aricles</p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-card class="pa-2 rounded-xl centerflex tile columnFlex" outlined tile>
                        <img src="../../assets/images/content.svg" alt="icon">
                        <p>Blog Posts</p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-card class="pa-2 rounded-xl centerflex tile columnFlex" outlined tile>
                            <img src="../../assets/images/frame.svg" alt="icon">
                            <p>Social Media Captions</p>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-card class="pa-2 rounded-xl centerflex tile columnFlex" outlined tile>
                        <img src="../../assets/images/landing-page.svg" alt="icon">
                        <p>E-commerce Website Articles</p>
                    </v-card>
                </v-col>
            </v-row>
          </div>
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.exploreSection{
    padding: 40px 10px;
}
.exploreText h1 {
    font-size: 48px;
}
.exploreText p {
    font-size: 20px;
}
.divider {
    width: 150px;
    height: 5px;
    margin: auto;
    background-color: #00E68A;
}
.tile{
    padding: 20px 0 !important;
}
.tile img {
    border-radius: 0 !important;
    margin-top: 20px;
}
.tile p {
    margin-top: 20px;
}
.fourCards {
    margin: 50px 0;
}
.fourCards p {
    font-weight: 600;
}
/* .curvedBorder{
    border-radius: 10% !important;
} */
</style>