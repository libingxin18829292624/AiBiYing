import Vue from 'vue'
import VueRouter from 'vue-router'
import abyIndex from '../pages/abyIndex'
import abySerach from "../pages/abySerach"
import abyOrder from '../pages/abyOrder'
<<<<<<< HEAD
import orderAgree from '../components/order/orderAgree'
=======

>>>>>>> c1ccc0866c99d95a479d1b4b5f159fcfa1249731
Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:abyIndex
  },
  {
    path:'/serach',
    component:abySerach
  },
<<<<<<< HEAD
  {
    path:'/order',
    component:abyOrder,
    children:[
      {
        path:'agree',
        component:orderAgree
      }
    ]
=======
   { path:'/order',
    component:abyOrder
>>>>>>> c1ccc0866c99d95a479d1b4b5f159fcfa1249731
  }
]

const router = new VueRouter({
  routes
});

export default router;
