import {DECREMENET, INC_BY_VALUE, INCREMENET} from "./types";

export const incrementAction = async (dispatch) => {
    return  dispatch({ type: INCREMENET})
}

export const decrementAction = async(dispatch) => {
    return dispatch({ type: DECREMENET})
}

// export const decrementAction  = () => {
//     return {
//         type: DECREMENET
//     }
// }

export const incrementByValue  = async (v1, dispatch) => {
    return dispatch({
        type: INC_BY_VALUE,
        value: v1
    })
}
// export const incrementByValue  = (v1) => {
//     return {
//         type: INC_BY_VALUE,
//         value: v1
//     }
// }

