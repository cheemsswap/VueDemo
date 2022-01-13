<template>
  <div id="app">
    <h2>当前求和为:{{ $store.state.sum }}</h2>
    <h2>当前求和的十倍为:{{ $store.getters.bigsum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    add() {
      // this.$store.commit("ADDSUM", this.n);
      this.$store.dispatch("addsum", this.n);
    },
    sub() {
      this.$store.commit("SUBSUM", this.n);
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
