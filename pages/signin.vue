<template>
  <div class="signUp">
    <div class="fullHeight">
      <div class="signupField">
        <v-container>
          <div class="flex centerflex signupEvery">
            <div class="signupImage noMobile">
              <img src="../assets/images/typewriter.png" alt="" />
            </div>
            <div class="signupForm">
              <div class="centerflex columnFlex">
                <p class="signUpHead">Sign in to AfriWrites</p>
                <p class="textCenter">
                  You do not have an account?
                  <span class="mainColor"
                    ><nuxt-link to="/signup"> Sign up </nuxt-link></span
                  >
                  <!-- <p class="onlyShowSmall">Sign up with</p>
                    <div class="otherSignUp">
                      <v-btn class="gooBtn myBtn" to="#"> <i class="fab fa-google googleIcon"></i> <span class="noShowSmall">Sign up with Google</span> </v-btn>
                      <v-btn class="faceBtn myBtn" to="#"><i class="fab fa-facebook-f facebookIcon"></i> <span class="noShowSmall">Sign up with Facebook</span> </v-btn>
                    </div>
                    <div class="flex centerflex orDiv">
                      <hr>
                      <p>or</p>
                      <hr>
                    </div> -->
                </p>

                <form @submit.prevent="loginUser(userInfo)" class="signupInput">
                  <div class="formInput flex columnFlex">
                    <input
                      type="text"
                      placeholder="Email Address"
                      v-model="userInfo.email"
                    />
                  </div>
                  <div class="formInput flex columnFlex">
                    <input
                      type="password"
                      placeholder="Set a Password"
                      v-model="userInfo.password"
                    />
                  </div>
                  <div class="flex checkboxDiv">
                    <div class="flex alignCenter">
                      <input type="checkbox" class="checkbox" />
                      <p>Keep me logged in</p>
                    </div>
                    <p><span class="mainColor">Forget Password</span></p>
                  </div>

                  <div class="flex loginBtns justifyCenter mt-3">
                    <v-btn
                      class="myBtn findBtn"
                      type="submit"
                      :loading="loading"
                      >SIGN IN</v-btn
                    >
                  </div>

                  <div class="flex justifyCenter mt-3">
                    <small class="small textCenter">
                      {{ errors }}
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth-page",
  data() {
    return {
      errors: "",
      loading: false,
      userInfo: {
        email: "",
        password: "",
      },
    };
  },
  mounted(){
        console.log(this.$store.state)
  },
  methods: {
    async loginUser(loginInfo) {
      this.errors = "";
      try {
        this.loading = true;
        this.$toast.show("Logging in...");
        const response = await this.$auth.loginWith("local", {
          data: loginInfo,
        });
        if(this.$store.state.formerRoute){
          this.$router.push(this.$store.state.formerRoute);
          this.$store.dispatch('clearFormerRoute', null, { root: true })
        }else if (this.$auth.user.role === "client") {
          this.$router.push("/client/jobs");
        } else if (this.$auth.user.role === "writer") {
          this.$router.push("/dashboard/jobfeed");
        } else if (this.$auth.user.role === "admin") {
          this.$router.push("/admin");
        }
        this.$toast.success("You are logged in");
        this.loading = false;
        return response;
      } catch (error) {
        // this.errors = error.response.data.error
        this.loading = false;
        this.$toast.info(
          "There was a problem logging in, check your credentials"
        );
      }
    },
  },
};
</script>

<style>
</style>