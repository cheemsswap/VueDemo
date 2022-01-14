<template>
  <div class="count">
    <h1>当前的求和为:{{ sum }}</h1>
    <h3>当前的求和放大10倍为:{{ bigsum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3>Person组件的人数为:{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="subsum(n)">-</button>
    <button @click="addsumOdd(n)">当前何求为奇数时再相加</button>
    <button @click="addsumWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState("count", ["sum", "school", "subject"]),
    ...mapState("person", ["personList"]),
    ...mapGetters({ bigsum: "count/bigsum" }),
  },
  methods: {
    add() {
      this.$store.commit("count/ADDSUM", this.n);
    },
    ...mapActions("count", ["addsum", "subsum", "addsumOdd", "addsumWait"]),
  },
};
</script>

<style>
.count h3:nth-of-type(3) {
  color: red;
}
button {
  margin-left: 10px;
}
</style>