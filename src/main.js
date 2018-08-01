import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuex from 'vuex'
import allData from "./json/index"
import ElementUI from "element-ui"

Vue.use(Vuex)
Vue.use(ElementUI)

const store = new Vuex.Store({
  state:{
    "allData":allData,
    "storedData":"",
    "isAgree":false,
    "isSend":false,
    "isAddPayMethod":false,
    "isAddPersonInfo":false,
    "toOwnerWords":"",
    "payMethod":"",
    "finallyStepNums":4,
    "members":{"person":1,"children":0,"kid":0,"pets":false},
    "days":0,
    "startDate":"",
    "startWeek":"",
    "endWeek":"",
    "endDate":"",
    "price":"",
    "xdriqi":"日期",
    "num":1,
    "addressInfo":{
      "city":"",
      "index":""
    },
    "index":""
  },
  mutations:{

  },
  actions:{

  },
  getters:{

  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

