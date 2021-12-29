<template>
  <div>
    <MySchool />
    <Student />
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    MySchool,
    Student,
  },
};
</script>

<style>
</style>