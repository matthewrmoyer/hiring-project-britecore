export const updateRiskType = (state, payload) => {
    state.riskType = payload
}


export const addField = (state, payload) => {
    state.fields.push(payload)
}