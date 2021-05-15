import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    getInformations: state => state.informations,
      getInformation: state => id => state.informations.find(information => information.id ===id)
  },

  state: {
    informations:[
      {
        id:1,
        bus_Number: 68,
        price: 6,
        currency: "MAD",
        the_starting_station: "Lahraouiene",
        the_arrival_station: "Al Walfa",
        duration_in_hours: 1.5,
      },
      {
        id:2,
        bus_Number: 55,
        price: 6,
        currency: "MAD",
        the_starting_station: "Lahraouiene",
        the_arrival_station: "Hassan II Mosque",
        duration_in_hours: 1,
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins:[(createPersistedState())]
});

