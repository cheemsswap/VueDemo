<template>
  <div id="app">
    <div>
      <div class="row">
        <bannder />
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- <a class="list-group-item" href="/about">About</a>
            <a class="list-group-item active" href="/home" aria-current="page">Home</a> -->
            <router-link
              active-class="active"
              class="list-group-item"
              to="/about"
              >About</router-link
            >
            <router-link
              active-class="active"
              class="list-group-item"
              to="/home"
              >Home</router-link
            >
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <div>
                <router-view></router-view>
              </div>
            </div>
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
