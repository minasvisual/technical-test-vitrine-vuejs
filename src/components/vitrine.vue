<template>
  <section class="container-fluid d-flex flex-wrap p-0 mt-3">
    
    <h6 class="col-12 mt-2 text-left border-bottom "> Patrocinado </h6>
    <div class="col-12 d-flex flex-wrap">
      <Oferta  
        v-show="(patrocinado.length > 0 && !isLoading)"
        class="col-12 col-sm-4 col-lg-2 mb-3"
        v-for="row in patrocinado"
        :key="row.id"
        :product="row"
        type="patrocinado" >
      </Oferta>
    </div>

    <h6 class="col-12 mt-2 text-left border-bottom"> Ofertas </h6>
    <div class="col-12 d-flex justify-content-center" v-if="isLoading">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div class="col-md-12" v-show="ofertas.length == 0 && !isLoading">
      <h4 align="center">Não há resultados para a pesquisa.</h4>
    </div>

    <div class="col-12 d-flex flex-wrap">
      <Oferta  
        v-show="(ofertas.length > 0 && !isLoading)"
        class="col-12 col-sm-4 col-lg-2 mb-3"
        v-for="row in lazyload"
        :key="row.id"
        :product="row"
        type="oferta" >
      </Oferta>
    </div>

  </section>
</template>
<script>
import Vue from "vue";
import moment from "moment";
import Oferta from "./oferta";

Vue.prototype.moment = moment;

export default {
  name: "Vitrine",
  components:{
    Oferta
  },
  data: function() {
    return {
      isLoading: false,
      patrocinado: [],
      ofertas: [],
      lazyload: [],
      loadCount: 0,
      loadTotal: 0,
      perLoad:6
    };
  },
  computed:{
    config: function(){ return this.$store.state.config }
  },
  mounted: function() {
    this.getPatrocinados().then(this.getOfertas);

    window.onscroll = this.loadMore
  },
  methods: {
    getPatrocinados: function() {
      var self = this;
      this.setLoad(true);

      return fetch( this.config.apiPatrocinado )
        .then(data => data.json())
        .then(json => {
          self.patrocinado = json;
          self.setLoad(false);
          return json;
        });
    }, 
    getOfertas: function() {
      var self = this;
      //var pages = [];
      this.setLoad(true);

      return fetch( this.config.apiRoot + 'ofertas')
        .then(data => data.json())
        .then(json => {
          self.ofertas = [ ...self.ofertas, ...json];
          self.setLoad(false);
          self.loadTotal = self.ofertas.length
          this.loadMore()
          return json;
        });
    },
    loadMore(){
      if( this.loadTotal < this.loadCount )return;
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        let news = this.ofertas.slice(this.loadCount, this.loadCount+this.perLoad);
        this.lazyload = [ ...this.lazyload, ...news]
        this.loadCount = this.loadCount+this.perLoad;
      }
    },
    setLoad: function(load) {
      var self = this;
      this.isLoading = load || false;
      setTimeout(() => (self.isLoading = false), 15000);
    },
  }
};
</script>
