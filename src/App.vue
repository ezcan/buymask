<template lang="pug">
  #app
    transition(name="fade" mode="out-in")
      router-view
</template>

<script>
import VMenu from './components/VMenu.vue';

export default {
  name: 'App',
  components: {
    VMenu
  },
  data: () => ({
    visiable: false
  }),
  mounted() {
    this.$store.dispatch('fetchUserPosition');
    this.$store.dispatch('fetchPharmacies');
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #fcffff;
}
#app {
  position: relative;
  font-family: 'Noto Sans TC', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
