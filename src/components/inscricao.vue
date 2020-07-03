<template>
    <div class="btn-group mr-2 shadow dropup" role="group" aria-label="Second group">
        <button type="button" class="btn btn-outline-secondary bg-subscribed" title="Remover inscrição" 
                v-show="subscribed" @click="unsubscribe()">
            <i class="fas fa-bell-slash"></i>
        </button>
        <button type="button" class="btn btn-outline-secondary bg-subscribe" title="Inscreva-se!" 
                v-show="!subscribed" @click="subscribe()">
            <i class="fas fa-bell"></i>
        </button>
        <button type="button" class="btn btn-outline-secondary bg-favorites" title="Favoritar">
            <i class="fa fa-heart"></i>
        </button>
    </div>
</template>
<script>
export default {
    name: "Inscricao",
    data: function() { return {
        show: false,
        subscribed: false,
    }},
    props:{
        product: {},
        type: String
    },
    mounted: function() {
        this.subscribed = sessionStorage.getItem( `${this.type}-${this.product.id}`)
    },
    methods:{
        subscribe(){
            this.subscribed = true;
            sessionStorage.setItem( `${this.type}-${this.product.id}`, true)
        },
        unsubscribe(){
            this.subscribed = false;
            sessionStorage.removeItem( `${this.type}-${this.product.id}`)
        }
    }
}
</script>

<style scoped>
.bg-favorites{
   color: #e84a5f;
}
.bg-subscribe{
   color: #ea907a;
}
.bg-subscribed{
   background-color: #fbc687;
   color: #999;
}
.event .btn-group {
  margin-top: -20px;
  background: #fff;
}
.event .btn-group .btn {
  border: 0px;
  padding: 3px 10px;
}
.subscription-form a{
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 1em;
}
</style>
