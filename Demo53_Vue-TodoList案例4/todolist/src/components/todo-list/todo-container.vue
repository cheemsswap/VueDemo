<template>
  <div class="todo-container">
    <todo-wrap
      :works="works"
      :addWork="addWork"
      :updataWorkDeoe="updataWorkDeoe"
      :deleteWork="deleteWork"
      :updataWorkAllDeoe="updataWorkAllDeoe"
      :deleteWorkIsDeoeTrue="deleteWorkIsDeoeTrue"
    ></todo-wrap>
  </div>
</template>

<script>
import todoWrap from "./com/todo-wrap.vue";
export default {
  components: { todoWrap },
  data() {
    return {
      works: [],
    };
  },
  created() {
    let worksStr = localStorage.getItem("works");
    if (worksStr) this.works = JSON.parse(worksStr);
  },
  watch: {
    works: {
      deep: true,
      handler(value) {
        let worksStr = JSON.stringify(value);
        localStorage.setItem("works", worksStr);
      },
    },
  },
  methods: {
    //提供给header 添加数据
    addWork(workObj) {
      this.works.unshift(workObj);
    },
    //提供给main->item 修改是否选中
    updataWorkDeoe(id) {
      this.works.forEach((e) => {
        if (e.id === id) this.$set(e, "done", !e.done);
      });
    },
    //提供给main->item 删除指定id的
    deleteWork(id) {
      this.works = this.works.filter((e) => {
        return e.id != id;
      });
    },
    //提供给footer 全选和取消全选
    updataWorkAllDeoe(done) {
      this.works.forEach((e) => {
        this.$set(e, "done", done);
      });
    },
    //提供给 footer 删除所有已选的
    deleteWorkIsDeoeTrue() {
      this.works = this.works.filter((e) => {
        return e.done == false;
      });
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