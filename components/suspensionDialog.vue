<template>
  <div>
    <v-col cols="auto">
      <v-dialog
        v-model="isSuspended"
        persistent
        transition="dialog-top-transition"
        max-width="600"
      >
        <v-card class="py-5">
          <div class="centerflex columnFlex">
            <v-card-text>
              <h3 class="darkGreyColor textCenter">
                Sorry, Your account has been suspended
              </h3>
              <p class="textCenter mt-2">
                You do not have access to view this page
              </p>
            </v-card-text>
          </div>
          <div class="flex justifyCenter mobileColumn">
            <v-btn class="greyBtn mx-3 my-1">
              <a href="mailto:support@afriwrites.com?Subject=RE: Suspended Account">
                Contact Support
              </a>
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </v-col>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isSuspended: false,
    }
  },
  async mounted() {
    const { data } = await this.$auth.fetchUser()
    if(data){
      if(data.data.account_status === 'suspended') this.isSuspended = true
      this.$auth.setUser(data.data)
    }
  },
}
</script>