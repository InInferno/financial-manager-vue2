import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },

  actions: {
    async fetchCurrency() {
      const myHeaders = new Headers();
      myHeaders.append('apikey', process.env.VUE_APP_FIXER);
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
      const res = await fetch('https://api.apilayer.com/fixer/latest?&symbols=USD,EUR,RUB', requestOptions);
      return await res.json();
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category, record
  }
})
