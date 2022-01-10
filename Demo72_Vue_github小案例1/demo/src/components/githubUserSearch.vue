<template>
  <div>
    <github-user-header />
    <github-user-list />
  </div>
</template>

<script>
import GithubUserHeader from "./githubUserSearch/githubUserHeader.vue";
import GithubUserList from "./githubUserSearch/githubUserList.vue";
export default {
  components: { GithubUserHeader, GithubUserList },
};
</script>

<style>
</style>