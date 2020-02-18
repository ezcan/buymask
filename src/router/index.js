import Vue from 'vue';
import VueRouter from 'vue-router';

import VueLeaflet from '../components/VueLeaflet.vue';
import StoreList from '../components/StoreList.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'map', path: '/map', component: VueLeaflet
  },
  {
    name: 'list', path: '/list', component: StoreList
  },
  {
    path: '*',
    component: StoreList
  }
];

export default new VueRouter({
  routes
});
