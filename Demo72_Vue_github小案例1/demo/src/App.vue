<template>
  <div id="app">
    <github-user-search />
  </div>
</template>

<script>
import GithubUserSearch from "./components/githubUserSearch.vue";
export default {
  name: "App",
  components: { GithubUserSearch },
};
</script>

<style>
main {
  margin-top: 1rem;
}
.card {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #efefef;
}
.card > img {
  width: 10rem;
  height: 10rem;
}
.card > span {
  font-size: 1.5rem;
}
</style>
