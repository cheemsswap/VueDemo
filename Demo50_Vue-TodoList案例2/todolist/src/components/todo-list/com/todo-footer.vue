<template>
  <div class="todo-footer">
    <label>
      <input @click="allcheck" type="checkbox" v-model="check" />
    </label>
    <span>
      <span>已完成{{ num }}</span> / 全部{{ works.length }}
    </span>
    <button @click="deletechecked" class="btn btn-danger">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  props: {
    works: Array,
    updataWork: Function,
  },
  computed: {
    check: {
      set() {},
      get() {
        return this.num == this.works.length;
      },
    },
    num() {
      let checkedWork = this.works.filter((e) => {
        return e.checked;
      });
      return checkedWork.length;
    },
  },
  methods: {
    allcheck(e) {
      if (e.target.checked) {
        this.works.forEach((element) => {
          element.checked = true;
        });
      } else {
        this.works.forEach((element) => {
          element.checked = false;
        });
      }
    },
    deletechecked() {
      let newwork = this.works.filter((e) => {
        return e.checked == false;
      });
      this.updataWork(newwork);
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