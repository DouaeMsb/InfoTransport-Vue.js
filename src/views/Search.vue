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

      <v-tab-item>
        <v-card>
          <v-tabs vertical>
            <v-tab>
              <v-icon left>
                mdi-map-marker
              </v-icon>
              Bus Map
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-book
              </v-icon>
              Bus informations
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-image
              </v-icon>
              Bus Images
            </v-tab>
        
            <v-tab-item>
              <v-card flat>
                <img src="/images/Casa_bus_map.jpg" width="100%">
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <div>
                <div class="text-center d-flex pb-4">
                    <div>{{ panel }}</div>
                    <v-btn @click="none">
                     none
                    </v-btn>
                </div>

                <v-expansion-panels
                    v-model="panel"
                    multiple
                >
                  <v-expansion-panel v-for="information in getInformations" :key="information.id">
                    <v-expansion-panel-header class="light-blue darken-4 white--text">{{information.bus_Number}}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <table class="steelBlueCols">
                        <tbody>
                        <tr>
                          <td>price</td>
                          <td>{{information.price}}</td>
                        </tr>
                        <tr>
                          <td>currency</td>
                          <td>{{information.currency}}</td>
                        </tr>
                        <tr>
                          <td>the starting station</td>
                          <td>{{information.the_starting_station}}</td>
                        </tr>
                        <tr>
                          <td>the arrival station</td>
                          <td>{{information.the_arrival_station}}</td>
                        </tr>
                        <tr>
                          <td>duration in hours</td>
                          <td>{{information.duration_in_hours}}</td>
                        </tr>
                        </tbody>
                      </table>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
              
        
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: `Search`,
  data() {
    return {
      tabs: null,
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      panel: [],
      items: 5,
    }
  },
  methods: {
    // Create an array the length of our items
    // with all values as true
    // Reset the panel
    none() {
      this.panel = []
    },
  },
};
</script>


<style scoped>
table.steelBlueCols {
  border: 4px solid #555555;
  background-color: #555555;
  width: 400px;
  text-align: center;
  border-collapse: collapse;
}
table.steelBlueCols td, table.steelBlueCols th {
  border: 1px solid #555555;
  padding: 5px 10px;
}
table.steelBlueCols tbody td {
  font-size: 12px;
  font-weight: bold;
  color: #FFFFFF;
}
table.steelBlueCols td:nth-child(even) {
  background: #398AA4;
}
table.steelBlueCols tfoot td {
  font-size: 13px;
}
table.steelBlueCols tfoot .links {
  text-align: right;
}
table.steelBlueCols tfoot .links a{
  display: inline-block;
  background: #FFFFFF;
  color: #398AA4;
  padding: 2px 8px;
  border-radius: 5px;
}
</style>
