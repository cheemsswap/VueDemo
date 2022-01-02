<template>
  <li @mouseenter="s" @mouseleave="h">
    <label>
      <input type="checkbox" v-model="work.checked" />
      <span>{{ work.name }}</span>
    </label>
    <button @click="dw" class="btn btn-danger" v-show="sc">删除</button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      sc: false,
    };
  },
  props: {
    work: Object,
    deleteWork: Function,
  },
  methods: {
    s() {
      this.sc = true;
    },
    h() {
      this.sc = false;
    },
    dw() {
      this.deleteWork(this.work.name);
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
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>