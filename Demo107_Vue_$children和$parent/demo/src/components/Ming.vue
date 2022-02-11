<template>
  <div class="ming">
    <h2>儿子:小明有存款 {{ money }}</h2>
    <button @click="addFather(100)">给父亲100元</button> <br />
    <button @click="subFather(100)">问父亲要100元</button><br />
  </div>
</template>

<script>
export default {
  name: "Ming",
  data() {
    return {
      money: 2000,
    };
  },
  methods: {
    addFather(val) {
      this.$parent.money += val;
      this.money -= val;
    },
    subFather(val) {
      this.$parent.money -= val;
      this.money += val;
    },
  },
};
</script>

<style scoped>
.ming {
  background-color: brown;
  padding: 20px;
}
</style>