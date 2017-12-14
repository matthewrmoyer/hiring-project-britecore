import Vue from 'vue';

export const updateRiskType = ({ commit }, payload) => {
    commit('updateRiskType', payload)
}

export const addField =({ commit }, payload) => {
    commit('addField', payload)
}

export const addFieldValue =({ commit }, payload) => {
    commit('addFieldValue', payload)
}

export const postRisk = async ({ commit }, payload) => {
    // let risks = await (await Vue.http.get('https://britecore-backend.herokuapp.com/risks')).json()
    console.log('post risk action');
    console.log(payload.type);
    payload.fields.forEach(field => console.log(field.name, field.type));
    try {
        let response = await (await Vue.http.post('https://britecore-backend.herokuapp.com/risks', payload)).json()
        console.log(response);
        try {
            let fieldsResponse = await (await Vue.http.post('https://britecore-backend.herokuapp.com/fields', payload)).json()
        } catch (error) {
            console.log(error);
        } 
    } catch (error) {
        console.log(error);
    }    
}
