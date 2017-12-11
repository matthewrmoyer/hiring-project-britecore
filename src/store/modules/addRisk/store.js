import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
    riskType: '',
    fields: []
}

module = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default module;