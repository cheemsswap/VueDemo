<template>
  <div class="todo-container">
    <todo-wrap :works="works"></todo-wrap>
  </div>
</template>

<script>
import todoWrap from "./com/todo-wrap.vue";
export default {
  components: { todoWrap },
  data() {
    return {
      works: JSON.parse(localStorage.getItem("works")) || [],
    };
  },
  watch: {
    works: {
      deep: true,
      handler() {
        localStorage.setItem("works", JSON.stringify(this.works));
      },
    },
  },
  mounted() {
    this.$bus.$on("addWork", (e) => {
      this.works.unshift(e);
    });
    this.$bus.$on("updateDone", (id) => {
      this.works.forEach((e) => {
        if (e.id == id) this.$set(e, "done", !e.done);
      });
    });
    this.$bus.$on("deleteWork", (id) => {
      this.works = this.works.filter((e) => {
        return e.id != id;
      });
    });
    this.$bus.$on("allWorkDone", (flag) => {
      this.works.forEach((e) => {
        this.$set(e, "done", flag);
      });
    });
    this.$bus.$on("deleteWorkDone", () => {
      this.works = this.works.filter((e) => {
        return !e.done;
      });
    });
  },
  beforeDestroy() {
    this.$off("updateDone");
    this.$off("deleteWork");
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