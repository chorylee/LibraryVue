import 'babel-polyfill'
import Vue from 'vue'
import Validate from 'vee-validate'
import store from './store'
import router from './router'
import App from './App'

Vue.use(Validate)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
