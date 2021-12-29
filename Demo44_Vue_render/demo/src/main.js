import Vue from 'vue'
import App from './App.vue'
// import Student from "./components/Student.vue"

new Vue({
  el: "#app",
  render(e) {
    console.log(e);
    return e(App)
  }
})