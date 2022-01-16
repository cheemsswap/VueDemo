<template>
  <div>
    <template>
      <h2>query:</h2>
      <ul>
        <li v-for="(val, key) in $route.query" :key="key">
          {{ key }}:{{ val }}
        </li>
      </ul>
    </template>
    <hr />
    <template>
      <h2>params:</h2>
      <ul>
        <li v-for="(val, key) in $route.params" :key="key">
          {{ key }}:{{ val }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>