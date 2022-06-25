<template>
  <v-app>
    <v-app-bar
      flat
      fixed
      height="inherit"
      class="headNav"
      style="position: relative"
    >
      <a href="/"
        ><img src="../assets/images/afriNewLogoGreen.svg" class="logoImage"
      /></a>
      <v-spacer></v-spacer>
      <v-item-group mandatory class="noMobile">
        <div class="flex">
          <v-list-item
            v-for="nav in navItems"
            :key="nav.to"
            :to="nav.to"
            router
            exact
            class="theItem"
          >
            <v-item v-slot="{ active }" class="navheader px-2"  >
              <v-title :class="active ? 'navActive' : ''">{{
                nav.title
              }}</v-title>
            </v-item>
          </v-list-item>
          <v-list-item  :to="goToDashboard" router  v-if="user">
            <v-item v-slot="{ active }" class="navheader px-2">
              <v-title :class="active ? 'navActive' : ''">My Dashboard</v-title>
            </v-item>
          </v-list-item>
          <v-list-item  :to="goToDashboard" router v-else>
            <v-item v-slot="{ active }" class="navheader px-2">
              <v-title :class="active ? 'navActive' : ''">Sign In</v-title>
            </v-item>
          </v-list-item>
        </div>
      </v-item-group>
      <v-btn class="px-5 mx-2 noMobile findBtn" to="/signup"  v-if="!user"> Join Now</v-btn>
      <div>
        <v-app-bar-nav-icon
          @click="drawer = true"
          class="noDesktop mobileDisplay"
        ></v-app-bar-nav-icon>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="pad-10 noDesktop mobileDisplay"
    >
      <a href="/"
        ><img src="../assets/images/afriNewLogoGreen.svg" class="logoImage"
      /></a>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="navActive">
          <v-list-item
            v-for="(nav, i) in navItems"
            :key="i"
            :to="nav.to"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title v-text="nav.title" />
            </v-list-item-content>
          </v-list-item>
           <v-list-item  :to="goToDashboard" router  v-if="user">
            <v-list-item-content>
                <v-list-item-title>My Dashboard</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-list-item  :to="goToDashboard" router v-else>
            <v-list-item-content>
              <v-list-item-title>Sign In</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-btn class="px-5 mx-2 findBtn" to="/signup" v-if="!user"> Join Now</v-btn>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>

    <v-footer dark class="mainFooter">
      <v-container>
        <v-row style="justify-content: center; margin-top: 30px;">
          <v-col cols="6" sm="3">
            <div class="footerList">
              <ul>
                <li>Resources</li>
                <li>Blog</li>
                <li>Freelancers</li>
                <li>Clients</li>
                <li>FAQs</li>
                <li>Marketplace</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="6" sm="3">
            <div class="footerList">
              <ul>
                <li>
                  <a href="/privacy-policy">
                    Privacy Policy
                  </a>    
                </li>
                <li>
                  <a href="/terms-of-use">
                    Terms of Service
                  </a>    
                </li>
                <li>Invite a Friend</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="6" sm="3">
            <div class="footerList">
              <ul>
                <li>Support</li>
                <li>
                  <a href="/about-us">
                    About Us
                  </a>
                </li>
                <li>Work with us</li>
                <li>Help & Support</li>
              </ul>
            </div>
          </v-col>
        </v-row>
        <hr />
        <div class="flex justifyBetween alignCenter">
          <div class="footLogo">
            <img src="../assets/images/afriNewLogo.svg" alt="footerLogo" />
          </div>
          <div class="footerSocials">
            <img src="../assets/images/feather-facebook.svg" alt="footerLogo" />
            <img
              src="../assets/images/feather-instagram.svg"
              alt="footerLogo"
            />
            <img src="../assets/images/feather-twitter.svg" alt="footerLogo" />
            <img src="../assets/images/feather-linkedin.svg" alt="footerLogo" />
          </div>
        </div>
        <p class="footerText">Afriwrite {{ date }}</p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      user: this.$auth.user,
      group: "",
      date: new Date().getFullYear(),
      navItems: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "About Us",
          to: "/about-us",
        },
        {
          title: "View Freelancers",
          to: "/profile/freelancers",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  computed:{
    goToDashboard(){
      if(this.user){
        return this.user.role === 'writer' ? '/dashboard/jobfeed' : '/client/jobs'
      }else{
        return '/signin'
      }
      
    }
  }
};
</script>

<style>
.footerSocials img {
  margin: 0 10px;
  cursor: pointer;
  width: 25px;
  height: 25px;
}
.footerText {
  text-align: center;
  color: grey;
  margin-top: 10px;
}
.mainFooter {
  background-color: #263238 !important;
  padding: 10px 0;
}
.mainFooter hr {
  width: 100%;
  margin: 20px 0;
  border-color: #00e68a;
}
.navheader {
  white-space: nowrap;
  color: #787878;
}
.logoImage {
  width: 200px;
}
.px-12 {
  padding-left: 10px;
  padding-right: 10px;
}
.pad-10 {
  padding: 10px;
}
.mobileLogo {
  padding-left: 8px;
  width: 60% !important;
}
.headNav {
  background: white !important;
  padding: 0 20px;
  position: fixed !important;
  z-index: 10000 !important;
}
.mobileNavBar {
  position: fixed !important;
}
.hoverNav {
  position: fixed;
}
.headNav {
  flex: none !important;
}
.footerList li {
  list-style: none;
  padding: 5px 0;
}
.navBtn {
  padding: 20px !important;
  background-color: white !important;
  color: #00e68a !important;
  box-shadow: none !important;
}
.theItem {
  padding: 0 10px !important;
}
@media (max-width: 600px) {
  .logoImage {
    width: 50%;
  }
  .headNav {
    padding: 5px 10px;
  }
  .headNav {
    justify-content: space-between;
  }
  .footLogo img {
    width: 150px;
  }
  .footerSocials img {
    width: 20px !important;
    height: 20px !important;
  }
}
</style>