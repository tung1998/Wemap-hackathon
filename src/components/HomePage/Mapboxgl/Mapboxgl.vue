<template src='./Mapboxgl.html'></template>

<script>
import {
  location3Star,
  location2Star,
  location1Star
} from "../../../helper/testData";
import PeliasGeocoder from '../../../assets/js/pelias-geocoder.js';

export default {
  name: "Mapboxgl",
  data() {
    return {
      locationPoint: location1Star.concat(location2Star).concat(location3Star),
      locationOnShow: {}
    };
  },
  mounted
};

//cycleHook
function mounted() {
  resizeMap(this);
  let myMap = initMap();
  // let myLayer = initLayer(myMap);
  renderMarkers(this.locationPoint, myMap);

  initEvent(this);
}

function initMap() {
  var api =
    "https://apis.wemap.asia/vector-tiles/styles/osm-bright/style.json?key=ZpIVSmYKNucNvxlHgRFRVBuj";
  let map = new mapboxgl.Map({
    container: "myMap",
    style: api,
    center: [105.8227015, 21.0382399],
    zoom: 11
  })
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
  )
  var iconMarkerEl = document.createElement("div");
iconMarkerEl.innerHTML = "<div class='marker-arrow'></div>" +
  "<div class='marker-pulse'></div>";
  map.addControl(new PeliasGeocoder({
    params: { 'key': 'ZpIVSmYKNucNvxlHgRFRVBuj' },
    url: 'https://apis.wemap.asia/geocode-1',
    flyTo: 'hybrid',
    wof: true,
    useFocusPoint: true,
    marker: {
      icon: iconMarkerEl,
      multiple: false
    },
    customAttribution: 'Powered by <a style="color: rgb(0, 148, 255); text-decoration: none;" href="https://wemap.asia/" title="Attributions" target="_blank" style=""><img style="max-height: 1em;" src="https://wemap.asia/assets/images/favicon.png"/><b>WEMAP</b></a>'
}));
  return map
}

function resizeMap(vue) {
  let windowHeight = window.innerHeight;
  // let pageHeaderHeight = $(".page-header").outerHeight();
  let headerHeight = $(".header").outerHeight();
  vue.$refs.myMap.style.height = `${windowHeight - headerHeight}px`;
}

function renderMarkers(datas, map) {
  datas.forEach(data => {
    var el = document.createElement("div");
    el.data = data;
    el.className = data.properties.className;
    el.style.backgroundImage = `url('${require("../../../assets/img/location/" +
      data.properties.imgName)}')`;
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(data.geometry.coordinates).addTo(map);
  });
}

function initEvent(vue) {
  $(".marker").on("click", ev => {
    vue.locationOnShow = ev.currentTarget.data;
    console.log(ev.currentTarget.data)
    if (vue.$route.name == "map")
      vue.$router.push({
        name: "locationInfo",
        params: {
          locationData: vue.locationOnShow
        }
      });
  });
}
</script>

<style scoped>
</style>
