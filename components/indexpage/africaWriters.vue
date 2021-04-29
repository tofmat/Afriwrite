<template>
  <div class="africaWritersPlay">
      <v-container>
          <div>
              <v-row class="alignCenter africaWriters">
                    <v-col cols="12" sm="6">
                        <div class="">
                            <h1>
                                Africa's Writers <br> Marketplace
                            </h1>
                            <div class="marginy-20">
                                <div class="divider2 centerflex"></div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus tempore nemo sequi, recusandae unde molestiae adipisci dolores suscipit cupiditate consequatur debitis dicta nisi voluptas rem eveniet fuga? Nam, rem quia!</p>
                            <div class="centerFlex africaButton">
                                <v-btn class="myBtn findBtn">
                                    Find Talent
                                </v-btn>
                                <v-btn class="workBtn">
                                    Find Work
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <img src="../../assets/images/twoImage.png" alt="image">
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
.africaWritersPlay{
    margin: 50px 0;
}
.africaWriters h1 {
    font-size: 50px;
    line-height: 50px;
    
}
.africaWriters p {
    font-size: 20px;    
}
.divider2 {
    width: 150px;
    height: 5px;
    background-color: #00E68A;
}
.africaButton{
    margin: 30px 0;
}
.africaWriters img {
    width: 100%;
}
.findBtn{
    padding: 20px !important;
    background-color: #00E68A !important;
    color: white !important;
    box-shadow: none !important;
    margin-right: 10px;
}
.workBtn{
    padding: 20px !important;
    background-color: transparent !important;
    border: #00E68A solid 1px;
    color: #00E68A !important;
    box-shadow: none !important;
}
@media(max-width: 600px){
  .africaWritersPlay{
     margin: 10px 0;
    }
    .africaWriters h1 {
    font-size: 40px;
    line-height: 45px;
    
}
}
</style>