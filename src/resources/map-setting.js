const iconUrl = require('../assets/down.svg');

const setting = {
  center: [25.0677505, 121.5470599],
  zoom: 16,
  mapURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribute:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  icon: {
    iconUrl,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }
};

export default setting;
