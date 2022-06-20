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
      <v-item-group mandatory class="noMobile">
        <div class="flex">
          <v-list-item
            router
            exact
            @click="logoutUser()"
            class="theItem"
          >
            <v-item v-slot="{ active }" class="navheader px-2">
              <v-title :class="active ? '' : ''">Logout</v-title>
            </v-item>
          </v-list-item>
        </div>
      </v-item-group>
      <!-- <img src="../assets/images/bell.svg" class="mx-5" alt="notification" /> -->
      <!-- <i class="far fa-bell fa-2x mx-5"></i> -->
      <a href="/profile"
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

          <v-col cols="auto">
            <v-dialog
              v-model="dialog"
              transition="dialog-top-transition"
              max-width="600"
            >
              <template v-slot:default="dialog">
                <v-card class="py-5">
                  <div class="centerflex columnFlex">
                    <div class="">
                      <img
                        src="../assets/images/Group154.png"
                        alt="Check Mail"
                      />
                    </div>
                    <v-card-text>
                      <h3 class="darkGreyColor textCenter">
                        Verify your Email Address to continue
                      </h3>
                      <p class="textCenter mt-2">
                        We have sent an Email to: ...xyz@gmail.com Please check
                        your email and click the link to verify your account
                      </p>
                    </v-card-text>
                  </div>
                  <div class="flex justifyCenter mobileColumn">
                    <v-btn class="findBtn mx-3 my-1" to="#">Open Email</v-btn>
                    <v-btn class="greyBtn mx-3 my-1" to="#"
                      >Resend Verification Mail</v-btn
                    >
                  </div>
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
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
      dialog: false,
      clipped: false,
      drawer: false,
      fixed: false,
      navItems: [
        // {
        //   title: "My Jobs",
        //   to: "/client/jobs",
        // },
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
      upNavItems: [
        {
          title: "Why Us",
          to: "/",
        },
        {
          title: "Browse Jobs",
          to: "/",
        },
        {
          title: "Freelancers",
          to: "/",
        },
        {
          title: "Learn",
          to: "/",
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