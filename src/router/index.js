import Vue from 'vue'
import VueRouter from 'vue-router'
import abyIndex from '../pages/abyIndex'
<<<<<<< HEAD
import abySerach from "../pages/abySerach"
=======
import abyOrder from '../pages/abyOrder'

>>>>>>> 42bc9d69c12b34a4e545430470738d9ee7f2c57b
Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:abyIndex
  },
  {
<<<<<<< HEAD
    path:'/serach',
    component:abySerach
=======
    path:'/order',
    component:abyOrder
>>>>>>> 42bc9d69c12b34a4e545430470738d9ee7f2c57b
  }
]

const router = new VueRouter({
  routes
});

export default router;
