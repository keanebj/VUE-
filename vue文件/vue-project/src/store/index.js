import Vue from 'vue'
import Vuex from 'vuex'
import headbar from './modules/headbar'

Vue.use(Vuex)

const devMode = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    headbar
  },
  strice: devMode
})
