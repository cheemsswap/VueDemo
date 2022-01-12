<template>
  <div id="app">
    <list>
      <template v-slot:default="{ games }">
        <ul>
          <li v-for="d of games.data" :key="d">{{ d }}</li>
        </ul>
      </template>
    </list>
    <list>
      <template v-slot:default="{ games }">
        <ol>
          <li v-for="d of games.data" :key="d">{{ d }}</li>
        </ol>
      </template>
    </list>
    <list>
      <template v-slot:default="{ games }">
        <h2 v-for="d of games.data" :key="d">{{ d }}</h2>
      </template>
    </list>
  </div>
</template>

<script>
import List from "./components/List.vue";
export default {
  name: "App",
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
h2 {
  display: flex;
  justify-content: center;
}
</style>
