export const initialState = {
    form_data:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'FORM_DATA':
            console.log(initialState.form_data,"reducer form data")
            return {
                ...state,
                form_data: payload
            }
        default:
            return state
    }
}
