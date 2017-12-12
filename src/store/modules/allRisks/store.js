import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
    risks: ['risk1']
}

module = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default module;
