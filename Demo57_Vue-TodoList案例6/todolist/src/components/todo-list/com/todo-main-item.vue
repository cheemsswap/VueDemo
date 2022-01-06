<template>
  <li>
    <label>
      <input type="checkbox" v-model="done" />
      <span>{{ work.name }}</span>
    </label>
    <button @click="deletework" class="btn btn-danger">删除</button>
  </li>
</template>

<script>
export default {
  props: ["work"],
  computed: {
    done: {
      get() {
        return this.work.done;
      },
      set() {
        this.$bus.$emit("updateDone", this.work.id);
      },
    },
  },
  methods: {
    deletework() {
      this.$bus.$emit("deleteWork", this.work.id);
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
  float: right;
  display: block;
  margin-top: 3px;
}
li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>