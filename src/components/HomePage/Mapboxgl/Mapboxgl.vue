<template src='./Mapboxgl.html'></template>

<script>
import {
  location3Star,
  location2Star,
  location1Star
} from "../../../helper/testData";

export default {
  name: "Mapboxgl",
  data() {
    return {
      locationPoint: location3Star.concat(location2Star).concat(location1Star)
    };
  },
  mounted
};

//cycleHook
function mounted() {
  resizeMap(this);
  let myMap = initMap();
  myMap.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
  );
  renderMarkers(this.locationPoint, myMap);
}

function initMap() {
  var api =
    "https://apis.wemap.asia/vector-tiles/styles/osm-bright/style.json?key=ZpIVSmYKNucNvxlHgRFRVBuj";
  return new mapboxgl.Map({
    container: "myMap",
    style: api,
    center: [105.7827015, 21.0382399],
    zoom: 16
  });
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
    el.className = data.properties.className;
    el.style.backgroundImage = `url("~@/assets/img/${data.properties.imgName}")`;
    console.log(el);

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(data.geometry.coordinates).addTo(map);
  });
}
</script>

<style scoped>
</style>
