<template>
  <div>
    <h2>当前求和为{{ sum }}</h2>
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
      sum: 0,
      n: 1,
    };
  },
  methods: {
    add() {
      this.sum += this.n;
    },
    sub() {
      this.sum -= this.n;
    },
    addOdd() {
      if (this.sum % 2) this.sum += this.n;
    },
    addWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 3000);
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>