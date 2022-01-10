<template>
  <main>
    <div class="container">
      <div class="row">
        <github-user-list-item
          v-for="user of githubUserList"
          :key="user.id"
          :user="user"
        />
        <div v-show="githubUserList.length == 0">请检索或什么都没有搜到</div>
      </div>
    </div>
  </main>
</template>

<script>
import GithubUserListItem from "./githubUserListItem.vue";
export default {
  components: { GithubUserListItem },
  props: ["githubUserList"],
};
</script>

<style>
</style>