<template src='./Mapboxgl.html'></template>

<script>
export default {
  name: "Mapboxgl",
  data() {
    return {
      locationPoint: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [105.7827015, 21.0382399]
          },
          properties: {
            title: "Mapbox",
            description: "Đại học quốc gia Hà Nội"
          }
        },
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [105.8827015, 21.0382399]
          },
          properties: {
            title: "Mapbox",
            description: "San Francisco, California"
          }
        }
      ]
    };
  },
  mounted
};

//methods
function addStudent(data) {
  this.StudentList.push(data);
}
//cycleHook
function mounted() {
  resizeMap(this);
  let myMap = initMap();
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
  let pageHeaderHeight = $(".page-header").outerHeight();
  let headerHeight = $(".header").outerHeight();
  vue.$refs.myMap.style.height = `${windowHeight -
    pageHeaderHeight -
    headerHeight}px`;
}
function renderMarkers(datas, map) {
  datas.forEach(data => {
    var el = document.createElement("div");
    el.className = "marker";
    console.log(el)

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(data.geometry.coordinates).addTo(map);
  });
}
</script>

<style scoped>
.marker {
  background-image: url("/api/assets/img/logo.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
