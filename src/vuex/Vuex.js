import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  debug: true,
  state: {
    config: {
      apiPatrocinado: "https://api-json.sandboxappmax.com.br/",
      apiRoot: "http://localhost:3000/",
      analyticsCode: ""
    },
    event: {},
    user: {},
    alert: {}
  },
  mutations: {
    
  },
  getters: {
    
  },
  actions: {
    sendView: function({ state }, url) {
      if (url && window.ga) {
        window.ga("create", state.config.analyticsCode, "auto");
        window.ga("send", {
          hitType: "pageview",
          page: url
        });
      }
    }
  }
});

export { store };
