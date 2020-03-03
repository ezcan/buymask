class Util {
  static calcDistance(origin, destination) {
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
  }
}

export default Util;
