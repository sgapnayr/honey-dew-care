// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/amplify.js", mode: "client" }],
})
