<template>
  <div class="demo">
    <h2>学校姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
};
</script> 
<style lang="css" scoped>
.demo {
  background-color: aquamarine;
}
</style>