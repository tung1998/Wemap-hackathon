<template src='./LocationInfo.html'></template>

<script>
import { getLocationByCoordinates } from "../../../api/api";
export default {
  name: "Mapboxgl",
  props: { locationData: Object },
  data() {
    return {
      address: ""
    };
  },
  watch: {
    locationData: mounted
  },
  mounted
};

//cycleHook
function mounted() {
  getLocationByCoordinates(
    this.locationData.geometry.coordinates[1],
    this.locationData.geometry.coordinates[0]
  ).then(result => {
    console.log(result);
    let data = result.data.features[0].properties;
    this.address = `${data.name?data.name+'-':''}${data.city?data.city+'-':''}${data.state?data.state='-':''}${data.country?data.country:''}`;
  });
}
</script>

<style scoped>
</style>
