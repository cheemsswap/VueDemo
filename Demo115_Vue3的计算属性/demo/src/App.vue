<template>
  <h2>{{ person.firstName }}{{ person.lastName }}</h2>
  <input type="text" v-model="person.firstName" />
  <input type="text" v-model="person.lastName" />
  <h2>{{ person.name }}</h2>
  <h2>{{ person.name2 }}</h2>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });
    person.name = computed(() => {
      return person.firstName + " " + person.lastName;
    });
    person.name2 = computed({
      get() {
        return person.firstName + " " + person.lastName;
      },
      set(val) {
        console.log(val);
      },
    });
    return { person };
  },
};
</script>


<style>
</style>
