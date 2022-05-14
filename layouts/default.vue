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
        ><img src="../assets/images/afriNewLogo.png" class="logoImage"
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
            <v-item v-slot="{ active }" class="navheader px-2">
              <v-title :class="active ? '' : ''">{{ nav.title }}</v-title>
            </v-item>
          </v-list-item>
        </div>
      </v-item-group>
      <v-btn class="px-5 noMobile navBtn" to="jobfeed"> Join Now</v-btn>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="noDesktop mobileDisplay mobileNavBar"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="pad-10 noDesktop mobileDisplay"
    >
      <img
        src="../assets/images/afriNewLogo.png"
        class="logoImage mobileLogo"
      />
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="navActive">
          <v-list-item
            v-for="(nav, i) in navItems"
            :key="i"
            :to="nav.to"
            router
            exact
          >
            <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> -->
            <v-list-item-content>
              <v-list-item-title v-text="nav.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>

    <v-footer dark class="mainFooter">
      <v-container>
        <v-row>
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
                <li>Support</li>
                <li>Why Afriwrite</li>
                <li>Work with us</li>
                <li>Help & Support</li>
                <li>Trust & Safety</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="6" sm="3">
            <div class="footerList">
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Press & News</li>
                <li>Partnerships</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Intellectual Property Claims</li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="6" sm="3">
            <div class="footerList">
              <ul>
                <li>Community</li>
                <li>Events</li>
                <li>Blog</li>
                <li>Forums</li>
                <li>Community Standards</li>
                <li>Podcasts</li>
                <li>Affiliates</li>
                <li>Invite a Friend</li>
              </ul>
            </div>
          </v-col>
        </v-row>
        <hr />
        <div class="flex justifyBetween alignCenter">
          <div class="footLogo">
            <img src="../assets/images/footerLogo.svg" alt="footerLogo" />
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
      navItems: [
        {
          title: "Why Afriwrites",
          to: "/",
        },
        {
          title: "Browse Jobs",
          to: "/browse",
        },
        {
          title: "View Freelancers",
          to: "/view",
        },
        {
          title: "Blog",
          to: "/blog",
        },
        {
          title: "Sign In",
          to: "signin",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style>
.footerSocials img {
  margin: 0 5px;
}
.mainFooter {
  background-color: #263238 !important;
  padding: 30px 0;
}
.mainFooter hr {
  width: 100%;
  margin: 20px 0;
  border-color: #00e68a;
}
.navheader {
  white-space: nowrap;
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
  background-color: #008952 !important;
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
  .footLogo img {
    width: 100px;
  }
}
</style>