<template lang="pug">
  .store-item
    .store-infos
      h3 {{store.name}}
      span.distance-label {{distance}}
      .info-item
        i.fa.fa-map-marker-alt
        span {{store.address}}
      .info-item
        i.fa.fa-phone-square
        a(href="`tel: ${store.phone}`") {{store.phone}}
      .info-item
        i.fa.fa-store-alt
        span {{availableStatus}}
      .info-item
        i.fa.fa-notes-medical
        span {{noteText}}
    .mask-infos
      .mask-num(:class="adultStatus" :data-num="store.mask_adult")
        h4 成人口罩數量
        span {{store.mask_adult}}
      .mask-num(:class="childStatus" :data-num="store.mask_child")
        h4 幼童口罩數量
        span {{store.mask_child}}
</template>

<script>

const daysText = {
  0: '星期日',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六'
};
const periodsText = {
  0: '',
  1: '上午',
  2: '下午',
  3: '晚上'
};

export default {
  props: {
    store: Object,
    nearby: Number
  },
  data: () => ({
    colors: ['grey', 'pink', 'orange', 'blue']
  }),
  computed: {
    adultStatus() {
      const num = Math.min(
        Math.ceil(this.store.mask_adult / 50),
        this.colors.length - 1
      );
      return this.colors[num];
    },
    childStatus() {
      const num = Math.min(
        Math.ceil(this.store.mask_child / 15),
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
      const period = periodsText[Math.floor(now.getHours() / 6)];
      return periods.find(p => p.includes(day + period))
        .replace('看診', '營業')
        .replace('休診', '休息')
        || '無營業資訊';
    },
    noteText() {
      const { note } = this.store;
      return note === '-' ? '無藥局備註' : note;
    }
  },
  name: 'Store'
};
</script>

<style lang="scss">
  .store-item {
    position: relative;
    display: inline-block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 8px;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(#777, .3);
    border-radius: 4px;
    box-sizing: border-box;
    transition: all .5s;
    will-change: position opacity;
  }
  .store-infos{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    > .distance-label{
      position: absolute;
      right: 0;
      top: 1.13em;
      min-width: 72px;
      height: 1.5em;
      border-radius: 1.5em;
      line-height: 1.5em;
      background-color: #777;
      color: #fff;
      text-align: center;
    }
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
    }
  }
  .mask-infos{
    display: flex;
    flex-direction: row;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: space-between;
  }
  .mask-num{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    min-width: 140px;
    height: 120px;
    color: #fff;
    border-radius: 4px;
    overflow: hidden;

    > span{
      font-size: 3em;
      font-weight: bold;
    }

    &::after{
      content: attr(data-num);
      position: absolute;
      display: block;
      width: 120px;
      height: 80px;
      border-radius: 120px;
      background-color: #fff;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
    &:nth-child(2){
      margin-left: 4px;
    }
  }

  .grey{
    background-color: #777;
  }
  .blue{
    background-color: #88e1f2;
  }
  .orange{
    background-color: #ffd082;
  }
  .pink{
    background-color: #ff7c7c;
  }
</style>
