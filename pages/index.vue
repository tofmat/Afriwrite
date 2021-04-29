<template>
<!-- <v-container class="firstHead"> -->
  <div>
    <div class="firstHead">
      <v-container class="firstHead">
        <v-row no-gutters align="center">
          <v-col
            cols="12"
            sm="6"
          >
            <img src="../assets/images/Component42–1.svg" alt="HeadImage" height="400px">
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="text"
          >
            <h1>Hire expert Writers for any job, Online</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ullam ea nisi nam minus id qui obcaecati, eum, culpa eius saepe consequuntur commodi optio nemo laborum. Non adipisci at eos.</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <explore />

    <africaWriters />
  </div>
</template>

<script>
import explore from '../components/indexpage/explore'
import africaWriters from '../components/indexpage/africaWriters'
export default {
  components: {
    explore,
    africaWriters
  }
}
</script>

<style>
.firstHead{
  padding: 50px 20px;
  background-color: #F5F5F5;
}
.firstHead h1 {
  font-size: 56px;
  line-height: 60px;
  padding-bottom: 20px;
}
.firstHead img {
  width: 100%;
}
@media(max-width: 600px){
  .firstHead{
    padding: 10px 10px;
    background-color: #F5F5F5;
  }
  .firstHead h1 {
    font-size: 40px;
    line-height: 42px;
    padding-bottom: 20px;
    margin-top: 20px;
  }
}
</style>
