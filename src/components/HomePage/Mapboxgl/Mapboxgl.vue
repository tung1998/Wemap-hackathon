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
  const map = new mapboxgl.Map({
  container: 'myMap',
  style: 'https://apis.wemap.asia/vector-tiles/styles/osm-bright/style.json?key=ZpIVSmYKNucNvxlHgRFRVBuj'
  });
}
</script>

<style scoped>
</style>
