<template>
  <div>
    <h2>About组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/about/links"
            >Links</router-link
          >
        </li>
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/about/contactus"
            >ContactUs</router-link
          >
        </li>
      </ul>
      <keep-alive :include="['ContactUs']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>