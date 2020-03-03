(function (t) {
  function e(e) { for (var n, i, o = e[0], c = e[1], u = e[2], p = 0, d = []; p < o.length; p++)i = o[p], Object.prototype.hasOwnProperty.call(a, i) && a[i] && d.push(a[i][0]), a[i] = 0; for (n in c)Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]); l && l(e); while (d.length)d.shift()(); return s.push.apply(s, u || []), r(); } function r() { for (var t, e = 0; e < s.length; e++) { for (var r = s[e], n = !0, o = 1; o < r.length; o++) { const c = r[o]; a[c] !== 0 && (n = !1); }n && (s.splice(e--, 1), t = i(i.s = r[0])); } return t; } const n = {
  }; var a = {
    app: 0
  }; var s = []; function i(e) {
    if (n[e]) return n[e].exports; const r = n[e] = {
      i: e,
      l: !1,
      exports: {
      }
    }; return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }i.m = t, i.c = n, i.d = function (t, e, r) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0, get: r
    });
  }, i.r = function (t) {
    typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: 'Module'
    }), Object.defineProperty(t, '__esModule', {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const r = Object.create(null); if (i.r(r), Object.defineProperty(r, 'default', {
      enumerable: !0, value: t
    }), 2 & e && typeof t !== 'string') for (const n in t)i.d(r, n, (e => t[e]).bind(null, n)); return r;
  }, i.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return i.d(e, 'a', e), e; }, i.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, i.p = ''; let o = window.webpackJsonp = window.webpackJsonp || []; const c = o.push.bind(o); o.push = e, o = o.slice(); for (let u = 0; u < o.length; u++)e(o[u]); var l = c; s.push([0, 'chunk-vendors']), r();
}({
  0(t, e, r) { t.exports = r('56d7'); },
  '08d8': function (t, e, r) {},
  '0de8': function (t, e, r) { t.exports = `${r.p}img/mask.a8489445.svg`; },
  '0e9b': function (t, e, r) {},
  3093(t, e, r) {},
  '3f31': function (t, e, r) {
    const n = r('8fca'); const a = r.n(n); a.a;
  },
  '4e2e': function (t, e, r) {
    const n = r('7cf3'); const a = r.n(n); a.a;
  },
  '56d7': function (t, e, r) {
    r.r(e); r('e260'), r('e6cf'), r('cca6'), r('a79d'); const n = r('2b0e'); const a = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', {
        attrs: {
          id: 'app'
        }
      }, [r('transition', {
        attrs: {
          name: 'fade', mode: 'out-in'
        }
      }, [r('router-view')], 1)], 1);
    }; const s = []; const i = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', {
        attrs: {
          id: 'menu'
        }
      }, [r('input', {
        attrs: {
          id: 'burger-toggle', type: 'checkbox'
        }
      }), r('label', {
        staticClass: 'burger',
        attrs: {
          for: 'burger-toggle'
        },
        on: {
          click(e) { return t.clickHandler(e); }
        }
      }, [r('span', {
        staticClass: 'burger-bar'
      })])]);
    }; const o = []; const c = {
      name: 'VMenu',
      methods: {
        clickHandler(t) { this.$emit('click', t); }
      }
    }; const u = c; const l = (r('fa08'), r('2877')); const p = Object(l.a)(u, i, o, !1, null, '6919e833', null); const d = p.exports; const f = {
      name: 'App',
      components: {
        VMenu: d
      },
      data() {
        return {
          visiable: !1
        };
      },
      mounted() { this.$store.dispatch('fetchUserPosition'), this.$store.dispatch('fetchPharmacies'); }
    }; const h = f; const m = (r('5c0b'), Object(l.a)(h, a, s, !1, null, null, null)); const v = m.exports; const b = (r('96cf'), r('1da1')); const y = r('2f62'); const g = (r('a4d3'), r('4de4'), r('4160'), r('d81d'), r('e439'), r('dbb4'), r('b64b'), r('d3b7'), r('159b'), r('d4ec')); const w = r('bee2'); const O = r('ade3'); const _ = r('bc3a'); const k = r.n(_); function j(t, e) { const r = Object.keys(t); if (Object.getOwnPropertySymbols) { let n = Object.getOwnPropertySymbols(t); e && (n = n.filter((e => Object.getOwnPropertyDescriptor(t, e).enumerable))), r.push.apply(r, n); } return r; } function P(t) {
      for (let e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {
        }; e % 2 ? j(Object(r), !0).forEach(((e) => { Object(O.a)(t, e, r[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)); }));
      } return t;
    } const M = 'https://kiang.github.io/pharmacies/json/points.json'; const x = r('0de8'); function C() { return x; } function S() {
      const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return t.map(((t) => {
        const e = t.properties; const r = e.mask_adult + e.mask_child; return e.icon = C(r), P({
        }, t, {
          properties: e
        });
      }));
    } const N = (function () {
      function t() { Object(g.a)(this, t); } return Object(w.a)(t, null, [{
        key: 'fetchMaskInfo',
        value() {
          return new Promise(function () {
            const t = Object(b.a)(regeneratorRuntime.mark((function t(e, r) {
              let n; let a; return regeneratorRuntime.wrap(((t) => {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0: return t.prev = 0, t.next = 3, k.a.get(M, {
                      params: {
                        format: 'json'
                      }
                    }); case 3: n = t.sent, a = S(n.data.features), e(P({
                    }, n.data, {
                      features: a
                    })), t.next = 11; break; case 8: t.prev = 8, t.t0 = t.catch(0), r(t.t0); case 11: case 'end': return t.stop();
                  }
                }
              }), t, null, [[0, 8]]);
            }))); return function (e, r) { return t.apply(this, arguments); };
          }());
        }
      }, {
        key: 'fetchCurrentPosition', value() { const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return new Promise(function () { const e = Object(b.a)(regeneratorRuntime.mark((function e(r, n) { return regeneratorRuntime.wrap(((e) => { while (1) switch (e.prev = e.next) { case 0: return e.next = 2, navigator.geolocation.getCurrentPosition(((t) => { const e = t.coords; const n = e.latitude; const a = e.longitude; r([n, a]); }), n, t); case 2: case 'end': return e.stop(); } }), e); }))); return function (t, r) { return e.apply(this, arguments); }; }()); }
      }]), t;
    }()); const $ = N; n.a.use(y.a); const E = new y.a.Store({
      state: {
        stores: [], userPosition: null
      },
      mutations: {
        setStores(t, e) { t.stores = e; }, setUserPosition(t, e) { t.userPosition = e; }
      },
      actions: {
        fetchPharmacies() { const t = this; return Object(b.a)(regeneratorRuntime.mark((function e() { let r; return regeneratorRuntime.wrap(((e) => { while (1) switch (e.prev = e.next) { case 0: return e.next = 2, $.fetchMaskInfo(); case 2: r = e.sent, t.commit('setStores', r); case 4: case 'end': return e.stop(); } }), e); })))(); }, fetchUserPosition() { const t = this; return Object(b.a)(regeneratorRuntime.mark((function e() { let r; return regeneratorRuntime.wrap(((e) => { while (1) switch (e.prev = e.next) { case 0: return e.next = 2, $.fetchCurrentPosition(); case 2: r = e.sent, t.commit('setUserPosition', r); case 4: case 'end': return e.stop(); } }), e); })))(); }
      },
      modules: {
      }
    }); const R = r('8c4f'); const D = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', {
        ref: 'mask-map',
        attrs: {
          id: 'vue-leaflet'
        }
      });
    }; const H = []; const F = (r('b0c0'), r('e11e')); const A = r.n(F); const L = r('bf81'); const T = {
      center: [25.0677505, 121.5470599],
      zoom: 16,
      mapURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribute: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      icon: {
        iconUrl: L, shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
      }
    }; const z = T; const U = {
      name: 'VueLeaflet',
      data() {
        return {
          center: A.a.latLng(z.center), zoom: z.zoom, url: z.mapURL, attribute: z.attribute, icon: A.a.icon(z.icon)
        };
      },
      computed: {
        stores() { return this.$store.state.stores; }, userPosition() { return this.$store.state.userPosition; }
      },
      mounted() { const t = this; return Object(b.a)(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap(((e) => { while (1) switch (e.prev = e.next) { case 0: t.initMap(); case 1: case 'end': return e.stop(); } }), e); })))(); },
      methods: {
        initMap() {
          const t = this; const e = A.a.map(this.$refs['mask-map'], {
            center: this.userPosition, zoom: this.zoom
          }); A.a.tileLayer(this.url, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>', maxZoom: 20
          }).addTo(e); const r = A.a.marker(this.userPosition, {
            icon: this.icon
          }).addTo(e); r.bindPopup('You are here').openPopup(), A.a.geoJson(this.stores, {
            pointToLayer(e, r) {
              return A.a.marker(r, {
                icon: t.icon
              });
            },
            onEachFeature(t, e) { return e.bindPopup(t.properties.name); }
          }).addTo(e);
        }
      }
    }; const I = U; const q = (r('b568'), Object(l.a)(I, D, H, !1, null, null, null)); const V = q.exports; const J = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', {
        staticClass: 'container'
      }, [r('header', {
        staticClass: 'header'
      }, [r('h1', [t._v('口罩查詢器')]), r('div', {
        staticClass: 'controller'
      }, [r('label', [r('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.searchMode, expression: 'searchMode'
        }],
        attrs: {
          type: 'radio', name: 'search-mode', value: 'nearby'
        },
        domProps: {
          checked: t._q(t.searchMode, 'nearby')
        },
        on: {
          change(e) { t.searchMode = 'nearby'; }
        }
      }), r('div', {
        staticClass: 'btn fa fa-map-marker-alt'
      }, [t._v('鄰近店家')])]), r('label', [r('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.searchMode, expression: 'searchMode'
        }],
        attrs: {
          type: 'radio', name: 'search-mode', value: 'name'
        },
        domProps: {
          checked: t._q(t.searchMode, 'name')
        },
        on: {
          change(e) { t.searchMode = 'name'; }
        }
      }), r('div', {
        staticClass: 'btn fa fa-search'
      }, [t._v('店名搜尋')]), r('div', {
        staticClass: 'item'
      }, [r('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.keyword, expression: 'keyword'
        }],
        attrs: {
          type: 'text', placeholder: '依店名或地址查詢...'
        },
        domProps: {
          value: t.keyword
        },
        on: {
          input(e) { e.target.composing || (t.keyword = e.target.value); }
        }
      })])]), r('label', [r('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.searchMode, expression: 'searchMode'
        }],
        attrs: {
          type: 'radio', name: 'search-mode', value: 'area'
        },
        domProps: {
          checked: t._q(t.searchMode, 'area')
        },
        on: {
          change(e) { t.searchMode = 'area'; }
        }
      }), r('div', {
        staticClass: 'btn fa fa-city'
      }, [t._v('行政區域')]), r('div', {
        staticClass: 'item'
      }, [r('select', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.city, expression: 'city'
        }],
        on: {
          change(e) { const r = Array.prototype.filter.call(e.target.options, (t => t.selected)).map(((t) => { const e = '_value' in t ? t._value : t.value; return e; })); t.city = e.target.multiple ? r : r[0]; }
        }
      }, [r('option', {
        attrs: {
          value: ''
        }
      }, [t._v('選擇縣市')]), t._l(t.cityOptions, ((e, n) => r('option', {
        key: e
      }, [t._v(t._s(e))])))], 2), r('select', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.district, expression: 'district'
        }],
        on: {
          change(e) { const r = Array.prototype.filter.call(e.target.options, (t => t.selected)).map(((t) => { const e = '_value' in t ? t._value : t.value; return e; })); t.district = e.target.multiple ? r : r[0]; }
        }
      }, [r('option', {
        attrs: {
          value: '', disabled: ''
        }
      }, [t._v('選擇行政區')]), t._l(t.districtsOptions, ((e, n) => r('option', {
        key: e
      }, [t._v(t._s(e))])))], 2)])]), r('span', [t._v('有成人口罩')]), r('v-switch', {
        model: {
          value: t.isHidden, callback(e) { t.isHidden = e; }, expression: 'isHidden'
        }
      })], 1), r('span', [t._v(t._s(t.resultTips))])]), r('transition-group', {
        staticClass: 'store-list',
        attrs: {
          name: 'list'
        }
      }, t._l(t.visiableStores, (t => r('store', {
        key: t.properties.id,
        attrs: {
          store: t.properties, nearby: t.nearby
        }
      }))), 1)], 1);
    }; const Y = []; const B = (r('99af'), r('caad'), r('fb6a'), r('2532'), r('3835')); const Z = (function () {
      function t() { Object(g.a)(this, t); } return Object(w.a)(t, null, [{
        key: 'calcDistance', value(t, e) { const r = Object(B.a)(t, 2); const n = r[0]; const a = r[1]; const s = Object(B.a)(e, 2); const i = s[0]; const o = s[1]; const c = 6378.137; const u = n * Math.PI / 180; const l = o * Math.PI / 180; const p = u - l; const d = a * Math.PI / 180 - i * Math.PI / 180; const f = 2 * c * Math.asin(Math.sqrt(Math.pow(Math.sin(p / 2), 2) + Math.cos(u) * Math.cos(l) * Math.pow(Math.sin(d / 2), 2))); return Math.round(1e4 * f) / 1e4; }
      }]), t;
    }()); const G = Z; const K = {
      臺北市: ['中正區', '大同區', '中山區', '萬華區', '信義區', '松山區', '大安區', '南港區', '北投區', '內湖區', '士林區', '文山區'], 新北市: ['板橋區', '新莊區', '泰山區', '林口區', '淡水區', '金山區', '八里區', '萬里區', '石門區', '三芝區', '瑞芳區', '汐止區', '平溪區', '貢寮區', '雙溪區', '深坑區', '石碇區', '新店區', '坪林區', '烏來區', '中和區', '永和區', '土城區', '三峽區', '樹林區', '鶯歌區', '三重區', '蘆洲區', '五股區'], 基隆市: ['仁愛區', '中正區', '信義區', '中山區', '安樂區', '暖暖區', '七堵區'], 桃園市: ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '龜山區', '龍潭區', '大溪區', '大園區', '觀音區', '新屋區', '復興區'], 新竹縣: ['竹北市', '竹東鎮', '新埔鎮', '關西鎮', '峨眉鄉', '寶山鄉', '北埔鄉', '橫山鄉', '芎林鄉', '湖口鄉', '新豐鄉', '尖石鄉', '五峰鄉'], 新竹市: ['東區', '北區', '香山區'], 苗栗縣: ['苗栗市', '通霄鎮', '苑裡鎮', '竹南鎮', '頭份鎮', '後龍鎮', '卓蘭鎮', '西湖鄉', '頭屋鄉', '公館鄉', '銅鑼鄉', '三義鄉', '造橋鄉', '三灣鄉', '南庄鄉', '大湖鄉', '獅潭鄉', '泰安鄉'], 臺中市: ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '東勢區', '石岡區', '新社區', '和平區', '神岡區', '潭子區', '大雅區', '大肚區', '龍井區', '沙鹿區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'], 南投縣: ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'], 彰化縣: ['彰化市', '員林鎮', '和美鎮', '鹿港鎮', '溪湖鎮', '二林鎮', '田中鎮', '北斗鎮', '花壇鄉', '芬園鄉', '大村鄉', '永靖鄉', '伸港鄉', '線西鄉', '福興鄉', '秀水鄉', '埔心鄉', '埔鹽鄉', '大城鄉', '芳苑鄉', '竹塘鄉', '社頭鄉', '二水鄉', '田尾鄉', '埤頭鄉', '溪州鄉'], 雲林縣: ['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '莿桐鄉', '林內鄉', '古坑鄉', '大埤鄉', '崙背鄉', '二崙鄉', '麥寮鄉', '臺西鄉', '東勢鄉', '褒忠鄉', '四湖鄉', '口湖鄉', '水林鄉', '元長鄉'], 嘉義縣: ['太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'], 嘉義市: ['東區', '西區'], 臺南市: ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'], 高雄市: ['楠梓區', '左營區', '鼓山區', '三民區', '鹽埕區', '前金區', '新興區', '苓雅區', '前鎮區', '小港區', '旗津區', '鳳山區', '大寮區', '鳥松區', '林園區', '仁武區', '大樹區', '大社區', '岡山區', '路竹區', '橋頭區', '梓官區', '彌陀區', '永安區', '燕巢區', '田寮區', '阿蓮區', '茄萣區', '湖內區', '旗山區', '美濃區', '內門區', '杉林區', '甲仙區', '六龜區', '茂林區', '桃源區', '那瑪夏區'], 屏東縣: ['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '霧台鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉', '三地門鄉'], 宜蘭縣: ['宜蘭市', '羅東鎮', '蘇澳鎮', '頭城鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'], 花蓮縣: ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '秀林鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '萬榮鄉', '富里鄉', '卓溪鄉'], 臺東縣: ['臺東市', '成功鎮', '關山鎮', '長濱鄉', '海端鄉', '池上鄉', '東河鄉', '鹿野鄉', '延平鄉', '卑南鄉', '金峰鄉', '大武鄉', '達仁鄉', '綠島鄉', '蘭嶼鄉', '太麻里鄉'], 澎湖縣: ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'], 金門縣: ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'], 連江縣: ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉']
    }; const Q = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('div', {
        staticClass: 'store-item'
      }, [r('div', {
        staticClass: 'store-infos'
      }, [r('h3', [t._v(t._s(t.store.name))]), r('span', {
        staticClass: 'distance-label'
      }, [t._v(t._s(t.distance))]), r('div', {
        staticClass: 'info-item'
      }, [r('i', {
        staticClass: 'fa fa-map-marker-alt'
      }), r('span', [t._v(t._s(t.store.address))])]), r('div', {
        staticClass: 'info-item'
      }, [r('i', {
        staticClass: 'fa fa-phone-square'
      }), r('a', {
        attrs: {
          href: `tel: ${t.store.phone}`
        }
      }, [t._v(t._s(t.store.phone))])]), r('div', {
        staticClass: 'info-item'
      }, [r('i', {
        staticClass: 'fa fa-store-alt'
      }), r('span', [t._v(t._s(t.availableStatus))])]), r('div', {
        directives: [{
          name: 'show', rawName: 'v-show', value: t.hasNote, expression: 'hasNote'
        }],
        staticClass: 'info-item'
      }, [r('i', {
        staticClass: 'fa fa-notes-medical'
      }), r('span', [t._v(t._s(t.store.note))])])]), r('div', {
        staticClass: 'mask-infos'
      }, [r('div', {
        staticClass: 'mask-num',
        class: t.adultStatus,
        attrs: {
          'data-num': t.store.mask_adult
        }
      }, [r('h4', [t._v('成人口罩數量')]), r('running-number', {
        attrs: {
          target: t.store.mask_adult
        }
      })], 1), r('div', {
        staticClass: 'mask-num',
        class: t.childStatus,
        attrs: {
          'data-num': t.store.mask_child
        }
      }, [r('h4', [t._v('幼童口罩數量')]), r('running-number', {
        attrs: {
          target: t.store.mask_child
        }
      })], 1)])]);
    }; const W = []; const X = (r('7db0'), r('a9e3'), r('ac1f'), r('5319'), r('1276'), function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('span', {
        staticClass: 'runing-number'
      }, [t._v(t._s(t.visiableNumber))]);
    }); const tt = []; const et = {
      name: 'RuningNumber',
      data() {
        return {
          visiableNumber: 0
        };
      },
      props: {
        target: {
          type: Number, default() { return 0; }
        }
      },
      mounted() { this.run(); },
      methods: {
        run() { const t = Math.round(0.1 * (this.target - this.visiableNumber)); t === 0 ? this.visiableNumber = this.target : (this.visiableNumber += t, window.requestAnimationFrame(this.run)); }
      }
    }; const rt = et; const nt = (r('3f31'), Object(l.a)(rt, X, tt, !1, null, null, null)); const at = nt.exports; const st = {
      0: '星期日', 1: '星期一', 2: '星期二', 3: '星期三', 4: '星期四', 5: '星期五', 6: '星期六'
    }; const it = {
      0: '', 1: '上午', 2: '下午', 3: '晚上'
    }; const ot = {
      props: {
        store: Object, nearby: Number
      },
      data() {
        return {
          colors: ['grey', 'pink', 'orange', 'blue']
        };
      },
      components: {
        RunningNumber: at
      },
      computed: {
        adultStatus() { const t = Math.min(Math.ceil(this.store.mask_adult / 50), this.colors.length - 1); return this.colors[t]; }, childStatus() { const t = Math.min(Math.ceil(this.store.mask_child / 15), this.colors.length - 1); return this.colors[t]; }, distance() { return this.nearby < 1 ? ''.concat(Math.floor(1e3 * this.nearby), 'm') : ''.concat(Math.floor(10 * this.nearby) / 10, 'km'); }, availableStatus() { const t = this.store.available; const e = t.split('、'); const r = new Date(); const n = st[r.getDay()]; const a = it[Math.floor(r.getHours() / 6)]; return e.find((t => t.includes(n + a))).replace('看診', '營業').replace('休診', '休息') || '無營業資訊'; }, hasNote() { return this.store.note !== '-'; }
      },
      name: 'Store'
    }; const ct = ot; const ut = (r('d1d6'), Object(l.a)(ct, Q, W, !1, null, null, null)); const lt = ut.exports; const pt = function () {
      const t = this; const e = t.$createElement; const r = t._self._c || e; return r('label', {
        staticClass: 'switch'
      }, [r('input', {
        attrs: {
          type: 'checkbox'
        },
        domProps: {
          checked: t.checked
        },
        on: {
          change(e) { return t.$emit('change', e.target.checked); }
        }
      }), r('span', {
        staticClass: 'slider'
      }), r('span', {
        staticClass: 'knobs'
      })]);
    }; const dt = []; const ft = {
      name: 'VSwitch',
      model: {
        prop: 'checked', event: 'change'
      },
      props: {
        checked: Boolean
      }
    }; const ht = ft; const mt = (r('4e2e'), Object(l.a)(ht, pt, dt, !1, null, '71d7d702', null)); const vt = mt.exports; function bt(t, e) { const r = Object.keys(t); if (Object.getOwnPropertySymbols) { let n = Object.getOwnPropertySymbols(t); e && (n = n.filter((e => Object.getOwnPropertyDescriptor(t, e).enumerable))), r.push.apply(r, n); } return r; } function yt(t) {
      for (let e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {
        }; e % 2 ? bt(Object(r), !0).forEach(((e) => { Object(O.a)(t, e, r[e]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : bt(Object(r)).forEach(((e) => { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)); }));
      } return t;
    } const gt = {
      name: 'StroeList',
      components: {
        Store: lt, VMenu: d, VSwitch: vt
      },
      data() {
        return {
          searchMode: 'nearby', city: '新北市', district: '中和區', keyword: '', radius: 1.5, page: 1, numberOfPage: 12, isShowController: !1, isHidden: !0, twArea: K
        };
      },
      watch: {
        city() { const t = Object(B.a)(this.districtsOptions, 1); const e = t[0]; this.district = e; }, storeCounter() { this.storeCounter === 0 && this.searchMode === 'nearby' && (this.radius += 0.5); }
      },
      mounted() { window.addEventListener('scroll', this.scrollHandler); },
      beforeDestroy() { window.removeEventListener('scroll'); },
      computed: {
        cityOptions() { return Object.keys(this.twArea); },
        districtsOptions() { return this.cityOptions.includes(this.city) ? this.twArea[this.city] : []; },
        userPosition() { return this.$store.state.userPosition || z.center; },
        stores() { return this.$store.state.stores.features || []; },
        distanceStores() {
          const t = this; return this.stores.map((e => yt({
          }, e, {
            nearby: G.calcDistance(t.userPosition, e.geometry.coordinates)
          })));
        },
        nameFilter() { const t = this; return this.distanceStores.filter((e => e.properties.name.includes(t.keyword) || e.properties.address.includes(t.keyword))); },
        areaFilter() { const t = this; return this.distanceStores.filter((e => e.properties.county === t.city && e.properties.town === t.district)); },
        nearbyFilter() { const t = this; return this.distanceStores.filter((e => e.nearby <= t.radius)); },
        storeFilter() {
          const t = {
            name: this.nameFilter, area: this.areaFilter, nearby: this.nearbyFilter
          }; return t[this.searchMode];
        },
        storeCounter() { return this.storeFilter.length; },
        visiableStores() { const t = this; const e = this.storeFilter.filter((e => !t.isHidden || e.properties.mask_adult > 0)); return e.sort(((t, e) => t.nearby - e.nearby)).slice(0, this.page * this.numberOfPage); },
        resultTips() {
          const t = {
            name: '根據關鍵字 '.concat(this.keyword), area: '在 '.concat(this.city).concat(this.district, '內'), nearby: '距離您 '.concat(this.radius, ' 公里內')
          }; return ''.concat(t[this.searchMode], '，共找到').concat(this.storeCounter, '筆藥局資訊');
        }
      },
      methods: {
        scrollHandler() { window.innerHeight + window.scrollY + 200 >= document.body.scrollHeight && (this.page += 1); }
      }
    }; const wt = gt; const Ot = (r('cd08'), Object(l.a)(wt, J, Y, !1, null, '3509ab24', null)); const _t = Ot.exports; n.a.use(R.a); const kt = [{
      name: 'map', path: '/map', component: V
    }, {
      name: 'list', path: '/list', component: _t
    }, {
      path: '*', component: _t
    }]; const jt = new R.a({
      routes: kt
    }); r('15f5'); n.a.config.productionTip = !1, new n.a({
      render(t) { return t(v); }, store: E, router: jt
    }).$mount('#app');
  },
  '5c0b': function (t, e, r) {
    const n = r('9c0c'); const a = r.n(n); a.a;
  },
  '7cf3': function (t, e, r) {},
  '8fca': function (t, e, r) {},
  '9c0c': function (t, e, r) {},
  b568(t, e, r) {
    const n = r('0e9b'); const a = r.n(n); a.a;
  },
  bf81(t, e, r) { t.exports = `${r.p}img/down.c4aff9c3.svg`; },
  c15e(t, e, r) {},
  cd08(t, e, r) {
    const n = r('08d8'); const a = r.n(n); a.a;
  },
  d1d6(t, e, r) {
    const n = r('c15e'); const a = r.n(n); a.a;
  },
  fa08(t, e, r) {
    const n = r('3093'); const a = r.n(n); a.a;
  }
}));
// # sourceMappingURL=app.80509c4d.js.map
