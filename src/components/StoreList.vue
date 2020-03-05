<template lang="pug">
  .container
    input#menu(type="checkbox")
    label.barger(for="menu")
    aside.controller
      .calendar-container
        .calendar
          .month {{visiableMonth}}
          .date {{visiableDate}}
        span.tips(v-html="buyerTips")
      p {{resultTips}}
      label.controller-item
        input(type="radio" name="search-mode" value="area" v-model="searchMode")
        .text.fa.fa-city 區域查詢
        .item
          select(v-model="city" @change="cityChangeHandler")
            option(value="" disabled) 選擇縣市
            option(v-for="(city, i) in cityOptions" :key="city" ) {{city}}
          select(v-model="district")
            option(value="" disabled) 選擇行政區
            option(v-for="(d, j) in districtsOptions" :key="d" ) {{d}}
      label.controller-item
        input(type="radio" name="search-mode" value="name" v-model="searchMode")
        .text.fa.fa-search 藥局搜尋
        .item
          input(type="text" v-model="keyword" placeholder="依店名或地址查詢...")
      label.controller-item
        input(type="radio" name="search-mode" value="nearby" v-model="searchMode")
        .btn.fa.fa-map-marker-alt 鄰近藥局
      span 成人口罩
      v-switch(v-model="isHidden")

    transition-group.store-list(name="list")
      store(v-for="store in visiableStores"
        :key="store.properties.id"
        :store="store.properties"
        :nearby="store.nearby")
</template>

<script>
import Util from '@/resources/Util';
import setting from '@/resources/map-setting';
import twArea from '@/resources/tw-area';
import Store from './Store.vue';
import VMenu from './VMenu.vue';
import VSwitch from './VSwitch.vue';


export default {
  name: 'StroeList',
  components: {
    Store,
    VMenu,
    VSwitch
  },
  data: () => ({
    currentTime: new Date(),
    searchMode: 'nearby', // area, name, nearby
    city: '',
    district: '',
    keyword: '',
    radius: 1.5,
    page: 1,
    numberOfPage: 12,
    isShowController: false,
    isHidden: true,
    twArea
  }),
  watch: {
    storeCounter() {
      if (this.storeCounter === 0 && this.searchMode === 'nearby') {
        this.radius += 0.5;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler);
  },
  beforeDestroy() {
    window.removeEventListener('scroll');
  },
  computed: {
    visiableMonth() {
      return `${this.currentTime.getMonth() + 1}月`;
    },
    visiableDate() {
      return this.currentTime.getDate();
    },
    buyerTips() {
      const today = this.currentTime.getDay();

      if (today === 0) {
        return '<span style="color: #ff7c7c">不限身分證字號</span>，只要健保特約藥局有營業即可購買。';
      }
      const tips = {
        0: '偶數',
        1: '奇數'
      };
      return `身分證字號最末碼為<span style="color: #ff7c7c">${tips[today % 2]}者</span>，可至健保特約藥局購買。`;
    },
    cityOptions() {
      return Object.keys(this.twArea);
    },
    districtsOptions() {
      if (this.cityOptions.includes(this.city)) {
        return this.twArea[this.city];
      }
      return [];
    },
    userPosition() {
      return this.$store.state.userPosition || setting.center;
    },
    stores() {
      return this.$store.state.stores.features || [];
    },
    distanceStores() {
      return this.stores.map(s => ({
        ...s,
        nearby: Util.calcDistance(this.userPosition, s.geometry.coordinates)
      }));
    },
    nameFilter() {
      return this.distanceStores.filter(
        s => s.properties.name.includes(this.keyword)
        || s.properties.address.includes(this.keyword)
      );
    },
    areaFilter() {
      return this.distanceStores.filter(
        s => s.properties.county === this.city
        && s.properties.town === this.district
      );
    },
    nearbyFilter() {
      return this.distanceStores.filter(
        s => s.nearby <= this.radius
      );
    },
    storeFilter() {
      const result = {
        name: this.nameFilter,
        area: this.areaFilter,
        nearby: this.nearbyFilter
      };
      return result[this.searchMode];
    },
    storeCounter() {
      return this.storeFilter.length;
    },
    visiableStores() {
      const result = this.storeFilter
        .filter(item => !this.isHidden || item.properties.mask_adult > 0);
      return result.sort((a, b) => a.nearby - b.nearby).slice(0, this.page * this.numberOfPage);
    },
    resultTips() {
      const tips = {
        name: `根據關鍵字 ${this.keyword}`,
        area: `在 ${this.city}${this.district}內`,
        nearby: `距離您 ${this.radius} 公里內`
      };
      return `${tips[this.searchMode]}，共找到${this.storeCounter}筆藥局資訊`;
    }
  },
  methods: {
    scrollHandler() {
      if (window.innerHeight + window.scrollY + 200
          >= document.body.scrollHeight
      ) {
        this.page += 1;
      }
    },
    cityChangeHandler() {
      const [district] = this.districtsOptions;
      this.district = district;
    }
  }
};
</script>

<style lang="scss" scoped>

$sidebar-width: 240px;
$store-width: 300px;

.container{
  width: 100vw;
  max-width: 1200px;
  margin: 0 auto;
}
#menu{
  display: none;
  &:checked{
    & ~ .controller{
      transform: translateX(-$sidebar-width);
    }
    & ~ .store-list{
      margin-left: 0;
      grid-gap: 20px;
    }
  }
}

