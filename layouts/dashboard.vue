<template>
  <v-app>
    <v-app-bar flat fixed height="inherit" class="headNav" style="position: relative;">
      <a href="/"><img src="../assets/images/logo.png" class="logoImage"/></a>
      <v-spacer></v-spacer>
      <v-item-group mandatory class="noMobile">
        <div class="flex">
            <v-list-item 
              v-for="nav in navItems"
              :key="nav"
              :to="nav.to"
              router
              exact
              class="theItem"
              >
                <v-item v-slot="{ active }" class="navheader px-2">
                  <v-title :class="active ? 'navActive' : ''">{{nav.title}}</v-title>
                </v-item>
            </v-list-item>
        </div>
      </v-item-group>
      <v-btn class="px-5 noMobile navBtn">Join Now</v-btn>
      <v-app-bar-nav-icon @click="drawer = true" class="noDesktop mobileDisplay"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="pad-10 noDesktop mobileDisplay">
       <img src="../assets/images/logo.png" class="logoImage mobileLogo"/>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="navActive"
        >
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
 
    <div class="dashNav">
        <v-navigation-drawer permanent expand-on-hover absolute class="noMobile hoverNav" fixed>
            <v-list
            nav
            dense
            class="openNavFull"
            >
                <v-list-item link class="sideLinkCon">
                    <v-list-item-icon>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.088 15.58"><g transform="translate(1 1)"><path d="M4.509,10.5H16.58a1.509,1.509,0,0,1,1.509,1.509v7.544a1.509,1.509,0,0,1-1.509,1.509H4.509A1.509,1.509,0,0,1,3,19.553V12.009A1.509,1.509,0,0,1,4.509,10.5Z" transform="translate(-3 -7.482)"/><path class="a" d="M18.035,18.08V6.009A1.509,1.509,0,0,0,16.527,4.5H13.509A1.509,1.509,0,0,0,12,6.009V18.08" transform="translate(-7.473 -4.5)"/></g></svg>
                    </v-list-item-icon>
                    <v-list-item-title>My Job Feed</v-list-item-title>
                </v-list-item>
                <v-list-item link class="sideLinkCon">
                    <v-list-item-icon class="iconSpace">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.088 21.399"><g transform="translate(1 1)"><path d="M22.588,23.9l-7.544-5.389L7.5,23.9V6.655A2.155,2.155,0,0,1,9.655,4.5H20.433a2.155,2.155,0,0,1,2.155,2.155Z" transform="translate(-7.5 -4.5)"/></g></svg>
                    </v-list-item-icon>
                    <v-list-item-title>Saved Jobs</v-list-item-title>
                </v-list-item>
                <v-list-item link class="sideLinkCon">
                    <v-list-item-icon>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 23.616 24.323"><path d="M23.354,3H5.262a2.258,2.258,0,0,0-2.25,2.262L3,25.615l4.523-4.523H23.354a2.268,2.268,0,0,0,2.262-2.262V5.262A2.268,2.268,0,0,0,23.354,3ZM21.092,16.569H7.523v-1.7H21.092Zm0-3.392H7.523V11.51H21.092Zm0-3.18H7.523V8.523H21.092Z" transform="translate(-2.499 -2.5)"/></svg>
                    </v-list-item-icon>
                    <v-list-item-title>Messages</v-list-item-title>
                </v-list-item>
                <v-list-item link class="sideLinkCon">
                    <v-list-item-icon>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.59 20.989"><path d="M17.092,10.324h-7v1.4h7Zm-4.2-2.8H10.1v1.4h2.8Zm8.4-.6v-2.2H18.211l-3.918-2.8-3.918,2.8H7.3v2.2l-2.8,2V22.917h19.59V8.924l-2.8-2ZM8.7,6.126H19.891v5.352l-5.6,4.617L8.7,11.478V6.126Zm-2.8,5.6,5.51,4.19L5.9,20.119v-8.4Zm1.4,9.795,5.553-4.509,1.443,1.1,1.44-1.1,5.556,4.507H7.3Zm15.392-1.4-5.518-4.2,5.518-4.2v8.4Z" transform="translate(-4.499 -1.928)"/></svg>
                    </v-list-item-icon>
                    <v-list-item-title>Proposals</v-list-item-title>
                </v-list-item>
                <v-list-item link class="sideLinkCon">
                    <v-list-item-icon>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.59 27.12"><g transform="translate(0.5 0.5)"><path d="M11.427,6.938V0H1.224A1.221,1.221,0,0,0,0,1.224V24.9A1.221,1.221,0,0,0,1.224,26.12H18.365A1.221,1.221,0,0,0,19.59,24.9V8.162H12.652A1.228,1.228,0,0,1,11.427,6.938Zm3.265,12.04a.614.614,0,0,1-.612.612H5.51a.614.614,0,0,1-.612-.612V18.57a.614.614,0,0,1,.612-.612H14.08a.614.614,0,0,1,.612.612Zm0-3.265a.614.614,0,0,1-.612.612H5.51a.614.614,0,0,1-.612-.612V15.3a.614.614,0,0,1,.612-.612H14.08a.614.614,0,0,1,.612.612Zm0-3.673v.408a.614.614,0,0,1-.612.612H5.51a.614.614,0,0,1-.612-.612V12.04a.614.614,0,0,1,.612-.612H14.08A.614.614,0,0,1,14.692,12.04Zm4.9-5.821V6.53H13.06V0h.311a1.223,1.223,0,0,1,.867.357l4.994,5A1.22,1.22,0,0,1,19.59,6.219Z"/></g></svg>
                    </v-list-item-icon>
                    <v-list-item-title>All Contracts</v-list-item-title>
                </v-list-item>
                <v-list-item link class="sideLinkCon">
                    <v-list-item-icon>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25.871 28.729"><g transform="translate(1.5 1.5)"><path d="M28.871,31.076V28.218A5.718,5.718,0,0,0,23.153,22.5H11.718A5.718,5.718,0,0,0,6,28.218v2.859" transform="translate(-6 -5.347)"/><path class="a" d="M23.435,10.218A5.718,5.718,0,1,1,17.718,4.5,5.718,5.718,0,0,1,23.435,10.218Z" transform="translate(-6.282 -4.5)"/></g></svg>
                    </v-list-item-icon>
                    <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-list-item link class="sideLinkCon">
                    <v-list-item-icon>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.673 26.076"><g transform="translate(1.056 1)"><path d="M16.81,15.067c-3.036-.789-4.013-1.605-4.013-2.876,0-1.458,1.351-2.474,3.611-2.474,2.381,0,3.264,1.137,3.344,2.809h2.956a5.332,5.332,0,0,0-4.294-5.1V4.5H14.4V7.389c-2.595.562-4.681,2.247-4.681,4.829,0,3.09,2.555,4.628,6.287,5.524,3.344.8,4.013,1.98,4.013,3.224,0,.923-.655,2.394-3.611,2.394-2.755,0-3.839-1.231-3.986-2.809H9.48c.161,2.929,2.354,4.574,4.922,5.123v2.9h4.013V25.7c2.608-.495,4.681-2.006,4.681-4.748C23.1,17.153,19.846,15.856,16.81,15.067Z" transform="translate(-9.48 -4.5)"/></g></svg>
                    </v-list-item-icon>
                    <v-list-item-title>Transactions</v-list-item-title>
                </v-list-item>
                <v-list-item link class="sideLinkCon">
                    <v-list-item-icon>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21.123 21.117"><g transform="translate(1.007 1)"><path d="M21.36,16.727A9.558,9.558,0,1,1,8.734,4.245" transform="translate(-2.999 -3.452)"/><path class="a" d="M27.558,12.558A9.558,9.558,0,0,0,18,3v9.558Z" transform="translate(-8.441 -3)"/></g></svg>
                    </v-list-item-icon>
                    <v-list-item-title>Reports</v-list-item-title>
                </v-list-item>
                <v-list-item link class="sideLinkCon">
                    <v-list-item-icon>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.388 25.388"><g transform="translate(1 1)"><path d="M19.879,16.689A3.189,3.189,0,1,1,16.689,13.5,3.189,3.189,0,0,1,19.879,16.689Z" transform="translate(-4.995 -4.995)"/><path class="a" d="M21.061,16.383a1.754,1.754,0,0,0,.351,1.935l.064.064a2.127,2.127,0,1,1-3.009,3.009l-.064-.064a1.768,1.768,0,0,0-3,1.254v.181a2.126,2.126,0,1,1-4.252,0v-.1A1.754,1.754,0,0,0,10,21.061a1.754,1.754,0,0,0-1.935.351l-.064.064A2.127,2.127,0,1,1,5,18.467l.064-.064a1.768,1.768,0,0,0-1.254-3H3.626a2.126,2.126,0,1,1,0-4.252h.1A1.754,1.754,0,0,0,5.327,10,1.754,1.754,0,0,0,4.976,8.07l-.064-.064A2.127,2.127,0,1,1,7.921,5l.064.064a1.754,1.754,0,0,0,1.935.351H10a1.754,1.754,0,0,0,1.063-1.605V3.626a2.126,2.126,0,1,1,4.252,0v.1a1.768,1.768,0,0,0,3,1.254l.064-.064a2.127,2.127,0,1,1,3.009,3.009l-.064.064a1.754,1.754,0,0,0-.351,1.935V10a1.754,1.754,0,0,0,1.605,1.063h.181a2.126,2.126,0,1,1,0,4.252h-.1a1.754,1.754,0,0,0-1.605,1.063Z" transform="translate(-1.5 -1.5)"/></g></svg>
                    </v-list-item-icon>
                    <v-list-item-title>Settings</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>

    <v-main class="dashContent">
        <div class="">
            <nuxt />
        </div>
    </v-main>
        
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      navItems: [
        {
          title: 'Why Afriwrites',
          to: '/'
        },
        {
          title: 'Browse Jobs',
          to: '/'
        },
        {
          title: 'View Freelancers',
          to: '/'
        },
        {
          title: 'Learn',
          to: '/'
        }
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
body {
   background-color: #F6F6F6; 
}
.sideLinkCon{
  margin: 7px 0;
  display: flex !important;
  justify-content: center !important;
}
.svgNav{
  fill: blue !important;
}
.hoverNav{
    margin-top: 78px;
    border: none;
}
.dashNav .v-navigation-drawer__border {
    display: none;
}

.navheader{
  white-space: nowrap;
}
.logoImage{
  width: 200px;
}
.px-12 {
  padding-left: 10px;
  padding-right: 10px;
}
.pad-10 {
  padding: 10px;
}
.dashContent{
    background-color: #F6F6F6;
}
.mobileLogo {
  padding-left: 8px;
  width: 60% !important;
}
.headNav{
  padding: 0 20px;
}
.headNav {
  flex: none !important;
}
.navBtn {
  padding: 20px !important;
  background-color: white !important;
  color: #00E68A !important;
  box-shadow: none !important;
}
.openNavFull{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sideLinkCon svg {
  width: 25px;
  height: 25px;
  fill:none;
  stroke:#8B8B8B;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-width:1px;
}
@media(max-width: 600px){
    .logoImage {
        width: 50%;
    }
    .headNav{
      padding: 5px 10px;
    }
}
</style>