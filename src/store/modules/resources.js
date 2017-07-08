import {
  generateResources,
  add,
  update,
  remove,
  removeAll
} from 'api/resources'

export default {
  namespaced: true,
  state: {
    resources: generateResources(false)
  },
  getters: {
    resource: state => id => {
      return state.resources.find(resource => resource.id === id)
    }
  },
  mutations: {
    /**
     * Refreshes the test resources.
     *
     * @param state The resources store state
     */
    refresh(state) {
      removeAll()

      state.resources = generateResources()
    },

    /**
     * Adds a resource to the resource store and
     * to local storage.
     *
     * @param state The resources store state
     * @param details The resource details
     */
    add(state, details) {
      state.resources = add(details)
    },

    /**
     * Updates a resource
     *
     * @param state The resources store state
     * @param details The resource details
     */
    update(state, details) {
      state.resources = update(details.id, details)
    },

    /**
     * Removes a single resource from the resource store
     * and from local storage.
     *
     * @param state The resources store state
     * @param id The id of the resource needed to be removed.
     */
    remove(state, id) {
      state.resources = remove(id)
    },

    /**
     * Removes all resources from the resource store
     * and from local storage
     *
     * @param state The resources store state
     */
    removeAll(state) {
      removeAll()
      state.resources = []
    },

    /**
     * Searches the resource store for a particular keyword.
     *
     * TODO
     *
     * @param state The resources store state
     * @param keyword The keyword to search for within the store records
     */
    search(state, keyword) {

    },

    /**
     * Shows or hides resources based on tags clicked.
     *
     * TODO
     *
     * @param state The resources store state
     * @param tags The tags to show or hide filters
     */
    filter(state, tags) {

    }
  },
  actions: {
    /**
     * Calls the refresh mutation along with
     * the edit mode disable mutation from
     * the root store
     *
     * @param commit
     */
    refresh({ commit }) {
      commit('refresh')
      commit('disableEditMode', null, { root: true })
    },

    /**
     * Calls the removeAll mutation along with
     * the edit mode disable mutation from
     * the root store
     *
     * @param commit
     */
    removeAll({ commit }) {
      commit('removeAll')
      commit('disableEditMode', null, { root: true })
    }
  }
}
