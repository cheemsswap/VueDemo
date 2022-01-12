<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <slot name="main"
      >我是main插槽，如果没有使用插槽，我则会显示
      <hr />
    </slot>
    <slot name="footer"
      >我是footer插槽，如果没有使用插槽，我则会显示
      <hr
    /></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.card {
  width: 300px;
  height: 500px;
  background-color: beige;
}
.card > h3 {
  width: 100%;
  height: 50px;
  background-color: blue;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>