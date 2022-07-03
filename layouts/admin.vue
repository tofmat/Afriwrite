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
      <a href="#"
        ><img
          src="../assets/images/Profil.png"
          alt="avatar"
          height="50px"
          class="dashProfilePic"
      /></a>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="pad-10 noDesktop mobileDisplay"
    >
      <a href="/"
        ><img
          src="../assets/images/afriNewLogo.png"
          class="logoImage mobileLogo"
      /></a>
      <v-list nav dense>
        <v-list-item-group active-class="navActive">
          <v-list-item
            v-for="(nav, i) in navItems"
            :key="i"
            :to="nav.to"
            router
            exact
            active-class="navActive"
          >
            <v-list-item-content>
              <v-list-item-title v-text="nav.title" />
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
            to="/admin/client-id-verification"
            router
            exact
            active-class="navActive"
          >
            <v-list-item-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.59 27.12">
                <g transform="translate(0.5 0.5)">
                  <path
                    d="M11.427,6.938V0H1.224A1.221,1.221,0,0,0,0,1.224V24.9A1.221,1.221,0,0,0,1.224,26.12H18.365A1.221,1.221,0,0,0,19.59,24.9V8.162H12.652A1.228,1.228,0,0,1,11.427,6.938Zm3.265,12.04a.614.614,0,0,1-.612.612H5.51a.614.614,0,0,1-.612-.612V18.57a.614.614,0,0,1,.612-.612H14.08a.614.614,0,0,1,.612.612Zm0-3.265a.614.614,0,0,1-.612.612H5.51a.614.614,0,0,1-.612-.612V15.3a.614.614,0,0,1,.612-.612H14.08a.614.614,0,0,1,.612.612Zm0-3.673v.408a.614.614,0,0,1-.612.612H5.51a.614.614,0,0,1-.612-.612V12.04a.614.614,0,0,1,.612-.612H14.08A.614.614,0,0,1,14.692,12.04Zm4.9-5.821V6.53H13.06V0h.311a1.223,1.223,0,0,1,.867.357l4.994,5A1.22,1.22,0,0,1,19.59,6.219Z"
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Client ID Verification</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            class="sideLinkCon"
            router
            exact
            active-class="navActive"
            @click="logoutUser()"
          >
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
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
  middleware: "admin",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      navItems: [
        {
          title: "Client ID Verification",
          to: "/admin/client-id-verification",
        },
        // {
        //   title: "Post Job",
        //   to: "/client/post",
        // },
        // {
        //   title: "Messages",
        //   to: "/",
        // },
        // {
        //   title: "Proposals",
        //   to: "/client/proposals",
        // },
        // {
        //   title: "All Contracts",
        //   to: "/client/contracts",
        // },
        // {
        //   title: "Profile",
        //   to: "/client/profile",
        // },
        // {
        //   title: "Transaction",
        //   to: "/client/transactions",
        // },
        // {
        //   title: "Reports",
        //   to: "client/reports",
        // },
        {
          title: "Logout",
          to: "/client/profile",
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
body {
  background-color: white;
}
.greenBack {
  background-color: #008952 !important;
}
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

.navheader {
  white-space: nowrap;
  color: white;
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
    height: 30px !important;
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