<template>
  <v-app>
    <v-app-bar
      light
      flat
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      height="inherit"
      class="headNav greenBack"
      absolute
    >
      <a href="/"
        ><img src="../assets/images/afriNewLogo.png" class="logoImage noMobile"
      /></a>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="noDesktop mobileDisplay mobileNavBar"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <a href="/dashboard/profile"
        >
        <div class="profileImage2">
          <img
            src="../assets/images/emptyUser.png"
            alt="ProfilePic"
            class="dashProfilePic"
          /></div
      ></a>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="pad-10 noDesktop mobileDisplay sideDrawer"
    >
      <a href="/"
        ><img
          src="../assets/images/afriNewLogo.png"
          class="logoImage mobileLogo"
      /></a>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="navActive">
          <v-list-item
            to="/signin"
            router
            exact
            active-class="navActive"
          >
            <v-list-item-content>
              <v-list-item-title>Sign In</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div class="dashNav">
      <v-navigation-drawer
        permanent
        expand-on-hover
        absolute
        class="noMobile hoverNav"
        fixed
      >
        <v-list nav dense class="openNavFull">
          <v-list-item
            link
            class="sideLinkCon"
            to="/signin"
            router
            exact
            active-class="navActive"
          >
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25.871 28.729"
              >
                <g transform="translate(1.5 1.5)">
                  <path
                    d="M28.871,31.076V28.218A5.718,5.718,0,0,0,23.153,22.5H11.718A5.718,5.718,0,0,0,6,28.218v2.859"
                    transform="translate(-6 -5.347)"
                  />
                  <path
                    class="a"
                    d="M23.435,10.218A5.718,5.718,0,1,1,17.718,4.5,5.718,5.718,0,0,1,23.435,10.218Z"
                    transform="translate(-6.282 -4.5)"
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Sign In</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-sheet id="scrolling-techniques-7" class="overflow-y-auto">
      <v-main class="dashContent">
        <div class="dashRealContent">
          <nuxt />
        </div>
      </v-main>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      clipped: false,
      drawer: false,
      fixed: false,
      group: "",
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Afriwrites",
    };
  },
  methods: {
  },
};
</script>

<style>
/* body {
  background-color: white;
} */

.greenBack .v-toolbar__content {
  background: #008952 !important;
}
/* 008952 */
.sideLinkCon {
  margin: 7px 0;
  display: flex !important;
  justify-content: center !important;
}
.svgNav {
  fill: blue !important;
}
.dashRealContent {
  margin-top: 120px;
}
.hoverNav {
  margin-top: 89px;
  border-right: solid 1px #f9f9f9;
}
.dashNav .v-navigation-drawer__border {
  display: none;
}

.logoImage {
  width: 200px;
}
.px-12 {
  padding-left: 10px;
  padding-right: 10px;
}
.profileImage2 {
  padding: 5px 7px;
  width: fit-content;
  border: 1px solid rgba(0, 137, 82, 0.2);
  border-radius: 50%;
}
.profileImage2 img {
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
}
.pad-10 {
  padding: 10px;
}
.dashContent {
  background-color: white;
}
.mobileLogo {
  padding-left: 8px;
  width: 60% !important;
}
.headNav {
  padding: 0 20px;
}
.headNav {
  flex: none !important;
}
.navBtn {
  padding: 20px !important;
  background-color: white !important;
  color: #008952 !important;
  box-shadow: none !important;
}
.sideDrawer {
  position: fixed;
}
.openNavFull {
  position: static;
  overflow: scroll;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sideLinkCon svg {
  width: 25px;
  height: 25px;
  fill: none;
  stroke: #8b8b8b;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1px;
}

.v-list-item--active svg {
  stroke: #008952 !important;
}

@media (max-width: 600px) {
  .logoImage {
    width: 60%;
  }
  .headNav {
    padding: 5px 10px;
  }
  .dashProfilePic {
    background: white;
  }
  .dashRealContent {
    margin-top: 60px;
  }
}
@media (max-width: 500px) {
  .dashRealContent {
    margin-top: 70px;
  }
}
@media (max-width: 900px) {
  .dashRealContent {
    margin-top: 90px;
    margin-bottom: 50px;
  }
}
</style>