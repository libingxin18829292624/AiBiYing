import Vue from 'vue'
import VueRouter from 'vue-router'
import abyIndex from '../pages/abyIndex'
import abyOrder from '../pages/abyOrder'

Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:abyIndex
  },
  {
    path:'/order',
    component:abyOrder
  }
]

const router = new VueRouter({
  routes
});

export default router;
