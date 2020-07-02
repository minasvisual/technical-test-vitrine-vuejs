<template>
  <section class="container-fluid d-flex flex-wrap p-0 mt-3">
    
    <h6 class="col-12 mt-2"> Patrocinado </h6>

    <div class="col-12 d-flex justify-content-center" v-if="isLoading">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div class="col-md-12" v-show="ofertas.length == 0 && !isLoading">
      <h4 align="center">Não há resultados para a pesquisa.</h4>
    </div>

    <div class="row">
      <div class="col-12 d-flex flex-wrap">
        <Oferta  
          v-show="(ofertas.length > 0 && !isLoading)"
          class="col-md-3 event mb-3"
          v-for="row in ofertas"
          :key="row.id"
          :product="row" >
        </Oferta>
      </div>
    </div>

  </section>
</template>
<script>
import Vue from "vue";
import moment from "moment";
import Oferta from "./oferta";

Vue.prototype.moment = moment;

export default {
  name: "Patrocinado",
  components:{
    Oferta
  },
  data: function() {
    return {
      isLoading: false,
      ofertas: [],
    };
  },
  computed:{
    config: function(){ return this.$store.state.config }
  },
  mounted: function() {
    this.getPatrocinados();
  },
  methods: {
    getPatrocinados: function(query = "") {
      var self = this;
      this.setLoad(true);

      return fetch( this.config.apiRoot + query )
        .then(data => data.json())
        .then(json => {
          self.ofertas = json;
          self.setLoad(false);
          return json;
        });
    },
    setLoad: function(load) {
      var self = this;
      this.isLoading = load || false;
      setTimeout(() => (self.isLoading = false), 15000);
    },
  }
};
</script>
