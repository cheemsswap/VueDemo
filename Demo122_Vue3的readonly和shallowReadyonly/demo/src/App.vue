<template>
  <h1>readonly:数据无法修改</h1>
  <hr />
  <h2>object(未使用readonly 控制台的object经过刷新会修改)</h2>
  {{ person }}
  <button @click="person.age++">
    修改object的年龄 ->去控制台看object是否修改
  </button>
  <hr />
  <h2>object(使用readonly)</h2>
  {{ readonly_person }}
  <button @click="readonly_person.age++">
    修改object的年龄 ->去控制台看object是否修改
  </button>
  <hr />
  <h2>reactive(使用readonly)</h2>
  {{ readonly_reactive_person }}
  <button @click="readonly_reactive_person.age++">修改reactive的年龄</button>
  <hr />
  <h1>shallowReadonly:数据无法修改 只监听一层</h1>
  <h2>object(shallowReadonly)</h2>
  {{ shallowReadonly_person }}
  <button @click="shallowReadonly_person.age++">
    修改object的年龄 ->去控制台看object是否修改
  </button>
  <button @click="shallowReadonly_person.job.salary++">
    修改object的工作里面的薪水->去控制台看object是否修改
  </button>
  <hr />
  <h2>reactive(shallowReadonly)</h2>
  {{ shallowReadonly_reactive_person }}
  <button @click="shallowReadonly_reactive_person.age++">
    修改reactive的年龄
  </button>
  <button @click="shallowReadonly_reactive_person.job.salary++">
    修改薪水
  </button>
</template>

<script>
import { readonly, reactive, shallowReadonly } from "vue";
export default {
  name: "App",
  setup() {
    let person = {
      name: "张三",
      age: 18,
      job: {
        salary: 10,
      },
    };
    let readonly_person = readonly(person);
    let readonly_reactive_person = readonly(reactive(person));
    let shallowReadonly_person = shallowReadonly(person);
    let shallowReadonly_reactive_person = shallowReadonly(reactive(person));
    return {
      person,
      readonly_person,
      readonly_reactive_person,
      shallowReadonly_person,
      shallowReadonly_reactive_person,
    };
  },
};
</script>

<style>
</style>