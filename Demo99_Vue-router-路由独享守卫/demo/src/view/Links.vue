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
        <button @click="pushopen(link)">push打开</button>
        <button @click="replaceopen(link)">replace打开</button>
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
  methods: {
    pushopen(link) {
      this.$router.push({
        path: "/about/links/details",
        query: {
          title: link.title,
          url: link.url,
        },
      });
    },
    replaceopen(link) {
      this.$router.replace({
        path: "/about/links/details",
        query: {
          title: link.title,
          url: link.url,
        },
      });
    },
  },
};
</script>

<style scoped>
li {
  margin-top: 10px;
}
button {
  margin-left: 20px;
}
</style>