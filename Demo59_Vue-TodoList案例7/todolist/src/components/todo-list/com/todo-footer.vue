<template>
  <div class="todo-footer" v-show="works.length">
    <label>
      <input type="checkbox" v-model="allDone" />
    </label>
    <span>
      <span> 已完成{{ DoneIsTrueNum }} </span>
      / 全部{{ works.length }}
    </span>
    <button class="btn btn-danger" @click="deleteDoneTrue">
      清除已完成任务
    </button>
  </div>
</template>

<script>
import { PubSub } from "pubsub-js";
export default {
  props: ["works"],
  computed: {
    allDone: {
      get() {
        return this.DoneIsTrueNum == this.works.length;
      },
      set(val) {
        PubSub.publish("updateDoneAll", val);
      },
    },
    DoneIsTrueNum() {
      return this.works.reduce((i, e) => {
        return i + (e.done ? 1 : 0);
      }, 0);
    },
  },
  methods: {
    deleteDoneTrue() {
      PubSub.publish("deleteDoneTrue");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>