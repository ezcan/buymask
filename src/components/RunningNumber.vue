<template lang="pug">
  span.runing-number {{visiableNumber}}
</template>

<script>
export default {
  name: 'RuningNumber',
  data: () => ({
    visiableNumber: 0
  }),
  props: {
    target: {
      type: Number,
      default: () => 0
    }
  },
  mounted() {
    this.run();
  },
  methods: {
    run() {
      const diff = Math.round((this.target - this.visiableNumber) * 0.1);
      if (diff === 0) {
        this.visiableNumber = this.target;
      } else {
        this.visiableNumber += diff;
        window.requestAnimationFrame(this.run);
      }
    }
  }
};
</script>

<style lang="scss">
span.runing-number{
  font-size: 2em;
  font-weight: bold;
}
</style>
