<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">
        <img src="/assets/images/nome-nightfy.png" alt style="height: 23px;">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleBtn = !toggleBtn"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse" :style="{'display': toggleBtn ?'block':'none'}">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <div class="form-row col-12 col-sm-auto">
            <button
              class="btn btn btn-sm btn-outline-light"
              type="button"
            >Buscar</button> 
          </div>
        </form>
      </div>
    </nav>

    <div
      class="alert"
      v-if="alert && alert.message"
      v-text="alert.message"
      :class="{ [alert.status]: (alert && alert.status), 'alert-success': (!alert.status) }"
    ></div>
  </header>
</template>

<script>
import Vue from "vue";
import moment from "moment";

Vue.prototype.moment = moment;

export default {
  name: "Header",
  data: function() {
    return {
      toggleBtn: false,
    };
  },
  computed: {
    alert() {
      return this.$store.state.alert;
    },
  },
  mounted: function() {
  },
  methods: {
  }
};
</script>
<style scoped>
/* .navbar-toggler:focus ~ #navbarCollapse {
  display: block !important;
} */
</style>

