import Vue from 'vue'
import Vuex from 'vuex'

import addRisk from './modules/addRisk/store'
import allRisks from './modules/allRisks/store'



Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
    modules: {
        addRisk,
        allRisks
    }
})