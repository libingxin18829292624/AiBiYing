import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    "isAgree":false,
    "isSend":false,
    "isAddPayMethod":false,
    "isAddPersonInfo":false,
    "toOwnerWords":"",
    "payMethod":"",
    "finallyStepNums":4,
    "ownerName":"榕",
    "ownerImg":"/src/assets/img/l1.png",
    "members":{"person":1,"children":0,"kid":0,"pets":false},
    "days":0,
    "price":"",
    "xdriqi":"日期",
    "num":1,
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

