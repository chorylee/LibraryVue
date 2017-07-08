import Vue from 'vue'
import Vuex from 'vuex'
import resources from 'store/modules/resources'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editMode: false
  },
  getters: {},
  mutations: {

    /**
     * Toggle edit mode.
     *
     * @param state The default store state
     */
    toggleEditMode(state, editState) {
      state.editMode = !state.editMode
    },

    /**
     * Toggle edit mode off.
     *
     * @param state The default store state
     */
    disableEditMode(state) {
      state.editMode = false
    }
  },
  actions: {},
  modules: {
    resources
  }
})
