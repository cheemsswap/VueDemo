<template>
  <div class="person">
    <h1>人员列表</h1>
    <h3>Count的组件的求和为:{{ sum }}</h3>
    <input type="text" name="" id="" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p of personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("count", ["sum"]),
    ...mapState("person", ["personList"]),
  },
  methods: {
    add() {
      if (this.name.trim() == "") return;
      this.addPerson(this.name);
      this.name = "";
    },
    ...mapActions("person", ["addPerson"]),
  },
};
</script>

<style>
.person h3:nth-of-type(1) {
  color: red;
}
</style>