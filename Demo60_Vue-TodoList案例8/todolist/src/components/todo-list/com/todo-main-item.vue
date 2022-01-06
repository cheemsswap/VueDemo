<template>
  <li>
    <label>
      <input type="checkbox" v-model="isDone" />
      <span v-show="!isEdit">{{ work.name }}</span>
      <input @keyup.enter="save" v-show="isEdit" type="text" v-model="name" />
    </label>
    <button @click="del" class="btn btn-danger">删除</button>
    <button @click="update" class="btn btn-edit" v-show="!isEdit">修改</button>
    <button @click="cancel" class="btn btn-cancel" v-show="isEdit">取消</button>
    <button @click="save" class="btn btn-save" v-show="isEdit">保存</button>
  </li>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  data() {
    return {
      isEdit: false,
      name: this.work.name,
    };
  },
  props: ["work"],
  computed: {
    isDone: {
      set() {
        PubSub.publish("updataDone", this.work.id);
      },
      get() {
        return this.work.done;
      },
    },
  },
  methods: {
    del() {
      PubSub.publish("deleteWork", this.work.id);
    },
    update() {
      this.isEdit = true;
    },
    cancel() {
      this.isEdit = false;
      this.name = this.work.name;
    },
    save() {
      if (this.name.trim() == "") return;
      this.name = this.name.trim();
      this.isEdit = false;
      PubSub.publish("updateWorkName", [this.work.id, this.name]);
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