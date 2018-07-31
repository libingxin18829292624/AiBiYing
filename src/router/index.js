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
import orderRili from '../components/order/orderRili'
import abyToPay from '../pages/abyToPay'
import abyPayFinished from '../pages/abyPayFinished'
import abyHouselist from"../pages/abyHouselist"
import abyBack from"../pages/abyBack"
import abyBackBody from"../pages/abyBackBody"
import abyHousedetail from"../pages/abyHousedetail"
import abyWish from "../pages/abyWish"
import abyMy from"../pages/abyMy"
import abyIndexRili from "../components/index/abyIndexRili"
import housedetailBianlisheshi from "../components/Housedetail/housedetailBianlisheshi"
import housedetailZiye from "../components/Housedetail/housedetailJubao"
import housedetailJubao from "../components/Housedetail/housedetailZiye"
import houseAddPersons from "../components/houselist/houseAddPersons"
import houselistRili from "../components/houselist/houselistRili"
import abyInbox from "../pages/abyInbox"
import abyStorys from "../pages/abyStorys"

Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:abyIndex
  },
  {
    path:'/back',
    component:abyBack,
    children:[
      {
        path:'body',
        alias:"/back",
        component:abyBackBody
      }
    ]
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
  {
    path:'/my',
    component:abyMy
  },
  {
    path:'/Rili',
    component:abyIndexRili
  },
  {
    path:'/housedetailBianlisheshi',
    component:housedetailBianlisheshi
  },
  {
    path:'/housedetailJubao',
    component:housedetailJubao
  },
  {
    path:'/housedetailZiye',
    component:housedetailZiye
  },
  {
    path:'/toPay',
    component:abyToPay
  },
  {
    path:'/payFinished',
    component:abyPayFinished
  },
  {
    path:'/orderRili',
    component:orderRili
  },
  {
    path:'/fangke',
    component:houseAddPersons
  },
  {
    path:'/toriqi',
    component:houselistRili
  },
  {
    path:'/abyInbox',
    component: abyInbox
  },
  {
    path:"/storys",
    component:abyStorys
  },
]

const router = new VueRouter({
  routes
});

export default router;
