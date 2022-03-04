<template>
  <div>你好</div>
  <div>我的名字是:{{ person.name }}</div>
  <div>我的年龄是:{{ person.age }}</div>
  <div>我的工作是:{{ person.job }}</div>
  <button @click="$emit('sayHello', 666)">点我触发sayHello事件</button>
  <br />
  <slot name="abc"></slot>
</template>

<script>
export default {
  name: "Demo",
  props: ["person"], //传递过来的props
  emits: ["sayHello"], //传递过来的自定义函数
  slots: ["abc"], //传递过来的命名插槽
  setup(props, content) {
    //输出props
    console.log("props:");
    console.log(props);
    //输出未被props传的 参数或者函数
    console.log(`content->attrs:`);
    console.log(content.attrs);
  },
};
</script>

<style>
</style>