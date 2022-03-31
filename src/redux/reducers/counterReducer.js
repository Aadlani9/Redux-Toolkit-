import {DECREMENET, INC_BY_VALUE, INCREMENET} from "../actions/types";


const counterReducer= (state = {count : 0} , action) => {

    switch (action.type){
        case INCREMENET :
            console.log(state)
            return {...state, count: state.count + 1 }
        case DECREMENET :
            return {...state, count: state.count - 1 }
        default :
            return state
        case INC_BY_VALUE :
            return {...state, count: state.count + action.value}
    }
     //
     // if(action.type == INCREMENET){
     //     return state.count + 1
     // }
     // if (action.type == DECREMENET){
     //     return state.count - 1
     // }

}

export default counterReducer