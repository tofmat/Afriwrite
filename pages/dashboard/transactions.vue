<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Transactions</h2>

      <div class="mt-10">
        <div class="row textCenter">
          <v-col cols="6" sm="3">
              <div class="mx-2 infoCard infoCard1">
                  <h3 class="mb-2 mainColor">
                    &#8358; {{ statistics.net_income != null ? statistics.net_income : 0 }}
                  </h3>
                  <p class="darkGreyColor">Net Income</p>
              </div>
          </v-col>
          <v-col cols="6" sm="3" class="">
              <div class="mx-2 infoCard infoCard2">
                  <h3 class="mb-2 mainColor">
                    &#8358; {{ statistics.withdrawn != null ? statistics.withdrawn : 0 }}
                  </h3>
                  <p class="darkGreyColor">Withdrawn</p>
              </div>
          </v-col>
          <v-col cols="6" sm="3" class="">
              <div class="mx-2 infoCard infoCard3">
                  <h3 class="mb-2 mainColor">
                    &#8358; {{ statistics.pending_clearance != null ? statistics.pending_clearance : 0 }}
                  </h3>
                  <p class="darkGreyColor">Pending Clearance</p>
              </div>
          </v-col>
          <!-- <v-col cols="6" sm="3" class="">
              <div class="mx-2 infoCard infoCard4">
                  <h3 class="mb-2 mainColor">$ 250k</h3>
                  <p class="darkGreyColor">Available for withdrawal</p>
              </div>
          </v-col> -->
        </div>
      </div>

      <!-- <div class="mt-5">
        <span><h2 class="darkGreyColor">Withdraw</h2><p class="textItalics">Select mode of withdrawal</p></span>
        <div class="flex alignCenter justifyCenter breakToColumn">
          <div>
            <v-btn class="myBtn paymentButton mx-3"> <img src="../../assets/images/paypal.png" alt="paypal log" class="mr-2"> Paypal</v-btn>
          </div>
          <div>
            <v-btn class="myBtn paymentButton mx-3"> <img src="../../assets/images/wire-transfer.png" alt="bank log" class="mr-2"> Bank Transfer</v-btn>
          </div>
        </div>
      </div> -->

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
            :items="transactions"
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
          text: 'Currency',
          align: 'start',
          value: 'base_currency',
        },
        { text: 'AMOUNT', value: 'amount_sent' },
        { text: 'PAYMENT REFERENCE', value: 'payment_reference' },
        { text: 'DETAILS', value: 'description' },
        { text: 'STATUS', value: 'status' },
        { text: 'DATE', value: 'created_at' },
      ],
      transactions: [],
      statistics: {}
    }
  },
  beforeMount(){
    this.getTransactionHistory()
  },
  methods:{
    async getTransactionHistory(){
      const { data, error } = await this.$axios.get(`/v1/user/transaction-history`);

      if(data && data.data){
        const { transactions, statistics } = data.data
        this.transactions = transactions
        this.statistics = statistics
      }

      if(error){
        throw error
      }
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