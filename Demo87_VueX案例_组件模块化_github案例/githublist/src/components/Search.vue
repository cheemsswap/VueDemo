<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        v-model="keyWord"
        placeholder="enter the name you search"
      />&nbsp;
      <button @click="SearchKeyWord_ajax">Search</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    keyWord: {
      get() {
        return this.$store.state.Search.keyWord;
      },
      set(val) {
        this.updatakeyWord(val);
      },
    },
  },
  methods: {
    ...mapActions("Search", ["updatakeyWord"]),
    ...mapActions("List", ["SearchKeyWord_ajax"]),
  },
};
</script>

<style>
</style>