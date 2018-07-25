import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{

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
  render: h => h(App)
})

