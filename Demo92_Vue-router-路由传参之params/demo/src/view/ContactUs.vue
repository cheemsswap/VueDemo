<template>
  <div class="panel">
    <ul>
      <li v-for="contactus of contactusList" :key="contactus.title">
        <router-link
          :to="`/about/contactus/details/${contactus.title}/${contactus.content} `"
          >{{ contactus.title }}</router-link
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
      contactusList: [
        { title: "手机号码", content: "1333333333" },
        { title: "电子邮箱", content: "133333@3.333" },
        { title: "地址", content: "家里" },
      ],
    };
  },
};
</script>

<style>
</style>