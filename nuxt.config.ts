// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'RAMADA',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'httpshttps://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  plugins: [],
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'http://localhost:1337'
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:1337/graphql'
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo']
})
