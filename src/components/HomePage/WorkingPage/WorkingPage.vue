<template src='./WorkingPage.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
import { handleError } from '../../../helper/function';

export default {
  name: "WorkingPage",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    logout,
    routeClick
  }
};

function routeClick(){
  console.log(1)
  $('.toggle-sidebar-left').trigger('click')
}

function logout() {
  this.$router.push({name:'login'})
  // deleteAccessToken(this.$cookies.get('accessToken')).then(result=>{
  //   this.$cookies.remove("accessToken");
  // }).catch(handleError)
}
</script>

<style scoped>

</style>
