<template>
  <div class="panel">
    <ul>
      <li v-for="message of MessagesList" :key="message.title">
        <router-link
          :to="`/home/messages/details?title=${message.title}&content=${message.content}`"
          >{{ message.title }}</router-link
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
      MessagesList: [
        {
          title: "消息1号",
          content: "hahahahha",
        },
        {
          title: "消息2号",
          content: "heiheiheiheihei",
        },
        {
          title: "消息3号",
          content: "zzzzzzzzzzz",
        },
      ],
    };
  },
};
</script>

<style>
</style>