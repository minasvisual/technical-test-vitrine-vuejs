<template>
<article>
        <div
        class="card"
        style="border-top:1px solid #ccc"
        v-add-class-hover="'shadow'"
        >
            <div
              class="card-img-top"
              :style="'background: url('+product.image+') center/cover no-repeat;height:200px'"
            >
            </div>
            <div class="card-body">
              <b v-text="product.title" class="card-title"></b>
              <div class="small d-block py-1">
                <i class="fa fa-calendar-alt mr-2"></i>
                <small v-once>{{ product.description }}</small>
              </div>
              <div class="small d-block py-1 float-left">
                <i class="fa fa-location-arrow mr-2"></i>
                <span  v-text="product.value"></span>
              </div>
              <div class="small d-block py-1 float-right">
                <i class="fa fa-map-marker-alt mr-2"></i>
                <span  v-text="product.discount"></span>
              </div>
            </div>
        </div>
        <div class="btn-group mr-2 shadow" role="group" aria-label="Second group">
            <button type="button" class="btn btn-outline-secondary" @click="showEvent(product)">
                <i class="fa fa-eye"></i>
            </button>
            <button type="button" class="btn btn-outline-secondary" >
                <i class="fa fa-share-alt"></i>
            </button>
            <button type="button" class="btn btn-outline-secondary">
                <i class="fa fa-heart"></i>
            </button>
        </div>
  </article>
</template>
<script>
import Vue from "vue";
import moment from "moment";

Vue.prototype.moment = moment;

export default {
  name: "Oferta",
  data: function() {
    return {
      isLoading: false
    };
  },
  props:{
      product:{}
  }
}
</script>

<style scoped>
.event .card.shadow {
  border: 0px !important;
  transition: all 0.5s;
}
.event .btn-group {
  margin-top: -20px;
  background: #fff;
}
.event .btn-group .btn {
  border: 0px;
  padding: 3px 10px;
}
</style>
