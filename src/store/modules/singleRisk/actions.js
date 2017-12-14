import Vue from 'vue';

export const getRisk = async ({ commit }, payload) => {
    let risk = await (await Vue.http.get(`https://britecore-backend.herokuapp.com/risks/${payload}`)).json()
    commit('setRisk', risk)
}