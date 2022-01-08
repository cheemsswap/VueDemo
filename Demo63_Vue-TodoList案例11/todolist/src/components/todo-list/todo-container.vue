<template>
  <div class="todo-container">
    <todo-wrap :works="works"></todo-wrap>
  </div>
</template>

<script>
import todoWrap from "./com/todo-wrap.vue";
export default {
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
  components: { todoWrap },
  mounted() {
    this.$bus.$on("setWorkDone", (id) => {
      this.works.forEach((element) => {
        if (element.id === id) this.$set(element, "done", !element.done);
      });
    });
    this.$bus.$on("addWork", (e) => {
      this.works.unshift(e);
    });
    this.$bus.$on("setBeforeName", (id, beforename) => {
      this.works.forEach((e) => {
        if (e.id == id) this.$set(e, "beforename", beforename);
      });
    });
    this.$bus.$on("setName", (id, name) => {
      this.works.forEach((e) => {
        if (e.id == id) this.$set(e, "name", name);
      });
    });
    this.$bus.$on("setEdit", (id, flag) => {
      this.works.forEach((element) => {
        if (element.id === id) this.$set(element, "isEdit", flag);
      });
    });
    this.$bus.$on("delwork", (id) => {
      this.works = this.works.filter((e) => {
        return e.id != id;
      });
    });
    this.$bus.$on("setAllDone", (flag) => {
      this.works.forEach((e) => {
        this.$set(e, "done", flag);
      });
    });
    this.$bus.$on("delDoneWork", () => {
      this.works = this.works.filter((e) => {
        return !e.done;
      });
    });
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
.btn-updata {
  color: #fff;
  background-color: #4c65f0;
  border: 1px solid #3145b3;
}
.btn-updata:hover {
  color: #fff;
  background-color: #3145b3;
}
.btn-save {
  color: #fff;
  background-color: #50da67;
  border: 1px solid #39c250;
}
.btn-save:hover {
  color: #fff;
  background-color: #39c250;
}
.btn-cancel {
  color: #fff;
  background-color: #dbdbdb;
  border: 1px solid #929292;
}
.btn-cancel:hover {
  color: #fff;
  background-color: #929292;
}

.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
</style>