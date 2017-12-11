import Vue from 'vue'
import Vuex from 'vuex'

import addRisk from './modules/addRisk/store'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {},
    modules: {
        addRisk
    }
})