import actions from './moduleUsersAction.js'
import state from './moduleUsersState.js'
import mutations from './moduleUsersMutation.js'
import getters from './moduleUsersGetter.js'

export default {
    isRegistered: false,
    namespaced: true,
    state: state,
    actions: actions,
    mutations: mutations,
    getters: getters
}