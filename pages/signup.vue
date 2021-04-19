<template>
  <div class="signUp">
    <div class="fullHeight">
			<div class="signupField">
        <v-container>
          <div class="flex centerflex">
              <div class="signupImage">
                <img src="../assets/images/typwriter.svg" alt="">
              </div>
              <div class="signupForm">
                  <div>
                    <h2 style="color: #434343;">Sign up to Afriwrites</h2>
                    <p style="padding: 15px 0;">Already have an account? <span class="blueColor">Log in</span></p>
                    <div class="otherSignUp">
                      <v-btn> <i class="fab fa-google googleIcon"></i> Sign up with Google</v-btn>
                      <v-btn><i class="fab fa-facebook-f facebookIcon"></i></v-btn>
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
                      <div class="flex">
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

.fullHeight{
  min-height: 100vh;
}
.signupField{
  padding: 60px 100px;
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
.signupImage{
  padding: 0 50px;
}
.signupInput input {
  border: solid 1px #8B8B8B;
  border-radius: 8px;
  height: 36px;
  padding: 10px;
}


</style>