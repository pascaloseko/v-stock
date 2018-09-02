/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store/store';
import BootstrapVue from 'bootstrap-vue';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-5d050.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
