<template>
  <div>
    <ul>
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
};
</script>

<style>
</style>