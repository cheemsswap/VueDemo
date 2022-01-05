<template>
  <div class="todo-container">
    <todo-wrap ref="todowrap" :works="works"></todo-wrap>
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
  mounted() {
    this.$refs.todowrap.$refs.todoheader.$on("addWork", (workObj) => {
      this.works.unshift(workObj);
    });
    this.$refs.todowrap.$refs.todomain.$refs.todomainitem.forEach((element) => {
      element.$on("updataWorkDeoe", (id) => {
        this.works.forEach((e) => {
          if (e.id === id) this.$set(e, "done", !e.done);
        });
      });
    });
    this.$refs.todowrap.$refs.todomain.$refs.todomainitem.forEach((element) => {
      element.$on("deleteWork", (id) => {
        this.works = this.works.filter((e) => {
          return e.id != id;
        });
      });
    });
    this.$refs.todowrap.$refs.todofooter.$on("updataWorkAllDeoe", (done) => {
      this.works.forEach((e) => {
        this.$set(e, "done", done);
      });
    });

    this.$refs.todowrap.$refs.todofooter.$on("deleteWorkIsDeoeTrue", () => {
      this.works = this.works.filter((e) => {
        return e.done == false;
      });
    });
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