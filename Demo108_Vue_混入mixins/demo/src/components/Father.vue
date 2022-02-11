<template>
  <div class="father">
    <h2>父亲有存款 {{ money }}</h2>
    <button @click="subMing(100)">找小明借100元</button> <br />
    <button @click="addMing(100)">给小明100元</button><br />
    <button @click="subHong(50)">找小红借50元</button><br />
    <button @click="addHong(50)">给小红50元</button><br />
    <button @click="subAll(100)">找所有儿女借100元</button><br />
    <hr />
    <ming />
    <hr />
    <hong />
  </div>
</template>

<script>
import Hong from "./Hong.vue";
import Ming from "./Ming.vue";
export default {
  components: { Ming, Hong },
  name: "Father",
  data() {
    return {
      money: 1000,
    };
  },
  methods: {
    //! 不建议使用 $children 下标找 建议使用ref
    subMing(val) {
      this.$children[0].money -= val;
      this.money += val;
    },
    addMing(val) {
      this.$children[0].money += val;
      this.money -= val;
    },
    subHong(val) {
      this.$children[1].money -= val;
      this.money += val;
    },
    addHong(val) {
      this.$children[1].money += val;
      this.money -= val;
    },
    subAll(val) {
      this.$children[0].money -= val;
      this.$children[1].money -= val;
      this.money += val * 2;
    },
  },
};
</script>

<style scoped>
.father {
  background-color: aquamarine;
  padding: 20px;
}
</style>