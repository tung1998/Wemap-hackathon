<template src='./LocationInfo.html'></template>

<script>
export default {
  name: "Mapboxgl",
  props: { locationData: Object },
  data() {
    return {};
  },
  mounted
};

//cycleHook
function mounted() {
  console.log(this.locationData);
}
</script>

<style scoped>
</style>
