import colors from "vuetify/es5/util/colors";

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s - afriwrites",
    title: "afriwrites",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/4973419b71.js",
        crossorigin: "anonymous"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["./assets/styles/responsive.css", "./assets/styles/default.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/axios",
    '~/plugins/mixins',
    '~/plugins/star-rating',
    '~/plugins/filters.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios", 
    "@nuxtjs/auth-next", 
    "@nuxtjs/toast", 
    "@nuxtjs/sentry"
  ],

  sentry: {
    dsn: 'https://15a0818515a842308d24875d4c72ca34@o344693.ingest.sentry.io/6517812', // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },

  toast: {
    position: "top-right",
    duration: 3000,
    keepOnHover: true,
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error"
        }
      }
    ]
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    theme: {
      // dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  axios: {
    baseURL: "https://afriwrites-backend-api.herokuapp.com/api"
    // baseURL: 'http://127.0.0.1:8000/api',
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "data.token",
          global: true
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: "data",
          autoFetch: true
        },
        endpoints: {
          login: {
            url: "/v1/auth/login",
            method: "post",
            propertyName: "data.token"
          },
          logout: { url: "/v1/auth/logout", method: "get" },
          user: { url: "/user", method: "get", propertyName: "data" }
        }
        // tokenRequired: true,
        // tokenType: 'Bearer',
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  },

  // for netlify giving 404 page
  generate: {
    fallback: true
  }
};
