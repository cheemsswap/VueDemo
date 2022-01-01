<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "家里蹲大学",
      address: "家里",
    };
  },
};
</script> 
<style lang="css" scoped>
.demo {
  background-color: bisque;
}
</style>