<template>
  <li>
    <label>
      <input type="checkbox" v-model="done" />
      <span>{{ Work.name }}</span>
    </label>
    <button class="btn btn-danger" @click="del">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    Work: Object,
  },
  computed: {
    done: {
      get() {
        return this.Work.done;
      },
      set(done) {
        this.$store.commit("UPDATAWORKDONE", [this.Work.id, done]);
      },
    },
  },
  methods: {
    del() {
      this.$store.commit("DELETEWORK", this.Work.id);
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