<template>
  <div>
    <input
      type="text"
      name=""
      id=""
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style scoped>
div {
  background-color: aqua;
}
</style>