export const updateRiskType = (state, payload) => {
    state.riskType = payload
}


export const addField = (state, payload) => {
    state.fields.push(payload)
}

export const addFieldValue = (state, payload) => {
    let targetField = state.fields.filter(field => field.name==payload.fieldName)
    let targetIndex = state.fields.indexOf(targetField[0])
    state.fields[targetIndex].value = payload.fieldValue   
}

export const resetAddRiskData = (state, payload) => {
    state.fields = []
    state.riskType = ''
}