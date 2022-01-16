<template>
  <div class="panel">
    <ul>
      <li v-for="news of NewsList" :key="news.title">
        <router-link
          :to="{
            name: 'newsdetails',
            query: {
              title: news.title,
              url: news.url,
            },
          }"
          >{{ news.title }}</router-link
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
      NewsList: [
        {
          title: "讲好冬奥故事 共赴冰雪之约",
          url: "http://haokan.baidu.com/v?pd=wisenatural&vid=2683151946461109651",
        },
        {
          title: "汤加火山喷发海啸波已到中国沿海",
          url: "https://baijiahao.baidu.com/s?id=1722085435963762446&wfr=spider&for=pc",
        },
      ],
    };
  },
};
</script>

<style>
</style>