.barger{
  display: inline-block;
  position: fixed;
  top: 12px;
  left: 12px;
  width: 48px;
  height: 48px;
  z-index: 100;
}

.container{
  max-width: 1200px;
  margin: 0 auto;
}

.calendar-container{
  display: inline-block;
  display: flex;
  font-display: row;
  width: 100%;
  box-sizing: border-box;
}
.calendar{
  display: inline-block;
  widows: 60px;
  min-width: 60px;
  height: 60px;
  box-shadow: 0 0 4px rgba(black, .3);
  box-sizing: border-box;
  transform: rotate(-4.5deg) translateX(4px);
  > .month, .date{
    text-align: center;
  }
  > .month{
    width: 100%;
    height: 20px;
    color: #ffffff;
    background-color: #ff7c7c;
    line-height: 20px;
  }
  > .date{
    line-height: 40px;
    font-size: 2em;
  }
}

.tips{
  display: inline-block;
  padding: 1em;
  max-width: 180px;
  font-size: .5em;
  box-sizing: border-box;
}

.controller{
  padding: 60px 4px;
  flex-direction: column;
  position: fixed;
  left: 0;
  height: 100vh;
  width: $sidebar-width;
  display: flex;
  transition: all .5s;
  box-sizing: border-box;

  > .controller-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4 8px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(black, .3);
    will-change: width;
    transition: width .5s;
    cursor: pointer;

    > .text, .item{
      position: absolute;
    }
    > .text{
      transform: scale(1);
      opacity: 1;
      transition: all .5s;
    }
  }
}

input[type="radio"]{
  display: none;

  &:checked{
    ~ .text{
      transform: scale(.7);
      opacity: 0;
    }
    ~ .item{
      padding: 0 8px;
      width: 80%;
      opacity: 1;
      visibility: visible;
      transform: translateX(0) scale(1);
      transition: .5s;
    }
  }
}

.btn{
  min-width: 80px;
  padding: 2px 4px;
  transition: all .5s;
  box-sizing: border-box;
}
.item{
  width: 0;
  visibility: hidden;
  opacity: 0;
  transform: translateX(30px) scale(0);

  > input{
    height: 100%;
    border: 0;
    outline: 0;
  }
  > select{
    width: 50%;
  }
}

.store-list{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($store-width, 1fr));
  grid-gap: 12px;
  padding: 8px;
  margin-left: $sidebar-width;
  transition: all .5s;
}

.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-active {
  position: absolute;
}
.zoom-enter-active, .zoom-leave-active {
  transition: all .5s ease-in-out;
}
.zoom-enter, .zoom-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
