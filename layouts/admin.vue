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
            v-for="nav in upNavItems"
            :key="nav"
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
        <v-list-item-group v-model="group" active-class="navActive">
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
            to="/client/jobs"
            router
            exact
            active-class="navActive"
          >
            <!-- <v-item v-slot="{ active }"> -->
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.088 15.58"
                class="anana"
              >
                <g transform="translate(1 1)">
                  <path
                    d="M4.509,10.5H16.58a1.509,1.509,0,0,1,1.509,1.509v7.544a1.509,1.509,0,0,1-1.509,1.509H4.509A1.509,1.509,0,0,1,3,19.553V12.009A1.509,1.509,0,0,1,4.509,10.5Z"
                    transform="translate(-3 -7.482)"
                  />
                  <path
                    class="a"
                    d="M18.035,18.08V6.009A1.509,1.509,0,0,0,16.527,4.5H13.509A1.509,1.509,0,0,0,12,6.009V18.08"
                    transform="translate(-7.473 -4.5)"
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-title>My Jobs</v-list-item-title>
            <!-- </v-item> -->
          </v-list-item>
          <v-list-item
            link
            class="sideLinkCon"
            to="/client/post"
            router
            exact
            active-class="navActive"
          >
            <v-list-item-icon class="iconSpace">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17.088 21.399"
              >
                <g transform="translate(1 1)">
                  <path
                    d="M22.588,23.9l-7.544-5.389L7.5,23.9V6.655A2.155,2.155,0,0,1,9.655,4.5H20.433a2.155,2.155,0,0,1,2.155,2.155Z"
                    transform="translate(-7.5 -4.5)"
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Post Job</v-list-item-title>
          </v-list-item>
          <v-list-item link class="sideLinkCon">
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23.616 24.323"
              >
                <path
                  d="M23.354,3H5.262a2.258,2.258,0,0,0-2.25,2.262L3,25.615l4.523-4.523H23.354a2.268,2.268,0,0,0,2.262-2.262V5.262A2.268,2.268,0,0,0,23.354,3ZM21.092,16.569H7.523v-1.7H21.092Zm0-3.392H7.523V11.51H21.092Zm0-3.18H7.523V8.523H21.092Z"
                  transform="translate(-2.499 -2.5)"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Messages</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            class="sideLinkCon"
            to="/client/proposals"
            router
            exact
            active-class="navActive"
          >
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19.59 20.989"
              >
                <path
                  d="M17.092,10.324h-7v1.4h7Zm-4.2-2.8H10.1v1.4h2.8Zm8.4-.6v-2.2H18.211l-3.918-2.8-3.918,2.8H7.3v2.2l-2.8,2V22.917h19.59V8.924l-2.8-2ZM8.7,6.126H19.891v5.352l-5.6,4.617L8.7,11.478V6.126Zm-2.8,5.6,5.51,4.19L5.9,20.119v-8.4Zm1.4,9.795,5.553-4.509,1.443,1.1,1.44-1.1,5.556,4.507H7.3Zm15.392-1.4-5.518-4.2,5.518-4.2v8.4Z"
                  transform="translate(-4.499 -1.928)"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Proposals</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            class="sideLinkCon"
            to="/client/contracts"
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
            <v-list-item-title>All Contracts</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            class="sideLinkCon"
            to="/client/profile"
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
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            class="sideLinkCon"
            to="/client/transactions"
            router
            exact
            active-class="navActive"
          >
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15.673 26.076"
              >
                <g transform="translate(1.056 1)">
                  <path
                    d="M16.81,15.067c-3.036-.789-4.013-1.605-4.013-2.876,0-1.458,1.351-2.474,3.611-2.474,2.381,0,3.264,1.137,3.344,2.809h2.956a5.332,5.332,0,0,0-4.294-5.1V4.5H14.4V7.389c-2.595.562-4.681,2.247-4.681,4.829,0,3.09,2.555,4.628,6.287,5.524,3.344.8,4.013,1.98,4.013,3.224,0,.923-.655,2.394-3.611,2.394-2.755,0-3.839-1.231-3.986-2.809H9.48c.161,2.929,2.354,4.574,4.922,5.123v2.9h4.013V25.7c2.608-.495,4.681-2.006,4.681-4.748C23.1,17.153,19.846,15.856,16.81,15.067Z"
                    transform="translate(-9.48 -4.5)"
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Transactions</v-list-item-title>
          </v-list-item>
          <!-- <v-list-item
            link
            class="sideLinkCon"
            to="reports"
            router
            exact
            active-class="navActive"
          >
            <v-list-item-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21.123 21.117"
              >
                <g transform="translate(1.007 1)">
                  <path
                    d="M21.36,16.727A9.558,9.558,0,1,1,8.734,4.245"
                    transform="translate(-2.999 -3.452)"
                  />
                  <path
                    class="a"
                    d="M27.558,12.558A9.558,9.558,0,0,0,18,3v9.558Z"
                    transform="translate(-8.441 -3)"
                  />
                </g>
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Reports</v-list-item-title>
          </v-list-item> -->
          <v-list-item
            link
            class="sideLinkCon"
            router
            exact
            active-class="navActive"
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
        {
          title: "My Jobs",
          to: "client/jobs",
        },
        {
          title: "Post Job",
          to: "client/post",
        },
        {
          title: "Messages",
          to: "/",
        },
        {
          title: "Proposals",
          to: "client/proposals",
        },
        {
          title: "All Contracts",
          to: "client/contracts",
        },
        {
          title: "Profile",
          to: "client/profile",
        },
        {
          title: "Transaction",
          to: "client/transactions",
        },
        // {
        //   title: "Reports",
        //   to: "client/reports",
        // },
        {
          title: "Logout",
          to: "client/profile",
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