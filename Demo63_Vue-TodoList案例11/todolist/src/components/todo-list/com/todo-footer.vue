<template>
  <div class="todo-footer" v-show="works.length">
    <label>
      <input type="checkbox" v-model="isAllDone" />
    </label>
    <span>
      <span>已完成{{ workDoneNum }}</span> / 全部{{ works.length }}
    </span>
    <button @click="delDoneWork" class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    works: Array,
  },
  computed: {
    workDoneNum() {
      return this.works.reduce((i, e) => {
        return i + (e.done ? 1 : 0);
      }, 0);
    },
    isAllDone: {
      set(flag) {
        this.$bus.$emit("setAllDone", flag);
      },
      get() {
        return this.workDoneNum == this.works.length;
      },
    },
  },
  methods: {
    delDoneWork() {
      this.$bus.$emit("delDoneWork");
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