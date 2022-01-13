<template>
  <div class="count">
    <h1>当前的求和为:??</h1>
    <h3>当前的求和放大10倍为:??</h3>
    <h3>我在???学习,学习??</h3>
    <h3>Person组件的人数为:??</h3>
    <select>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button>+</button>
    <button>-</button>
    <button>当前何求为奇数时再相加</button>
    <button>等一等再加</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.count h3:nth-of-type(2) {
  color: red;
}
button {
  margin-left: 10px;
}
</style>