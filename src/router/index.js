import Vue from 'vue'
import VueRouter from 'vue-router'
import abyIndex from '../pages/abyIndex'
import abySerach from "../pages/abySerach"
import abyOrder from '../pages/abyOrder'
import orderAgree from '../components/order/orderAgree'
import orderSendToOwner from '../components/order/orderSendToOwner'
import orderAddPayMethod from '../components/order/orderAddPayMethod'
import orderAddPersons from '../components/order/orderAddPersons'
import abyHouselist from"../pages/abyHouselist"
import abyMy from"../pages/abyMy"

import abyWish from "../pages/abyWish"

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
    component: abyOrder
  },
  {
    path: '/agree',
    component: orderAgree
  },
  {
    path: '/sendToOwner',
    component: orderSendToOwner
  },
  {
    path: '/addPayMethod',
    component: orderAddPayMethod
  },
  {
    path: '/addPersons',
    component: orderAddPersons
  },
  { path:'/houselist',
    component:abyHouselist
  },
  { path:'/my',
    component:abyMy
  },

  {
    path:'/abyWish',
    component:abyWish
  }
]

const router = new VueRouter({
  routes
});

export default router;
