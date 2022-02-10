<template>
  <div id="app">
    <input type="text" name="" id="" v-model="msg" />
    <br />
    {{ msg }}
    <br />
    <input
      type="text"
      name=""
      id=""
      v-bind:value="msg"
      @input="msg = $event.target.value"
    />
    <mode-1 v-model="msg" />
    <mode-1 :value="msg" @input="msg = $event" />
  </div>
</template>

<script>
import Mode1 from "./components/Mode1.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "",
    };
  },
  components: { Mode1 },
  methods: {
    setmsg(msg) {
      this.msg = msg;
    },
  },
};
</script>

<style>
</style>
