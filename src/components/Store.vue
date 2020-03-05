<template lang="pug">
  .store-item
    h3.store-title(:data-distance="distance") {{store.name}}
    span.distance-label {{distance}}
    .store-infos
      .info-item
        i.fa.fa-map-marker-alt
        span {{store.address}}
      .info-item
        i.fa.fa-phone-square
        a(:href="`tel: ${store.phone}`") {{store.phone}}
      .info-item
        i.fa.fa-store-alt
        span
          span.periods(v-for="a of availableStatus"
            :key="a"
            :class="availableClass(a)"
          ) {{a}}
      .info-item(v-show="hasNote")
        i.fa.fa-notes-medical
        span {{store.note}}
    .mask-infos
      .mask-num(:class="adultStatus" :data-num="store.mask_adult")
        span 成人
          running-number(:target="store.mask_adult")
          | 片
      .mask-num(:class="childStatus" :data-num="store.mask_child")
        span 幼童
          running-number(:target="store.mask_child")
          | 片
</template>

<script>
import RunningNumber from './RunningNumber.vue';

const daysText = {
  0: '星期日',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六'
};


export default {
  props: {
    store: Object,
    nearby: Number
  },
  data: () => ({
    colors: ['zero', 'less', 'general', 'enough']
  }),
  components: {
    RunningNumber
  },
  methods: {
    availableClass(period) {
      return {
        closed: period.includes('休息')
      };
    }
  },
  computed: {
    adultStatus() {
      const num = Math.min(
        Math.ceil(this.store.mask_adult / 100),
        this.colors.length - 1
      );
      return this.colors[num];
    },
    childStatus() {
      const num = Math.min(
        Math.ceil(this.store.mask_child / 100),
        this.colors.length - 1
      );
      return this.colors[num];
    },
    distance() {
      if (this.nearby < 1) { return `${Math.floor(this.nearby * 1000)}m`; }
      return `${Math.floor(this.nearby * 10) / 10}km`;
    },
    availableStatus() {
      const { available } = this.store;
      const periods = available.split('、');
      const now = new Date();
      const day = daysText[now.getDay()];
      return periods.filter(p => p.includes(day))
        .map(i => i.replace(day, '')
          .replace('看診', '營業')
          .replace('休診', '休息'));
    },
    hasNote() {
      return this.store.note !== '-';
    }
  },
  name: 'Store'
};
</script>

<style lang="scss">
  .store-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px 12px;
    flex-direction: column;
    background-color: #fcfcfc;
    box-shadow: 0 0 4px rgba(#777777, .3);
    border-radius: 16px;
    box-sizing: border-box;
    transition: all .5s;
    overflow: hidden;
    will-change: position opacity;
  }
  h3.store-title{
    text-align: left;
    font-size: 1.5em;
    margin: .5em 0;
  }
  .distance-label{
      position: absolute;
      right: -40px;
      top: 10px;
      min-width: 160px;
      height: 1.5em;
      border-radius: 8px;
      line-height: 1.5em;
      background-color: #00635D;
      color: #ffffff;
      text-align: center;
      transform: rotate(30deg);
      box-shadow: 0 0 4px rgba(#777777, .3)
  }
  .store-infos{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #777777;
    font-size: .8em;
    padding-bottom: 8px;

    > .info-item{
      line-height: 1.5em;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      > .fa {
        display: inline-block;
        flex: 1;
        text-align: center;
      }
      > span, a{
        flex: 11;
        display: inline-block;
      }
      > a {
        text-decoration: none;
        color: #00635D
      }
    }
  }
  .periods{
    margin-right: 4px;
    color: #00635D;
    &.closed{
      color: #cccccc;
    }
  }
  .mask-infos{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2.5em;
    line-height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    box-shadow: 0 0 8px rgba(#777777, .3);
    border-radius: 8px;
    margin: 0 4px;
  }
  .mask-num{
    position: relative;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 120px;
    height: 1.8em;
    line-height: 1.8em;
    color: #fff;
  }

  .zero{
    color: #777777;
  }
  .enough{
    color: #08a4bd;
  }
  .general{
    color: #ffd082;
  }
  .less{
    color: #ff7c7c;
  }
</style>
