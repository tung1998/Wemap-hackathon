<template src='./Mapboxgl.html'></template>

<script>
export default {
  name: "Mapboxgl",
  mounted
};

//methods
function addStudent(data) {
  this.StudentList.push(data);
}
//cycleHook
function mounted() {
  resizeMap(this)
  var api =
    "https://apis.wemap.asia/vector-tiles/styles/osm-bright/style.json?key=ZpIVSmYKNucNvxlHgRFRVBuj";
  var map = new mapboxgl.Map({
    container: "myMap",
    style: api,
    center: [105.7827015, 21.0382399],
    zoom: 16
  });
}

function resizeMap(vue){
  let windowHeight = window.innerHeight
  let pageHeaderHeight = $('.page-header').outerHeight()
  let headerHeight = $('.header').outerHeight()
  vue.$refs.myMap.style.height = `${windowHeight - pageHeaderHeight - headerHeight}px`
}
</script>

<style scoped>

</style>
