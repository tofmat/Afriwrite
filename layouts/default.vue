<template>
  <v-app>
    <v-app-bar app flat absolute height="inherit">
      <img src="../assets/images/logo.png" height="100%" class="logoImage"/>
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

    <v-navigation-drawer v-model="drawer" absolute temporary >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
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
@media(max-width: 600px){
    .logoImage {
        width: 50%;
    }
}
</style>