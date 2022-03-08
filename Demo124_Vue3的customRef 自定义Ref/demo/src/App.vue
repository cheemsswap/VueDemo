<template>
  <h1>customRef</h1>
  <hr />
  <h2>普通ref绑定数据</h2>
  <input type="text" name id v-model="keyword" />
  {{ keyword }}
  <hr />
  <h2>使用计算属性 添加修改参数2s防抖</h2>
  <input type="text" name id v-model="keyword2" />
  {{ keyword2 }}
  <hr />
  <h2>使用自定义ref 实现设置参数2秒防抖</h2>
  <input type="text" name id v-model="keyword3" />
  {{ keyword3 }}
</template>

<script>
import { ref, computed, customRef } from "vue";
export default {
  name: "App",
  setup(props, ctx) {
    //普通ref
    let keyword = ref("hello word");

    //使用计算属性 实现设置参数 2s防抖
    var timeout; //计时器存放移除的
    var delay = 2000; //延迟
    var keyword22 = ref("hello wrod"); //添加一个响应式
    let keyword2 = computed({
      get() {
        return keyword22.value;
      },
      set(newvalue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          keyword22.value = newvalue;
        }, delay);
      },
    });
    //使用自定义ref 实现设置参数2秒防抖
    const myRef = (value, delay = 2000) => {
      let timeout;
      return new customRef((track, trigger) => {
        return {
          get() {
            track();
            return value;
          },
          set(newvalue) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              value = newvalue;
              trigger();
            }, delay);
          },
        };
      });
    };
    let keyword3 = myRef("hello word", 2000);
    return {
      keyword,
      keyword2,
      keyword3,
    };
  },
};
</script>

<style>
</style>