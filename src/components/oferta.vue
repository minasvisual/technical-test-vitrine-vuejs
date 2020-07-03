<template>
  <article class="event" >
        <div class="card" v-add-class-hover="'shadow'" >
            <div class="card-header text-left shadow" v-if="product.discount > 0">
              <div class="card-discount">R$ -{{ product.discount }}</div>
            </div>
            <div
              class="card-img-top"
              :style="'background: url('+product.image+') center/cover no-repeat;height:200px'"
            >
            </div>
            <div class="card-body text-left">
              <b v-text="product.title" class="card-title"></b>
              <div class="small d-block py-1"  v-if="product.discount == 0">
                R$ <span  v-text="product.value"></span>
              </div>
              <div class="small d-block py-1" v-if="product.discount > 0">
                <span style="text-decoration: line-through;">R$ {{product.value}}</span> 
                por 
                <b class="h6">R$ {{ product.value - product.discount }}</b>
              </div>
            </div>
        </div>
        <Inscricao :product="product" :type="type" />
  </article>
</template>
<script>
import Vue from "vue";
import moment from "moment";
import Inscricao from './inscricao'

Vue.prototype.moment = moment;

export default {
  name: "Oferta",
  components:{
    Inscricao
  },
  data: function() {
    return {
      isLoading: false
    };
  },
  props:{
      product:{},
      type:String
  }
}
</script>

<style scoped>
.event{
  height: 310px;
}
.event .card.shadow {
  border: 0px !important;
  transition: all 0.5s;
}
.event .card-header{
   position:absolute;
   border:none;
   padding:0px;
}
.event .card-header .card-discount{
  color:white;
  background:green;
  padding:5px 10px;
  font-size:0.8em;
  margin-top:5px;
  border-radius:0 5px 5px 0;
}
</style>
