<template>
  <v-app>
    <app-bar></app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="light-blue darken-4">
          <strong class="subheading"> Get connected with us on social networks! </strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{icon}}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{new Date().getFullYear()}}-
          <strong>&copy;InfoTransport.ma</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
  </template>

<script>
import AppBar from "./components/AppBar.vue";
export default {
  name: "App",
  components: { 
   AppBar 
},
  data: () => ({
 icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]  }),
};
</script>

<style lang="stylus" scoped>

</style>