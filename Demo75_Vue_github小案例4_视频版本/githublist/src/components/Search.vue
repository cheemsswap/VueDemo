<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        v-model="keyword"
        placeholder="enter the name you search"
      />&nbsp;<button @click="getdata">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    getdata() {
      if (this.isget || this.keyword.trim() == "") return;
      this.isget = true;
      this.$bus.$emit("setMessage", "请稍等");
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (data) => {
          // console.log(data.data.items);
          this.$bus.$emit("setdata", data.data.items);
          if (data.data.items.length) this.$bus.$emit("setMessage", "");
          else this.$bus.$emit("setMessage", "没搜到");
          this.isget = false;
        },
        (error) => {
          // console.log(error.message);
          this.$bus.$emit("setMessage", "错误:" + error.message);
          this.isget = false;
        }
      );
    },
  },
};
</script>

<style>
</style>