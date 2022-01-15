<template>
  <div>
    <ul>
      <li v-for="n of newsList" :key="n.id">
        <router-link
          :to="{
            name: 'news',
            query: { id: n.id, title: n.title },
          }"
          >{{ n.title }}</router-link
        >
      </li>
    </ul>
    <ul v-show="$route.query.id">
      <li>id:{{ $route.query.id }}</li>
      <li>title:{{ $route.query.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        { id: "001", title: "news001" },
        { id: "002", title: "news002" },
        { id: "003", title: "news003" },
        { id: "004", title: "news004" },
        { id: "005", title: "news005" },
        { id: "006", title: "news006" },
      ],
    };
  },
  // mounted() {
  //   console.log(this.$route.query);
  // },
  // updated() {
  //   console.log(this.$route.query);
  // },
};
</script>

<style>
</style>