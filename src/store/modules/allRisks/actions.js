import Vue from 'vue';

export const getRisks = async ({ commit }, payload) => {
    let risks = await (await Vue.http.get('https://britecore-backend.herokuapp.com/risks')).json()
    commit('addRiskData', risks)
}
