<template>
  <ul>
    <li>{{ title }}</li>
    <li>{{ url }}</li>
  </ul>
</template>

<script>
export default {
  props: ["title", "url"],
};
</script>

<style>
</style>