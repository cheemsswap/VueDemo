<template>
  <input
    @keyup.enter="add"
    v-model="text"
    type="text"
    placeholder="请输入你的任务名称，按回车键确认"
  />
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      text: "",
    };
  },
  props: {
    addWork: Function,
  },
  methods: {
    add() {
      if (this.text.trim() === "") return;
      const work = { id: nanoid(), name: this.text, done: false };
      //this.addWork(work);
      this.$emit("addWork", work);
      this.text = "";
    },
  },
};
</script>

<style scoped>
/*header*/
input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>