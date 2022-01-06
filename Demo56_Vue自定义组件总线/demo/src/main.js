import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


const vm = new Vue({
  render: h => h(App),
})
Vue.prototype.x = vm
vm.$mount('#app')
