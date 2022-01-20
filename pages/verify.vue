<template>
  <div class="signUp">
    <div class="fullHeight">
      <div class="signupField">
        <div v-if="loading">
          <spinner />
        </div>
        <v-container>
          <div class="flex centerflex signupEvery">
            <div class="signupImage">
              <img src="../assets/images/typewriter.png" alt="" />
            </div>
            <div class="signupForm">
              <div class="centerflex columnFlex">
                <p class="signUpHead" v-if="success">
                  Email address has been verified!
                </p>
                <p class="signUpHead" v-if="error">
                  Email address can not be verified at the moment!
                </p>
                <form action="" class="signupInput">
                  <div class="formInput flex alignCenter justifyCenter">
                    <div class="">
                      <img
                        src="../assets/images/Group154.png"
                        alt="Check Mail"
                      />
                    </div>
                  </div>
                </form>
                <div class="flex loginBtns">
                  <v-btn
                    class="myBtn findBtn"
                    to="/dashboard/jobfeed"
                    v-if="this.$auth.user.role === 'writer'"
                    >PROCEED TO DASHBOARD</v-btn
                  >
                  <v-btn
                    class="myBtn findBtn"
                    to="/client/jobs"
                    v-if="this.$auth.user.role === 'client'"
                    >PROCEED TO DASHBOARD</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import spinner from "../components/spinner.vue";
export default {
  components: {
    spinner,
  },
  data() {
    return {
      error: false,
      success: false,
      loading: false,
      emailDetails: {
        email: "",
        token: "",
      },
    };
  },
  methods: {
    async confirmEmailAddress() {
      this.loading = true;
      this.emailDetails.email = this.$route.query.email;
      this.emailDetails.token = this.$route.query.token;
      try {
        const response = await this.$axios.post(
          `/v1/auth/confirm-email`,
          this.emailDetails
        );
        this.loading = false;

        this.success = true;
        return response;
      } catch (error) {
        this.loading = false;
        this.error = true;
        this.$toast.error(error.response.data.error);
      }
    },
  },
  mounted() {
    this.confirmEmailAddress();
  },
};
</script>

<style>
.signUp {
  background-color: #f5f6fa;
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
.signupField {
  padding: 60px 0;
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
.checkboxDiv p {
  color: #8b8b8b;
  margin-bottom: 0 !important;
}
.orDiv p {
  margin: 0 10px;
}
.orDiv {
  margin: 15px;
}
.checkboxDiv .checkbox {
  height: auto;
  margin-right: 5px;
  width: 15px;
  color: #8b8b8b;
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
  /* .signupField {
      padding: 60px 50px;
    } */
  .loginBtns {
    flex-direction: column;
  }
  .findBtn {
    margin: 5px 0;
  }
}
@media (max-width: 1000px) {
  /* .signupField {
      padding: 60px 50px;
    } */
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
  }
  .signupImage img {
    width: 200px;
  }
  .signupField {
    padding: 30px 0;
  }
}
@media (max-width: 500px) {
  .signupImage {
    padding: 0 10px;
  }
  .signupForm {
    padding: 0 10px;
  }
  .noShowSmall {
    display: none;
  }
  .onlyShowSmall {
    display: block;
  }
}
</style>