<template>
  <div class="exploreSection">
    <h2 class="exploreTitle">
      <span class="colorShade">Explor</span>e the marketplace
    </h2>
    <div class="exploreSection2">
      <v-row align="center">
        <v-col cols="12" sm="3">
          <div class="exploreText">
            <h1 class="textCenter">Hire from our pool of Talents</h1>
            <v-btn class="px-5 mr-2 mt-5 greyBtn2" to="/signup">
              Find Work</v-btn
            >
          </div></v-col
        >
        <v-col cols="12" sm="9">
          <div class="fourCards">
            <v-row>
              <v-col cols="12" sm="3">
                <v-card
                  class="pa-2 rounded-xl centerflex p-10 tile columnFlex"
                  outlined
                  tile
                >
                  <img src="../../assets/images/writing.svg" alt="icon" />
                  <p>Affiliate Marketing Review Aricles</p>
                </v-card>
              </v-col>
              <v-col cols="12" sm="3">
                <v-card
                  class="pa-2 rounded-xl centerflex tile columnFlex"
                  outlined
                  tile
                >
                  <img src="../../assets/images/content.svg" alt="icon" />
                  <p>Blog Posts</p>
                </v-card>
              </v-col>
              <v-col cols="12" sm="3">
                <v-card
                  class="pa-2 rounded-xl centerflex tile columnFlex"
                  outlined
                  tile
                >
                  <img src="../../assets/images/frame.svg" alt="icon" />
                  <p>Social Media Captions</p>
                </v-card>
              </v-col>
              <v-col cols="12" sm="3">
                <v-card
                  class="pa-2 rounded-xl centerflex tile columnFlex"
                  outlined
                  tile
                >
                  <img src="../../assets/images/landing-page.svg" alt="icon" />
                  <p>E-commerce Website Articles</p>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.exploreTitle {
  color: #008952;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 35px;
}
.colorShade {
  background: rgba(255, 168, 0, 0.1);
}
.exploreSection2 {
  background: url("../../assets/images/exploreBackground.jpg");
  padding: 60px 40px;
}
.exploreSection {
  margin: 30px 50px;
}
.exploreText {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.exploreText h1 {
  font-size: 48px;
  color: white;
  font-weight: 500;
  font-style: italic;
  text-align: center;
}
.exploreText p {
  font-size: 20px;
}
.divider {
  width: 150px;
  height: 5px;
  margin: auto;
  background-color: #00e68a;
}
.tile {
  padding: 40px 0 !important;
  min-height: 250px !important;
  background: linear-gradient(
    180deg,
    #ffa800 8.33%,
    rgba(255, 168, 0, 0.3) 76.56%,
    rgba(0, 137, 82, 0.05) 100%
  ) !important;
  border: 0.5px solid #ffffff !important;
}
.tile img {
  border-radius: 0 !important;
  margin-top: 20px;
}
.tile p {
  margin-top: 20px;
  color: white !important;
  font-weight: 800;
  text-align: center !important;
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
@media (max-width: 600px) {
  .exploreText h1 {
    font-size: 30px;
    line-height: 42px;
  }
  .exploreSection {
    padding: 40px 20px 30px;
    margin: 10px;
  }
  .fourCards img {
    width: 70px;
  }
}
</style>