<template>
  <div id="app">
    <student @zdy="demo"></student>
    <school ref="school"></school>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student, School },
  methods: {
    demo(value) {
      console.log("APP获取到了", value);
    },
  },
  mounted() {
    this.$refs.school.$on("zdy", this.demo);
  },
};
</script>

<style>
</style>
