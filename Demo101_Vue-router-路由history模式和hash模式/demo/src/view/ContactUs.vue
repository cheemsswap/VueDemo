<template>
  <div>
    <ul>
      <li :style="{ opacity }">你好Vue</li>
      <li v-for="con of ContactUsList" :key="con.title">
        <router-link
          :to="{
            name: 'contactusdetails',
            params: {
              title: con.title,
              url: con.url,
            },
          }"
          >{{ con.title }}</router-link
        >
        <input type="text" name="" id="" />
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      opacity: 1,
      ContactUsList: [
        {
          title: "aaaaaa",
          url: "a-a-a-a-a",
        },
        {
          title: "bbbbbb",
          url: "b-b-b-b-b",
        },
        {
          title: "cccccc",
          url: "c-c-c-c-c",
        },
      ],
    };
  },
  activated() {
    console.log("contactus获得激活");
    this.timmer = setInterval(() => {
      this.opacity -= 0.02;
      console.log("!");
      if (this.opacity <= 0) this.opacity = 1;
    }, 300);
  },
  deactivated() {
    console.log("contactus失去激活");
    clearInterval(this.timmer);
  },
};
</script>

<style>
</style>