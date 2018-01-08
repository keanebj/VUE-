import * as types from '../types'

const state = {
  title: ''
}

const getters = {
  title: state => state.title
}

const mutations = {
  [types.CHANGE_HEAD_BAR] (state, {title}) {
    state.title = title
  }
}

const actions = {
  changeTitle ({ commit, state }, title) {
    commit(types.CHANGE_HEAD_BAR, {title})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
