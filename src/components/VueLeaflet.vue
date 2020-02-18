<template lang="pug">
  #vue-leaflet(ref="mask-map")
</template>

<script>
import L from 'leaflet';
import setting from '../resources/map-setting';

export default {
  name: 'VueLeaflet',
  data() {
    return {
      center: L.latLng(setting.center),
      zoom: setting.zoom,
      url: setting.mapURL,
      attribute: setting.attribute,
      icon: L.icon(setting.icon)
    };
  },
  computed: {
    stores() {
      return this.$store.state.stores;
    },
    userPosition() {
      return this.$store.state.userPosition;
    }
  },
  async mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = L.map(this.$refs['mask-map'], {
        center: this.userPosition,
        zoom: this.zoom
      });
      L.tileLayer(this.url, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20
      }).addTo(map);
      const marker = L.marker(this.userPosition, {
        icon: this.icon
      }).addTo(map);
      marker.bindPopup('You are here').openPopup();

      L.geoJson(this.stores, {
        pointToLayer: (feature, latlng) => L.marker(latlng, {
          icon: this.icon
        }),
        onEachFeature: (feature, layer) => layer.bindPopup(feature.properties.name)
      }).addTo(map);
    }
  }
};
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";
#vue-leaflet {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
