<template>
  <v-card>
    <v-toolbar color="#003B6D" dark flat>
      <v-text-field
          append-icon="mdi-microphone"
          class="mx-4"
          flat
          hide-details
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
      ></v-text-field>

      <template v-slot:extension>
        <v-tabs v-model="tabs" centered>
          <v-tab> Adress</v-tab>
          <v-tab> Information</v-tab>
          <v-tab> Contact us!</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card
              class="pa-4"
              flat
              height="700px"
              img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
          >
            <v-toolbar
                dense
            >
              <v-text-field
                  hide-details
                  prepend-icon="mdi-magnify"
                  single-line
              ></v-text-field>

              <v-btn icon>
                <v-icon>mdi-crosshairs-gps</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
          </v-card>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        model: 'tab-2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
