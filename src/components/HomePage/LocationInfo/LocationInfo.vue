<template src='./LocationInfo.html'></template>

<script>
export default {
  name: "Mapboxgl",
  props: { locationData: Object },
  data() {
    return {
      address: ''
    };
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
