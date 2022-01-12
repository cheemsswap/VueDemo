<template>
  <div id="app">
    <list :title="foods.title">
      <img slot="main" :src="foods.data" />
      <a href="#" slot="footer">点我</a>
    </list>
    <list :title="games.title">
      <ul slot="main">
        <li v-for="d of games.data" :key="d">{{ d }}</li>
      </ul>
      <div slot="footer" class="te">
        <a href="#">点我1</a>
        <a href="#">点我2</a>
      </div>
    </list>
    <list :title="films.title">
      <video slot="main" controls :src="films.data" />
    </list>
  </div>
</template>

<script>
import List from "./components/List.vue";
export default {
  name: "App",
  data() {
    return {
      foods: {
        title: "食物",
        data: require("./assets/cup.jpg"),
      },
      games: {
        title: "游戏",
        data: ["黄金矿工", "原神", "王者荣耀", "英雄联盟"],
      },
      films: {
        title: "电影",
        data: require("./assets/Video-16.mp4"),
      },
    };
  },
  components: { List },
};
</script>

<style>
#app {
  display: flex;
  justify-content: space-around;
}
ul {
  list-style: none;
}
li {
  display: flex;
  justify-content: start;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
.te {
  display: flex;
  justify-content: space-around;
}
</style>
