<template>
  <div class="todo-footer" v-show="works.length">
    <label>
      <input type="checkbox" v-model="DeoeAllTrue" />
    </label>
    <span>
      <span>已完成{{ DeoeTrueLen }}</span> / 全部{{ works.length }}
    </span>
    <button class="btn btn-danger" @click="deleteWorkIsDeoeTrue">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  props: {
    works: Array,
    updataWorkAllDeoe: Function,
    deleteWorkIsDeoeTrue: Function,
  },
  computed: {
    DeoeTrueLen() {
      return this.works.reduce((i, w) => {
        return i + (w.done ? 1 : 0);
      }, 0);
    },
    DeoeAllTrue: {
      set(e) {
        this.updataWorkAllDeoe(e);
      },
      get() {
        return this.DeoeTrueLen == this.works.length;
      },
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