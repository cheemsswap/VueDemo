<template>
  <div>
    <input
      type="text"
      name=""
      id=""
      v-bind:value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style>
</style>