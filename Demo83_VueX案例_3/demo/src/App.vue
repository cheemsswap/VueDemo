<template>
  <div id="app">
    <h2>当前的sum:{{ sum }}</h2>
    <h2>当前的name:{{ name }}</h2>
    <h2>当前的age:{{ age }}</h2>
    <h2>当前的school:{{ school }}</h2>
    <h2>当前的schoolAddrsss:{{ schoolAddress }}</h2>
    <button @click="add(1)">sum++</button>
    <button @click="ADD(1)">sum++</button>
    <hr />
    <h2>当前的bigsum:{{ bigsum }}</h2>
    <h2>当前的bigage:{{ bigage }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState({
      sum: "sum",
      name: "name",
      age: "age",
      school: "school",
      schoolAddress: "schoolAddress",
    }),

    // 对象写法
    // ...mapGetters({
    //   bigsum: "bigsum",
    //   bigage: "bigage",
    // }),
    // 数组写法
    ...mapGetters(["bigsum", "bigage"]),
  },
  methods: {
    ...mapMutations({ ADD: "ADD" }),
    ...mapActions(["add"]),
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
