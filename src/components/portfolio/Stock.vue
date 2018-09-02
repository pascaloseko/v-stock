<template>
    <div class="col-md-6 mb-4 mt-4">
        <div class="card">
        <div class="card-header bg-success text-white">
            {{ stock.name }}
            <small>(PRICE: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </div>
        <div class="card-body">
            <div class="float-left">
                <input 
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{danger: insufficientQuantity}">
            </div>
            <div class="float-right">
                 <button 
                        class="btn btn-success"
                        @click="sellStock"
                        :disabled="insufficientQuantity || quantity <= 0 || !Number(quantity)">
                        {{insufficientQuantity ? 'Not enough stocks' : 'Sell'}}</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions({
            placedStock: 'sellStock'
        }),
       sellStock(){
           const order = {
               stockID: this.stock.id,
               stockPrice: this.stock.price,
               Quantity: Number(this.quantity)
           };
           console.log(order);
           this.placedStock(order);
           this.quantity = 0;
       }
}
};
</script>
<style scoped>
.danger{
    border: 1px solid red;
}
</style>