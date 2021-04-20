<template>
  <v-app>
    <v-app-bar flat fixed height="inherit" class="headNav" style="position: relative;" color="white">
        <v-app-bar-nav-icon @click="drawer = true" class="noDesktop mobileDisplay"></v-app-bar-nav-icon>
      <img src="../assets/images/logo.png" class="logoImage noMobile"/>
      <v-spacer></v-spacer>
      <v-item-group mandatory class="noMobile">
        <v-container>
          <v-row>
            <v-col
              v-for="nav in navItems"
              :key="nav"
              :to="nav.to"
              class="navheader px-5"
            >
              <v-item v-slot="{ active }">
                <v-title :color="active ? 'primary' : ''">{{nav.title}}</v-title>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-btn class="px-5 noMobile navBtn">Join Now</v-btn>
      
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="pad-10 noDesktop mobileDisplay">
       <img src="../assets/images/logo.png" class="logoImage mobileLogo"/>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
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
            >
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>My Files</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Shared with me</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Starred</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>

    <v-main class="dashContent">
        <div class="dashMainContent">
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
.hoverNav{
    margin-top: 78px;
    border: none;
}
.dashNav .v-navigation-drawer__border {
    display: none;
}
.dashMainContent{
    margin: 50px 90px;
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
@media(max-width: 600px){
    .logoImage {
        width: 50%;
    }
    .headNav{
      padding: 5px 10px;
    }
}
</style>