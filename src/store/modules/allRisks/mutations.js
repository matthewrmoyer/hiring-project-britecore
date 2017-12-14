export const addRiskData = (state, payload) => {
    payload.forEach(r => {
        if(state.risks.filter(risk => risk.id === r.id).length === 0) {
            state.risks.push(r)
        }
    })
}
