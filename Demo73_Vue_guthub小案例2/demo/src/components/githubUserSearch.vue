<template>
  <div>
    <github-user-header />
    <github-user-list :githubUserList="githubUserList" />
  </div>
</template>

<script>
import GithubUserHeader from "./githubUserSearch/githubUserHeader.vue";
import GithubUserList from "./githubUserSearch/githubUserList.vue";
export default {
  data() {
    return {
      githubUserList: [],
    };
  },
  mounted() {
    this.$bus.$on("updateUserList", (UserList) => {
      this.githubUserList = UserList;
    });
  },
  components: { GithubUserHeader, GithubUserList },
};
</script>

<style>
</style>