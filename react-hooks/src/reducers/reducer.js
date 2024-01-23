import { DESCREMENT, INCREMENT } from "./action";

// bước 1: tạo ra initState
export const initState = 0

// bước 3: tạo reducer
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT: {
            return state + Number(action.payload)
        }
        case DESCREMENT: {
            return state - Number(action.payload)
        }
        default: {
            return state
        }
    }
}

export default reducer;