<template>
    <div class="jumbotron">
        <h1 class="display-4">Trade or view your potfolio</h1>
        <h6 class="lead text-primary">You may save or load your data</h6>
        <h6 class="text-success">Click on 'End Day' to begin a New day</h6>
        <hr class="my-4">
        <p class="lead">Your Funds: {{ funds | currency }} </p>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>
