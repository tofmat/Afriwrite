<template>
  <v-app>
    <v-app-bar flat fixed height="inherit" class="headNav" style="position: relative;">
      <img src="../assets/images/logo.png" class="logoImage"/>
      <v-spacer></v-spacer>
      <v-item-group mandatory class="noMobile">
        <v-container>
          <v-row>
            <v-col
              v-for="nav in navItems"
              :key="nav"
              class="navheader px-5"
            >
              <v-item v-slot="{ active }">
                <v-title :color="active ? 'primary' : ''">{{nav.title}}</v-title>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-btn class="px-5 noMobile">Join Now</v-btn>
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
    <v-main>
        <nuxt />
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
          title: 'Blog',
          to: '/'
        },
        {
          title: 'Sign In',
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
@media(max-width: 600px){
    .logoImage {
        width: 50%;
    }
    .headNav{
      padding: 5px 10px;
    }
}
</style>