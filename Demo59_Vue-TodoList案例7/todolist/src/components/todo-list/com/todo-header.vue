<template>
  <input
    v-model="name"
    type="text"
    placeholder="请输入你的任务名称，按回车键确认"
    @keydown.enter="add"
  />
</template>

<script>
import { PubSub } from "pubsub-js";
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      if (this.name.trim() == "") return;
      const work = {
        id: nanoid(),
        name: this.name,
        done: false,
      };
      PubSub.publish("addWork", work);
      this.name = "";
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