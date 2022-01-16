<template>
  <div class="panel">
    <ul>
      <li v-for="link of linksList" :key="link.title">
        <router-link
          :to="{
            name: 'linksdetails',
            params: {
              title: link.title,
              url: link.url,
            },
          }"
          >{{ link.title }}</router-link
        >&nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linksList: [
        { title: "aaaa", url: "aa.com" },
        { title: "bbbb", url: "bb.com" },
        { title: "cccc", url: "cc.com" },
      ],
    };
  },
};
</script>

<style>
</style>