<template>
  <header class="p-3 bg-dark">
    <div class="container d-flex justify-content-left">
      <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input
          type="text"
          class="form-control form-control-dark"
          placeholder="Search..."
          aria-label="Search"
          v-model="searchText"
          @keydown.enter="search"
        />
      </div>
      <div>
        <button @click="search" type="button" class="btn btn-secondary">
          Search
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      if (this.searchText.trim() == "") return;
      axios
        .get("https://api.github.com/search/users?q=" + this.searchText)
        .then((data) => {
          //搜索
          this.$bus.$emit("updateUserList", data.data.items);
        });
    },
  },
};
</script>

<style>
</style>