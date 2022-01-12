<template>
  <div class="todo-footer" v-show="Works.length != 0">
    <label>
      <input type="checkbox" v-model="isAllDoneTrue" />
    </label>
    <span>
      <span>已完成{{ DoneTrueNum }}</span>
      / 全部{{ Works.length }}
    </span>
    <button class="btn btn-danger" @click="delall">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    Works: Array,
  },
  computed: {
    DoneTrueNum() {
      return this.Works.reduce((i, o) => {
        return i + (o.done ? 1 : 0);
      }, 0);
    },
    isAllDoneTrue: {
      get() {
        return this.DoneTrueNum == this.Works.length;
      },
      set(done) {
        this.$store.commit("WORKALLDONE", done);
      },
    },
  },
  methods: {
    delall() {
      this.$store.commit("DLETEDONETRUEWORK");
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