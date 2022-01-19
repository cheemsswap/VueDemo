<template>
  <div class="col-xs-offset-2 col-xs-8 d-flex">
    <div class="page-header"><h2 @click="gohomepage">Vue Router Demo</h2></div>
    <button @click="drawback">后退</button>
    <button @click="forward">前进</button>
    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    drawback() {
      // this.$router.go(-1);
      this.$router.back();
    },
    forward() {
      // this.$router.go(1);
      this.$router.forward();
    },
    gohomepage() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>