<template>
  <div class="todo-container">
    <todo-wrap
      :works="works"
      :addWork="addWork"
      :updataWork="updataWork"
      :deleteWork="deleteWork"
    ></todo-wrap>
  </div>
</template>

<script>
import todoWrap from "./com/todo-wrap.vue";
export default {
  data() {
    return {
      works: [
        {
          name: "学习",
          checked: false,
        },
        {
          name: "吃饭",
          checked: false,
        },
        {
          name: "睡觉",
          checked: false,
        },
      ],
    };
  },
  components: { todoWrap },
  methods: {
    addWork(e) {
      if (e.target.value == false) return;
      let f = false;
      this.works.forEach((element) => {
        if (element.name == e.target.value) {
          f = true;
          return;
        }
      });
      if (f) {
        alert("无法添加重复项");
        return;
      }
      this.works.push({
        name: e.target.value,
        checked: false,
      });
      e.target.value = "";
    },
    updataWork(work) {
      this.works = work;
    },
    deleteWork(name) {
      let newWork = this.works.filter((e) => {
        return name != e.name;
      });
      this.works = newWork;
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
</style>