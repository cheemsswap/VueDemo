<template>
  <div>
    <h2>当前求和为 {{ $store.state.sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addOdd">当前求和为奇数才加，偶数不加</button>
    <button @click="addWait">等3S后再加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    add() {
      // this.$store.dispatch("add", this.n);
      this.$store.commit("ADD", this.n);
    },
    sub() {
      this.$store.dispatch("sub", this.n);
    },
    addOdd() {
      this.$store.dispatch("addOdd", this.n);
    },
    addWait() {
      this.$store.dispatch("addWait", this.n);
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>