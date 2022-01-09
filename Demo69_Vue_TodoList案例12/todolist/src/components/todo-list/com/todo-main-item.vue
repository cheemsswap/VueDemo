<template>
  <li>
    <label>
      <input type="checkbox" v-model="isDone" />
      <span v-show="!isEdit">{{ name }}</span>
      <input
        @keydown.enter="save"
        v-show="isEdit"
        type="text"
        v-model="beforename"
        ref="inputs"
      />
    </label>
    <button @click="del" class="btn btn-danger">删除</button>
    <button @click="update" v-show="!isEdit" class="btn btn-updata">
      修改
    </button>
    <button @click="save" v-show="isEdit" class="btn btn-save">保存</button>
    <button @click="cancel" v-show="isEdit" class="btn btn-cancel">取消</button>
  </li>
</template>

<script>
export default {
  props: {
    work: Object,
  },
  computed: {
    isDone: {
      set() {
        this.$bus.$emit("setWorkDone", this.work.id);
      },
      get() {
        return this.work.done;
      },
    },
    name: {
      set(val) {
        this.$bus.$emit("setName", this.work.id, val);
      },
      get() {
        return this.work.name;
      },
    },
    beforename: {
      set(val) {
        this.$bus.$emit("setBeforeName", this.work.id, val);
      },
      get() {
        return this.work.beforename;
      },
    },
    isEdit: {
      set(flag) {
        this.$bus.$emit("setEdit", this.work.id, flag);
      },
      get() {
        return this.work.isEdit;
      },
    },
  },
  methods: {
    update() {
      this.isEdit = true;
      //当组件发生更新的时候 渲染后 会执行此时的回调函数
      this.$nextTick(() => {
        this.$refs.inputs.focus();
      });
    },
    cancel() {
      this.isEdit = false;
      this.beforename = this.work.name;
    },
    save() {
      this.isEdit = false;
      this.name = this.beforename;
    },
    del() {
      this.$bus.$emit("delwork", this.work.id);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  margin-right: 10px;
}
li:hover button {
  display: block;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>