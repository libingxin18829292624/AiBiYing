import Vue from 'vue'
import VueRouter from 'vue-router'
import abyIndex from '../pages/abyIndex'
import abySerach from "../pages/abySerach"
import abyOrder from '../pages/abyOrder'
import orderAgree from '../components/order/orderAgree'
import orderSendToOwner from '../components/order/orderSendToOwner'
import orderAddPayMethod from '../components/order/orderAddPayMethod'
import orderAddPersons from '../components/order/orderAddPersons'
import orderAddPersonInfo from '../components/order/orderAddPersonInfo'
import abyHouselist from"../pages/abyHouselist"
import abyHousedetail from"../pages/abyHousedetail"
import abyWish from "../pages/abyWish"
import abyMy from"../pages/abyMy"
import abyIndexRili from "../components/index/abyIndexRili"

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
  {
    path:'/abyWish',
    component:abyWish
  },
  {
    path:'/houseDetail',
    component:abyHousedetail
  },
  {
    path:'/addPersonInfo',
    component:orderAddPersonInfo
  },
  { path:'/my',
    component:abyMy
  },
  { path:'/Rili',
    component:abyIndexRili
  }

]

const router = new VueRouter({
  routes
});

export default router;
