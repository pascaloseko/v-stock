<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
          <router-link to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
      </ul>
      <strong class="navbar-right nav-link">Funds: {{ funds | currency }}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item"><a class="nav-link" href="#" @click="endDay">End Day</a></li>
        <div>
        <b-dropdown id="ddown-sm-split" size="sm" split text="Save & Load" class="m-md-2">
          <b-dropdown-item @click="saveData">Save Data</b-dropdown-item>
          <b-dropdown-item @click="loadData">Load Data</b-dropdown-item>
        </b-dropdown>
      </div>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</div>
</template>

<script>
/* eslint-disable */
import {mapActions} from 'vuex';
export default {
  computed: {
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay(){
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('data.json', data);
    },
    loadData(){
      this.fetchData();
    }
  }
};
</script>
