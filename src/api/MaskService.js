import axios from 'axios';

const url = 'https://kiang.github.io/pharmacies/json/points.json';

const green = require('../assets/mask.svg');


function createIcon() {
  return green;
}
function parsefeatures(features = []) {
  return features.map((f) => {
    const { properties } = f;
    const maskTotal = properties.mask_adult + properties.mask_child;
    properties.icon = createIcon(maskTotal);
    return {
      ...f,
      properties
    };
  });
}

class MaskService {
  static fetchMaskInfo() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(url, {
          params: {
            format: 'json'
          }
        });
        const features = parsefeatures(response.data.features);
        resolve({
          ...response.data, features
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static fetchCurrentPosition(options = []) {
    return new Promise(async (resolve, reject) => {
      await navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        resolve([latitude, longitude]);
      }, reject, options);
    });
  }
}

export default MaskService;
