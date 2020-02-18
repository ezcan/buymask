<template lang="pug">
  .runing-number {{visiableNumber}}
</template>

<script>
export default {
  name: 'RuningNumber',
  data: () => ({
    visiableNumber: 0
  }),
  props: {
    target: Number,
    default: () => 0
  },
  watch: {
    target() {
      this.visiableNumber = 0;
      this.run();
    }
  },
  methods: {
    run() {
      const diff = Math.round((this.target - this.visiableNumber) * 0.05);
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
