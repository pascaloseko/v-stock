<template>
    <div class="col-md-6 mb-4 mt-4">
        <div class="card">
        <div class="card-header bg-primary text-white">
            {{ stock.name }}
            <small>(PRICE: {{ stock.price }})</small>
        </div>
        <div class="card-body">
            <div class="float-left">
                <input 
                        type="nimber"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{danger: insufficientFunds}">
            </div>
            <div class="float-right">
                 <button 
                        class="btn btn-primary"
                        @click="buyStock"
                        :disabled="insufficientFunds || quantity <= 0 || !Number(quantity)">
                        {{ insufficientFunds ? 'Insufficient funds': 'Buy' }}</button>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0
        }
    },
    computed:{
        funds(){
            return this.$store.getters.funds;
        },
        insufficientFunds(){
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockID: this.stock.id,
                stockPrice: this.stock.price,
                Quantity: Number(this.quantity)
            };
            console.log(order)
            this.$store.dispatch('buyStock', order);
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
