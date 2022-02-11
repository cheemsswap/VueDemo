<template>
  <div class="hong">
    <h2>女儿:小红有存款 {{ money }}</h2>
    <button @click="addFather(50)">给父亲50元</button> <br />
    <button @click="subFather(50)">问父亲要50元</button><br />
  </div>
</template>

<script>
import { addFather } from "./mixins";
export default {
  name: "Hong",
  data() {
    return {
      money: 5000,
    };
  },
  mixins: [addFather],
  methods: {
    subFather(val) {
      this.$parent.money -= val;
      this.money += val;
    },
  },
};
</script>

<style scoped>
.hong {
  background-color: rgb(41, 255, 123);
  padding: 20px;
}
</style>