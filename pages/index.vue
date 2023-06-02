<script setup lang="ts">
import { ref } from "vue"
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-vue"
import { Auth } from "aws-amplify"
import "@aws-amplify/ui-vue/styles.css"

const auth = useAuthenticator()

const username = ref<string>()
const password = ref()
const email = ref()
const phone_number = ref()

async function signUp() {
  console.log("CLICK")
  try {
    const { user } = await Auth.signUp({
      username: username as string | any,
      password: password as string | any,
      attributes: {
        email, // optional
        phone_number, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    })
    console.log(user)
  } catch (error) {
    console.log("error signing up:", error)
  }
}
</script>
<template>
  {{ Auth }}

  <input type="text" v-model="username" />
  <input type="text" v-model="password" />
  <button @click="signUp">Sign Up</button>
</template>
