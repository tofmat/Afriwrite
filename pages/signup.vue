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
                <p class="signUpHead">Sign up to Afriwrites</p>
                <p class="textCenter">
                  Already have an account?
                  <span class="mainColor"
                    ><nuxt-link to="/signin"> Log in </nuxt-link></span
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

                <form
                  @submit.prevent="register(userInfo)"
                  class="signupInput mt-5"
                >
                  <div class="formInput flex centerflex twoColumnsInput">
                    <input
                      type="text"
                      placeholder="First Name"
                      v-model="userInfo.first_name"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      v-model="userInfo.last_name"
                      required
                    />
                  </div>
                  <div class="formInput flex columnFlex">
                    <input
                      type="text"
                      placeholder="Email Address"
                      v-model="userInfo.email"
                      required
                    />
                  </div>
                  <div class="formInput flex columnFlex">
                    <input
                      type="password"
                      placeholder="Set a Password"
                      v-model="userInfo.password"
                      required
                    />
                  </div>
                  <div class="formInput flex flexMobile centerflex">
                    <v-btn
                      class="myBtn jobBtn"
                      :class="{ selectedRole: freelancerSelectedRole }"
                      @click="freelancerRole"
                      >Work as a freelancer</v-btn
                    >
                    <v-btn
                      class="myBtn jobBtn"
                      :class="{ selectedRole: clientSelectedRole }"
                      @click="clientRole"
                      >Hire for a project</v-btn
                    >
                  </div>

                  <div class="flex loginBtns justifyCenter">
                    <v-btn
                      class="myBtn findBtn"
                      type="submit"
                      :loading="loading"
                      >CREATE MY ACCOUNT</v-btn
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
      clientSelectedRole: false,
      freelancerSelectedRole: false,
      userInfo: {
        first_name: "",
        last_name: "",
        email: "",
        role: "",
        password: "",
      },
    };
  },
  // computed (){
  //   return {
  //     this.
  //   }
  // },
  methods: {
    freelancerRole() {
      this.clientSelectedRole = false;
      this.freelancerSelectedRole = true;
      this.userInfo.role = "writer";
    },
    clientRole() {
      this.freelancerSelectedRole = false;
      this.clientSelectedRole = true;
      this.userInfo.role = "client";
    },
    async register(registrationInfo) {
      this.errors = "";
      try {
        this.loading = true;
        this.$toast.show("Signing you up");
        const response = await this.$axios.post(
          "/v1/auth/register",
          registrationInfo
        );
        await this.$auth.loginWith("local", {
          data: registrationInfo,
        });
        this.$toast.success("You have successfully registered");
        if (this.$auth.user.role === "client") {
          this.$router.push("/client/jobs");
        } else if (this.$auth.user.role === "writer") {
          this.$router.push("/dashboard/jobfeed");
        }
        this.loading = false;
        return response;
        this.$toast.success("Welcome to your dashboard");
      } catch (error) {
        this.loading = false;
        this.errors = error.response.data.error;
        this.$toast.info(
          "There was a problem signing up, check your credentials"
        );
      }
    },
  },
  // created() {
  //   if (this.$auth.user.role === "writer") {
  //       this.$router.push('/dashboard/jobfeed')
  //   }  else if (this.$auth.user.role === "client"){
  //       this.$router.push('/client')
  //   } else {
  //     // remain on this page
  //   }
  // }
};
</script>

<style>
.selectedRole {
  background-color: #008952 !important;
  color: white !important;
  border-color: #008952 !important;
  box-shadow: none !important;
}
.signUp {
  background-color: #fff;
}

.findBtn {
  padding: 10px 20px !important;
  background-color: #008952 !important;
  color: white !important;
  box-shadow: none !important;
  margin-right: 10px;
}
.gooBtn {
  padding: 20px !important;
  background-color: #346ef1 !important;
  border: #346ef1 solid 1px;
  color: #fff !important;
  margin-right: 10px;
}
.fullHeight {
  min-height: 100vh;
}

.formInput label {
  margin-bottom: 10px;
}
.formInput {
  margin-bottom: 20px;
  color: #8b8b8b;
}
.googleIcon {
  margin-right: 10px;
  color: red;
}
.facebookIcon {
  color: blue;
  margin-right: 10px;
}
.otherSignUp {
  display: flex;
}
.checkboxDiv {
  color: #8b8b8b;
}
.orDiv p {
  margin: 0 10px;
}
.orDiv {
  margin: 15px;
}
.checkboxDiv .checkbox {
  margin-right: 3px;
  width: 15px;
  color: #8b8b8b;
}
.checkboxDiv p {
  color: #8b8b8b;
  margin-bottom: 0 !important;
}
.twoColumnsInput :first-child {
  margin-right: 10px;
}
.twoColumnsInput :last-child {
  margin-left: 10px;
}
.signupForm {
  border: solid 1px #e5e5e5;
  border-radius: 30px;
  width: 60%;
  padding: 40px 50px;
  color: #8b8b8b;
}
.onlyShowSmall {
  display: none;
}
.signupImage {
  padding: 0 50px;
}
.signupImage img {
  width: 100%;
}
.noFullWidth {
  width: fit-content !important;
}
.signupInput {
  width: 100%;
}
.signupInput input {
  border: solid 1px #8b8b8b;
  border-radius: 2px;
  height: 45px;
  padding: 10px;
  width: 100%;
  /* margin: 0 10px; */
}
.blueBack {
  background-color: blue;
}
.signUpHead {
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  color: #008952;
}
.faceBtn {
  padding: 21px !important;
  background-color: transparent !important;
  border: #1877f2 solid 1px;
  color: #1877f2 !important;
}
@media (max-width: 1300px) {
  .loginBtns {
    flex-direction: column;
  }
  .findBtn {
    margin: 5px 0;
  }
}
@media (max-width: 1000px) {
  .loginBtns {
    flex-direction: column;
  }
  .signupEvery {
    flex-direction: column;
  }
  .signupForm {
    width: 70%;
  }
}
@media (max-width: 700px) {
  .signupForm {
    width: 100%;
    margin-top: 20px;
    padding: 20px;
  }
  .signupImage img {
    width: 200px;
  }
  .flexMobile {
    flex-direction: column;
  }
  .flexMobile button {
    margin: 10px 0;
  }
}
@media (max-width: 500px) {
  .signupImage {
    padding: 0 10px;
  }
  .signupForm {
    padding: 30px 10px;
  }
  .noShowSmall {
    display: none;
  }
  .onlyShowSmall {
    display: block;
  }
}
</style>