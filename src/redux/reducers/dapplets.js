const initialState = {
    dapplets: [],
    error: "",
    direction: "DESC"
}

const dappletsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DAPPLETS:SET_DAPPLETS":
            return {
                ...state,
                dapplets: [...state.dapplets, ...payload],
            }
        case "DAPPLETS:SET_DRAG_END":
            return {
                ...state,
                dapplets: payload
            }
        case "DAPPLETS:SET_FILTRED_DAPPLETS":
            return {
                ...state,
                dapplets: payload
            }
        case "DAPPLETS:SET_ERROR":
            return {
                ...state,
                error: payload
            }
        case "DAPPLETS:SET_DIRECTION":
            return {
                ...state,
                direction: payload
            }
        default: return state;
    }
}

export default dappletsReducer;