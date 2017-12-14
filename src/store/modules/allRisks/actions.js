import Vue from 'vue';

export const getRisks =({ commit }, payload) => {
    let risks = []
    Vue.http.get('https://britecore-backend.herokuapp.com/risks')
    .then(response => {
       return response.json();   
    })
    .then(data => {
        data.forEach(r => {
            commit('addRiskData', r)
        })
    })
}
