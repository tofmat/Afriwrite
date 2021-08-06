<template>
  <div class="signUp">
    <div class="fullHeight">
			<div class="signupField">
        <v-container>
          <div class="flex centerflex signupEvery">
              <div class="signupImage">
                <img src="../assets/images/typewriter.png" alt="">
              </div>
              <div class="signupForm">
                  <div class="centerflex columnFlex">
                    <p class="signUpHead">Sign in to AfriWrites</p>
                    <p class="textCenter">You do not have an account? <span class="mainColor"><nuxt-link to="/signup">
                      Sign up
                    </nuxt-link></span>
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

                    <form @submit.prevent="loginUser(userInfo)" class="signupInput">
                      <div class="formInput flex columnFlex">
                        <input type="text" placeholder="Email Address" v-model="userInfo.email"/>
                      </div>
                      <div class="formInput flex columnFlex">
                        <input type="password" placeholder="Set a Password" v-model="userInfo.password"/>
                      </div>
                      <div class="flex checkboxDiv">
                        <div class="flex alignCenter">
                        <input type="checkbox" class="checkbox"/>
                        <p>Keep me logged in</p>
                        </div>
                        <p><span class="mainColor">Forget Password</span> </p>
                      </div>

                      <div class="flex loginBtns justifyCenter mt-3">
                        <v-btn class="myBtn findBtn" type="submit" :loading = loading>SIGN IN</v-btn>
                      </div>

                      <div class="flex justifyCenter mt-3">
                        <small class="small textCenter">
                          {{errors}}
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
  middleware : 'auth-page',
  data () {
    return {
      errors: '',
      loading: false,
      userInfo : {
        email: 'tofmatt@gmail.com',
        password: 'Ogunfowote400'
      }
    }
  },
  methods : {
    async loginUser(loginInfo){
      this.errors = ""
      try {
          this.loading = true;
          this.$toast.show('Logging in...')
          const response = await this.$auth.loginWith('local', {
            data: loginInfo
          })
          if (this.$auth.user.role === 'client') {
            this.$router.push('/client/jobs')
          } 
          else if (this.$auth.user.role === 'writer') {
            this.$router.push('/dashboard/jobfeed')
          }
          this.$toast.success('You are logged in')
          this.loading = false;
          return response;
      } catch (error){
          // this.errors = error.response.data.error
          this.loading = false;
          this.$toast.info('There was a problem logging in, check your credentials');
      }
    }
  },
}
</script>

<style>
.signUp{
  background-color: #F5F6FA;
}
.findBtn{
    padding: 20px !important;
    background-color: #008952 !important;
    color: white !important;
    box-shadow: none !important;
    margin-right: 10px;
}
.gooBtn{
  padding: 20px !important;
  background-color: #346EF1 !important;
  border: #346EF1 solid 1px;
  color: #fff !important;
  margin-right: 10px;
}
.fullHeight{
  min-height: 100vh;
}
.signupField{
  padding: 60px 0;
}
.formInput label {
  margin-bottom: 10px;
}
.formInput {
  margin-bottom: 20px;
  color: #8B8B8B;
}
.googleIcon{
  margin-right: 10px;
  color: red;
}
.facebookIcon {
  color: blue;
  margin-right: 10px;
}
.otherSignUp{
  display: flex;
}
.checkboxDiv {
  color: #8B8B8B;
}
.checkboxDiv p {
  color: #8B8B8B;
  margin-bottom: 0 !important;
}
.orDiv p{
  margin: 0 10px;
}
.orDiv{
  margin: 15px;
}
.checkboxDiv .checkbox {
  height: auto;
  margin-right: 5px;
  width: 15px;
  color: #8B8B8B;
}
.twoColumnsInput :first-child{
  margin-right: 10px;
}
.twoColumnsInput :last-child{
  margin-left: 10px;
}
.signupForm{
  border: solid 1px #E5E5E5;
  border-radius: 30px;
  width: 60%;
  padding:40px 50px;
  color: #8B8B8B;
}
.onlyShowSmall{
    display: none;
  }
.signupImage{
  padding: 0 50px;
}
.signupImage img{
  width: 100%;
}
.noFullWidth{
  width: fit-content !important;
}
.signupInput {
  width: 100%;
}
.signupInput input {
  border: solid 1px #8B8B8B;
  border-radius: 2px;
  height: 45px;
  padding: 10px;
  width: 100%;
  /* margin: 0 10px; */
}
.blueBack{
  background-color: blue;
}
.signUpHead {
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  color: #008952;
}
.faceBtn{
  padding: 21px !important;
  background-color: transparent !important;
  border: #1877F2 solid 1px;
  color: #1877F2 !important;
}
@media(max-width: 1300px){
    /* .signupField {
      padding: 60px 50px;
    } */
  .loginBtns{
    flex-direction: column;
  }
  .findBtn{
    margin: 5px 0;
  }
}
@media(max-width: 1000px){
    /* .signupField {
      padding: 60px 50px;
    } */
  .loginBtns{
    flex-direction: column;
  }
  .signupEvery{
    flex-direction: column;
  }
  .signupForm {
    width: 70%;
  }
  
}
  @media(max-width: 700px){
  .signupForm {
    width: 100%;
  }
  .signupImage img{
      width: 200px;
    }
    .signupField{
      padding: 30px 0;
    }
  }
  @media(max-width: 500px){
    .signupImage{
      padding: 0 10px;
    }
    .signupForm{
      padding: 0 10px;
    }
    .noShowSmall{
      display: none;
    }
    .onlyShowSmall{
      display: block;
    }
  }
</style>