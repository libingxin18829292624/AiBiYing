import Vue from 'vue'
import VueRouter from 'vue-router'
import abyIndex from '../pages/abyIndex'
import abySerach from "../pages/abySerach"
import abyOrder from '../pages/abyOrder'
import orderAgree from '../components/order/orderAgree'

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
  {
    path: '/order',
    component: abyOrder,
    children: [
      {
        path: 'agree',
        component: orderAgree
      }
    ]
  },
   { path:'/order',
    component:abyOrder
  }
]

const router = new VueRouter({
  routes
});

export default router;
