<template>
  <form class="form-horizontal text-left">
    <h5>Nova Oferta</h5>
    <div class="row">
        <div class="col-7">
          <div class="form-group">
            <label for="exampleFormControlInput1">Título</label>
            <input type="text" v-model="form.title" class="form-control" id="exampleFormControlInput1"  placeholder="Título do produto" required>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Preço</label>
            <input type="number" v-model="form.price"  class="form-control" id="exampleFormControlInput1" placeholder="0.00" min=0 pattern="[\d]*" required>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Desconto</label>
            <input type="number" v-model="form.discount"  class="form-control" id="exampleFormControlInput1" placeholder="0.00" min=0 pattern="[\d]*" required>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea class="form-control" v-model="form.description"  id="exampleFormControlTextarea1" rows="3" placeholder="Descrição do produto"></textarea>
          </div>
        </div>
        <div class="col-5">
           <div class="form-group">
            <label for="exampleFormControlInput1">Image Url</label>
            <input type="url" v-model="form.image" class="form-control" id="exampleFormControlInput1" placeholder="Ex: shttp://dominio.com/image.jpg">
          </div>
          <div class="form-group">
              <figure>
                <img v-if="form.image" :src="form.image" alt="">  
              </figure>  
          </div>
        </div>
    </div>
   
    <div class="form-group pb-2">
      <button class="btn btn-success">Salvar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "OfertaForm",
  data: function() {
    return {
      form: {}
    };
  },
  computed: {
    config: function() {
      return this.$store.state.config;
    }
  },
  methods: {
    showEvent() {
    }
  }
};
</script>

<style scoped>

</style>
