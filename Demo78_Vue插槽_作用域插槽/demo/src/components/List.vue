<template>
  <div class="card">
    <h3>{{ games.title }}</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: {
        title: "游戏",
        data: ["黄金矿工", "原神", "王者荣耀", "英雄联盟"],
      },
    };
  },
};
</script>

<style>
.card {
  width: 300px;
  height: 500px;
  background-color: beige;
}
.card > h3 {
  width: 100%;
  height: 50px;
  background-color: blue;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>