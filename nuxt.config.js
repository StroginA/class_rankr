export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ClassRankR',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'modern-normalize',
    '@/assets/scss/main.scss',
    '@/assets/scss/_vars.scss',
    '@/assets/fonts/russel_write_tt.css',
    '@/assets/fonts/magic_frankie.css',
    '@/assets/fonts/it_encore_sans.css'
  ],
  styleResources: {
    scss: ['~/assets/scss/*.scss']  
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
  },
  privateRuntimeConfig: {
    dbUrl: process.env.DB_URL || 'https://db.failed',
    dbPassword: process.env.DB_PASSWORD || 'password_failed'
  },
  serverMiddleware: ['~/server-middleware/index.ts'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null
  },
}
