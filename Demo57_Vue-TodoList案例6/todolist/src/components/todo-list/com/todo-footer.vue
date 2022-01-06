<template>
  <div class="todo-footer" v-show="works.length != 0">
    <label>
      <input type="checkbox" v-model="allDone" />
    </label>
    <span>
      <span>已完成{{ doneworkNum }}</span> / 全部{{ works.length }}
    </span>
    <button @click="delteWorkDone" class="btn btn-danger">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  props: ["works"],
  computed: {
    doneworkNum() {
      return this.works.reduce((i, e) => {
        return i + (e.done ? 1 : 0);
      }, 0);
    },
    allDone: {
      get() {
        return this.doneworkNum == this.works.length;
      },
      set(flag) {
        this.$bus.$emit("allWorkDone", flag);
      },
    },
  },
  methods: {
    delteWorkDone() {
      this.$bus.$emit("deleteWorkDone");
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