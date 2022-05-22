<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Transactions</h2>

      <div class="mt-10">
        <div class="row textCenter">
          <v-col cols="6" sm="3">
              <div class="mx-2 infoCard infoCard1">
                  <h3 class="mb-2 mainColor">$500k</h3>
                  <p class="darkGreyColor">Net Income</p>
              </div>
          </v-col>
          <v-col cols="6" sm="3" class="">
              <div class="mx-2 infoCard infoCard2">
                  <h3 class="mb-2 mainColor">$200k</h3>
                  <p class="darkGreyColor">Withdrawn</p>
              </div>
          </v-col>
          <v-col cols="6" sm="3" class="">
              <div class="mx-2 infoCard infoCard3">
                  <h3 class="mb-2 mainColor">$5k</h3>
                  <p class="darkGreyColor">Pending Clearance</p>
              </div>
          </v-col>
          <v-col cols="6" sm="3" class="">
              <div class="mx-2 infoCard infoCard4">
                  <h3 class="mb-2 mainColor">$420k</h3>
                  <p class="darkGreyColor">Available for withdrawal</p>
              </div>
          </v-col>
        </div>
      </div>

      <div class="mt-5">
        <span><h2 class="darkGreyColor">Withdraw</h2><p class="textItalics">Select mode of withdrawal</p></span>
        <div class="flex alignCenter justifyCenter breakToColumn">
          <div>
            <v-btn class="myBtn paymentButton mx-3"> <img src="../../assets/images/paypal.png" alt="paypal log" class="mr-2"> Paypal</v-btn>
          </div>
          <div>
            <v-btn class="myBtn paymentButton mx-3"> <img src="../../assets/images/wire-transfer.png" alt="bank log" class="mr-2"> Bank Transfer</v-btn>
          </div>
        </div>
      </div>

      <div class="mt-10 table">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'S/N',
          align: 'start',
          filterable: false,
          value: 'name',
        },
        { text: 'DATE', value: 'calories' },
        { text: 'PLATFORM', value: 'fat' },
        { text: 'AMOUNT', value: 'carbs' },
        { text: 'DETAILS', value: 'protein' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ],
    }
  }

}
</script>

<style>
.infoCard {
  border-radius: 15px;
  padding: 15px;
}
.infoCard h3 {
  width: fit-content;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  margin: auto;
}
.infoCard1 {
  background-color: rgba(0, 137, 82, 0.05);
}
.infoCard1 h3 {
  background-color: rgba(0, 137, 82, 0.2);  
}
.infoCard2 {
  background-color: rgba(255, 51, 0, 0.05);
}
.infoCard2 h3 {
  background-color: rgba(255, 51, 0, 0.1);
  color: rgba(237, 0, 0, 1);
}
.infoCard3 {
  background-color: rgba(255, 168, 0, 0.05);
}
.infoCard3 h3 {
  background-color: rgba(255, 168, 0, 0.1);
  color: rgba(209, 100, 0, 1);
}
.infoCard4 {
  background-color: rgba(0, 137, 82, 0.05);
}
.infoCard4 h3 {
  background-color: rgba(0, 137, 82, 0.1);
  color: rgba(0, 137, 82, 1);
}
.paymentButton{
  color: #008952 !important;
  padding: 21px 60px !important;
  background-color: #fff !important;
  border: 7px solid #F9F9F9;
  border-radius: 5px;
  text-transform: none !important;
  letter-spacing: normal !important;
}
@media (max-width: 1000px) {
  .paymentButton{
    margin: 5px 0;
  }
}
</style>