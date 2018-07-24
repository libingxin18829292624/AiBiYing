import Vue from 'vue'
import VueRouter from 'vue-router'
import abyIndex from '../pages/abyIndex'

Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:abyIndex
  }
]

const router = new VueRouter({
  routes
});

export default router;
