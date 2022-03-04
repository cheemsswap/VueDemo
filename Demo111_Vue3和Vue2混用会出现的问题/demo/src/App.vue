<template>
  <h2>{{v2name}}</h2>
  <h2>{{v3name}}</h2>

  <br>

  <button @click="sayV2">V2按钮</button>

  <br>

  <button @click="sayV3">V3按钮</button>
</template>


<script>
import { h } from "vue";
export default {
  name: "App",
  data() {
    return {
      v2name: "v2name"
    };
  },
  methods: {
    sayV2() {
      console.log("V2:");
      console.log("v2name:" + this.v2name);
      console.log("v3name:" + this.v3name);
    }
  },
  setup() {
    let v3name = "v3name";
    function sayV3() {
      console.log("V3:");
      console.log(this);
      console.log("v2name:" + this.v2name);
      console.log("v3name:" + v3name);
    }
    return {
      v3name,
      sayV3
    };
  }
};
</script>
