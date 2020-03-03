<template lang="pug">
  .container
    header.header
      h1 口罩查詢器
    .controller
      label
        input(type="radio" name="search-mode" value="nearby" v-model="searchMode")
        .btn.fa.fa-map-marker-alt 鄰近藥局
      label
        input(type="radio" name="search-mode" value="name" v-model="searchMode")
        .btn.fa.fa-search 藥局搜尋
        .item
          input(type="text" v-model="keyword" placeholder="依店名或地址查詢...")
      label
        input(type="radio" name="search-mode" value="area" v-model="searchMode")
        .btn.fa.fa-city 區域查詢
        .item
          select(v-model="city" @change="cityChangeHandler")
            option(value="") 選擇縣市
            option(v-for="(city, i) in cityOptions" :key="city" ) {{city}}
          select(v-model="district")
            option(value="" disabled) 選擇行政區
            option(v-for="(d, j) in districtsOptions" :key="d" ) {{d}}
      span 有成人口罩
      v-switch(v-model="isHidden")
    span {{resultTips}}

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
    searchMode: 'nearby', // area, name, nearby
    city: '新北市',
    district: '中和區',
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
.header{
  height: 60px;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
}

.controller{
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fcffff;
  max-width: 100%;
  min-height: 1.5em;
  line-height: 1.5em;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 1000;

  > label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2px;
    width: auto;
    height: 48px;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(black, .3);
    will-change: width;
    transition: width .5s;
    cursor: pointer;
  }
}

input[type="radio"]{
  display: none;

  &:checked{
    ~ .item{
      width: auto;
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
      transition: 1s
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
  transition: all .4s .1s;
  transform: translateX(30px);
  > input{
    height: 100%;
    border: 0;
    outline: 0;
  }
}

.store-list{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
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
