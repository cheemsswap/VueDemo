<template>
  <li>
    <label>
      <input type="checkbox" v-model="isDone" />
      <span>{{ work.name }}</span>
    </label>
    <button @click="del" class="btn btn-danger">删除</button>
  </li>
</template>

<script>
import PubSub from "pubsub-js";
export default {
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