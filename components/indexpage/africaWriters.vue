<template>
  <div class="africaWritersPlay">
    <v-container>
      <div>
        <v-row class="alignCenter africaWriters">
          <v-col cols="12" sm="6">
            <div class="">
              <p class="greenText">For Writers</p>
              <h1>
                Get great writing <br />
                gigs
              </h1>
              <div class="marginy-20">
                <div class="divider2 centerflex"></div>
              </div>
              <p>
                Meet clients you’re happy to work with and take your career to
                new heights.
              </p>
              <div class="centerFlex africaButton">
                <v-btn class="workBtn" to="/signup"> Find Work </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <img src="../../assets/images/manImage.jpg" alt="image" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.africaWritersPlay {
  margin: 50px 20px;
}
.africaWriters h1 {
  font-size: 50px;
  line-height: 50px;
}
.africaWriters p {
  font-size: 20px;
}
.greenText {
  color: #008952;
  font-weight: 700;
}
.divider2 {
  width: 150px;
  height: 5px;
  background-color: #00e68a;
}
.africaButton {
  margin: 30px 0;
}
.africaWriters img {
  width: 100%;
}
.findBtn {
  padding: 10px 20px !important;
  background-color: #008952 !important;
  color: white !important;
  box-shadow: none !important;
  margin-right: 10px;
}
.workBtn {
  padding: 20px !important;
  background-color: transparent !important;
  border: #008952 solid 1px;
  color: #008952 !important;
  box-shadow: none !important;
}
@media (max-width: 600px) {
  .africaWritersPlay {
    margin: 20px;
  }
  .africaWriters h1 {
    font-size: 40px;
    line-height: 45px;
  }
}
</style>