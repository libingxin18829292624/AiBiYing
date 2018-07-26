import Vue from 'vue'
import VueRouter from 'vue-router'
import abyIndex from '../pages/abyIndex'
import abySerach from "../pages/abySerach"
import abyOrder from '../pages/abyOrder'
import orderAgree from '../components/order/orderAgree'
import abyHouselist from"../pages/abyHouselist"

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
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
  },
  { path:'/houselist',
    component:abyHouselist
  }
]

const router = new VueRouter({
  routes
});

export default router;
