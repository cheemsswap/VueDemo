<template>
  <div>
    <div class="row">
      <Bannder />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home"
            aria-current="page"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bannder from "./components/Bannder.vue";
export default {
  name: "App",
  components: { Bannder },
};
</script>

<style>
</style>
