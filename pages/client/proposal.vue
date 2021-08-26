<template>
  <div>
    <div class="dashDefaultContent">
      <h2 class="mainColor">Proposal</h2>
      <div class="row">
        <v-col cols="12" sm="9">
          <div class="flex alignCenter mobileColumn">
            <div class="mr-10">
              <img src="../../assets/images/Ellipse29.png" alt="user">
              <h3>Praise Aderinwale</h3>
              <p>Designer</p>
            </div>
            <div class="mr-10 infoCards">
                <h3 class="mb-2 mainColor">$50.00</h3>
                <p class="darkGreyColor">Total Bid</p>
            </div>
            <div class=" infoCards">
                <h3 class="mb-2 mainColor">1 Month</h3>
                <p class="darkGreyColor">Duration</p>
            </div>
          </div>
          <p class="my-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Itaque nulla possimus, facilis voluptas maiores voluptatibus ullam incidunt fuga, quae sunt veritatis ex ratione reprehenderit exercitationem veniam distinctio, minima quam hic?</p>
          <div>
            <h3>Attachments</h3>
            <div></div>
            <div class="flex alignCenter my-2">
              <i class="fas fa-link mr-3"></i>
              <p class="noMargin darkGreyColor">sample000001.pdf</p>
            </div>
            <div class="flex alignCenter my-2">
              <i class="fas fa-link mr-3"></i>
              <p class="noMargin darkGreyColor">sample000001.pdf</p>
            </div>
            <div class="flex alignCenter my-2">
              <i class="fas fa-link mr-3"></i>
              <p class="noMargin darkGreyColor">sample000001.pdf</p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn class="findBtn mb-4 fullWidth">Invite to Job</v-btn>
          <v-btn class="greyBtn mb-4 fullWidth"><i class="far fa-comments mr-2 mainColor"></i> Contact</v-btn>
          <v-btn class="greyBtn mb-4 fullWidth"><i class="far fa-trash-alt mr-2 mainColor"></i> Delete</v-btn>
          <div>
            <div class="clientInfo">
              <h4><span><i class="far fa-user mr-2 mb-5"></i> ABOUT THE FREELANCER </span></h4>
              <p class="mb-5 darkGreyColor"><span> Verified <i class="fas fa-certificate yellowColor"></i></span></p>
              <h4>USA</h4>
              <p class="mb-5">10:00am</p>
              <h4 class="mb-5">20 Jobs posted</h4>
              <p class="mb-5">Member since August, 2021</p>
            </div>
          </div>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'client'

}
</script>

<style>
.infoCards {
    background-color: rgba(0, 137, 82, 0.05);
    border-radius: 15px;
    padding: 15px 30px;
}
.infoCards h3 {
    background-color: rgba(0, 137, 82, 0.2);
    width: fit-content;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    margin: auto;
}
.clientInfo {
  border-radius: 20px;
  background-color: #F8F8F8;
  padding: 20px;
  color: #4D4D4D;
}

.clientInfo h4 {
  color: #4D4D4D;
}
</style>
