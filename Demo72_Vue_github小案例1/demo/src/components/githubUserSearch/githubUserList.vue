<template>
  <main>
    <div class="container">
      <div class="row">
        <github-user-list-item />
        <github-user-list-item />
        <github-user-list-item />
        <github-user-list-item />
      </div>
    </div>
  </main>
</template>

<script>
import GithubUserListItem from "./githubUserListItem.vue";
export default {
  components: { GithubUserListItem },
};
</script>

<style>
</style>