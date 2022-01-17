<template>
  <div>
    <ul>
      <li v-for="link of LinksList" :key="link.title">
        <router-link
          :to="{
            path: '/about/links/details',
            query: {
              title: link.title,
              url: link.url,
            },
          }"
          >{{ link.title }}</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LinksList: [
        { title: "qq", url: "www.qq.com" },
        { title: "163", url: "www.163.com" },
        { title: "baidu", url: "www.baidu.com" },
      ],
    };
  },
};
</script>

<style>
</style>