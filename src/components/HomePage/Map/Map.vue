<template src='./Map.html'></template>

<!--<script src="./Login.js"></script>-->
<script>
export default {
  name: "map",
  data() {
    return {
      StudentList: [],
      onEditing: false
    };
  },
  methods: {
    addStudent,
    reloadTable: created
  },
  created
};

//methods
function addStudent(data) {
  this.StudentList.push(data);
}
//cycleHook
function created() {
  getAllStudent(this.$cookies.get("accessToken"))
    .then(result => {
      this.StudentList = result.data;
    })
    .catch(handleError);
}
</script>

<style scoped>
</style>
