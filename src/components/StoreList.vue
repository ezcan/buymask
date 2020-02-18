<template lang="pug">
  .container
    header.header
      h1 口罩查詢器
    span {{resultTips}}
    v-menu(@click="isShowController = !isShowController")
    transition(name="zoom")
      .controller(v-show="isShowController")
        .container
          .filter-item
            select(v-model="city")
              option(value="") 選擇縣市
              option(v-for="(city, i) in cityOptions" :key="city" ) {{city}}
            select(v-model="district")
              option(value="" disabled) 選擇行政區
              option(v-for="(d, j) in districtsOptions" :key="d" ) {{d}}
          .filter-item
            input.fa.fa-search-location(type="text" v-model="keyword" placeholder="依店名或地址查詢...")
          button(@click="resetHandler") 清空
    transition-group.store-list(name="list")
      store(v-for="store in visiableStores"
        :key="store.properties.id"
        :store="store.properties"
        :nearby="store.nearby")
</template>

<script>
import Store from './Store.vue';
import VMenu from './VMenu.vue';
import setting from '../resources/map-setting';
import twArea from '../resources/tw-area';

export default {
  name: 'StroeList',
  components: {
    Store,
    VMenu
  },
  data: () => ({
    searchMode: 'nearby', // area, name, nearby
    city: '',
    district: '',
    keyword: '',
    radius: 3,
    page: 1,
    numberOfPage: 12,
    isShowController: false,
    twArea
  }),
  watch: {
    city() {
      if (!this.city) {
        this.searchMode = 'nearby';
        return;
      }
      this.searchMode = 'area';
      const [district] = this.districtsOptions;
      this.district = district;
    },
    keyword() {
      this.searchMode = this.keyword ? 'name' : 'nearby';
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
        nearby: this.calcDistance(this.userPosition, s.geometry.coordinates)
      }));
    },
    nameFilter() {
      return this.keyword && this.distanceStores.filter(
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
      return {
        name: this.nameFilter,
        area: this.areaFilter,
        nearby: this.nearbyFilter
      };
    },
    dataLength() {
      return this.storeFilter[this.searchMode].length;
    },
    visiableStores() {
      const result = this.storeFilter[this.searchMode] || [];
      return result.sort((a, b) => a.nearby - b.nearby).slice(0, this.page * this.numberOfPage);
    },
    resultTips() {
      const tips = {
        name: `根據關鍵字 ${this.keyword}`,
        area: `在 ${this.city}${this.district}`,
        nearby: `距離您 ${this.radius} 公里內`
      };
      return `${tips[this.searchMode]}，共找到${this.dataLength}筆資料`;
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
    calcDistance(origin, destination) {
      const [lat1, lng1] = origin;
      const [lng2, lat2] = destination;
      const EARTH_RADIUS = 6378.137;
      const radLat1 = lat1 * Math.PI / 180.0;
      const radLat2 = lat2 * Math.PI / 180.0;
      const deltaLat = radLat1 - radLat2;
      const deltaLng = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
      const result = 2 * EARTH_RADIUS * Math.asin(Math.sqrt(
        (Math.sin(deltaLat / 2) ** 2)
      + Math.cos(radLat1) * Math.cos(radLat2) * (Math.sin(deltaLng / 2) ** 2)
      ));
      return Math.round(result * 10000) / 10000;
    },
    resetHandler() {
      this.keyword = '';
      this.searchMode = 'nearby';
    }
  }
};
</script>

<style lang="scss">
.header{
  height: 60px;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
}

.controller{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #177E89;
  color: #fff;
  font-size: 2em;
  z-index: 10;
  transition: all 1s
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
