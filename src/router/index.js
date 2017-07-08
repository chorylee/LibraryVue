/**
 * Basic routing setup. If we need to expand later, we can do so.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Resources from 'components/resources/Resources'

Vue.use(Router)

const routes = [
  { path: '/', name: 'home', component: Resources }
]

export default new Router({
  routes
})
