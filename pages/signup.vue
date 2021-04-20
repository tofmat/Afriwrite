<template>
  <div class="signUp">
    <div class="fullHeight">
			<div class="signupField">
        <v-container>
          <div class="flex centerflex signupEvery">
              <div class="signupImage">
                <img src="../assets/images/typwriter.svg" alt="">
              </div>
              <div class="signupForm">
                  <div>
                    <p style="color: #434343;" class="signUpHead">Sign up to Afriwrites</p>
                    <p>Already have an account? <span class="blueColor">Log in</span></p>
                    <p class="onlyShowSmall">Sign up with</p>
                    <div class="otherSignUp">
                      <v-btn class="gooBtn myBtn"> <i class="fab fa-google googleIcon"></i> <span class="noShowSmall">Sign up with Google</span> </v-btn>
                      <v-btn class="faceBtn myBtn"><i class="fab fa-facebook-f fa-2x facebookIcon"></i></v-btn>
                    </div>
                    <div class="flex centerflex orDiv">
                      <hr>
                      <p>or</p>
                      <hr>
                    </div>

                    <form action="" class="signupInput">
                      <div class="formInput flex columnFlex">
                        <label for="">Full name</label>
                        <input type="text" placeholder="hett" />
                      </div>
                      <div class="formInput flex columnFlex">
                        <label for="">Email Address</label>
                        <input type="text" placeholder="hett" />
                      </div>
                      <div class="formInput flex columnFlex">
                        <label for="">Password</label>
                        <input type="text" placeholder="hett" />
                      </div>
                      <div class="flex checkboxDiv centerflex">
                        <input type="checkbox" class="checkbox"/>
                        <p>By creating account, you agree to accept our <span class="blueColor"> Private Policy,</span> <span class="blueColor">Term of Service </span> and <span class="blueColor"> Notification Setting </span></p>
                      </div>
                      <div class="flex loginBtns">
                        <v-btn>Continue as Client</v-btn>
                        <v-btn>Continue as Freelancer</v-btn>
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

}
</script>

<style>
.signUp{
  background-color: #F5F6FA;
}
.gooBtn{
  padding: 20px !important;
  background-color: transparent !important;
  border: #8B8B8B solid 1px;
  color: #8B8B8B !important;
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
}
.otherSignUp{
  display: flex;
}
.checkboxDiv {
  color: #8B8B8B;
}
.orDiv p{
  margin: 0 10px;
}
.orDiv{
  margin: 15px;
}
.checkboxDiv .checkbox {
  margin-right: 15px;
  width: 30px;
  color: #8B8B8B;
}
.signupForm{
  width: 40%;
  padding: 0 50px;
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
.signupInput input {
  border: solid 1px #8B8B8B;
  border-radius: 8px;
  height: 36px;
  padding: 10px;
}
.signUpHead {
  font-size: 25px;
  font-weight: 500;
}
.faceBtn{
  padding: 21px !important;
  background-color: #E2E2E4 !important;
  color: #8B8B8B !important;
}
@media(max-width: 1300px){
    /* .signupField {
      padding: 60px 50px;
    } */
  .loginBtns{
    flex-direction: column;
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
  @media(max-width: 700px){
  .signupForm {
    width: 100%;
  }
  }
  @media(max-width: 400px){
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
}
</style>