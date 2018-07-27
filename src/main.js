import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    "isAgree":"false",
    "isSend":"false",
    "isAddPayMethod":"false",
    "payMethod":"",
    "finallyStepNums":"4",
    "ownerName":"榕",
    "ownerImg":"/src/assets/img/l1.png",
  },
  mutations:{
    changeAgree(state){
      state.isAgree = true;
    },
    initOrderData(state){
      state.finallyStepNums = 4;
    }
  },
  actions:{
    toChangeAgree(store){
      store.commit('changeAgree');
    },
    toInitOrderData(store){
      store.commit('initOrderData');
    }
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

