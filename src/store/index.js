import Vue from 'vue';
import Vuex from 'vuex';
import MaskService from '@/api/MaskService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stores: [],
    userPosition: null
  },
  mutations: {
    setStores(state, payload) {
      state.stores = payload;
    },
    setUserPosition(state, payload) {
      state.userPosition = payload;
    }
  },
  actions: {
    async fetchPharmacies() {
      const json = await MaskService.fetchMaskInfo();
      this.commit('setStores', json);
    },
    async fetchUserPosition() {
      const pos = await MaskService.fetchCurrentPosition();
      this.commit('setUserPosition', pos);
    }
  },
  modules: {
  }
});
