<template>
  <div id="app">
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header"><h2>Vue Router Demo</h2></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <a class="list-group-item" href="./about">About</a>
            <a class="list-group-item active" href="./home">Home</a>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <home />
              <about v-if="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from "./components/About.vue";
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: { Home, About },
};
</script>

<style>
</style>
