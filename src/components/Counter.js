import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrementAction, incrementAction, incrementByValue} from "../redux/actions/counterActions";
import {decrement, increment} from "../redux/counterSlice";

export default function Counter (){
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    console.log(count)

    const handleIncrement = () => {
        // incrementAction(dispatch);
        dispatch(increment)
    }

    const handleDecrement = () => {
        // decrementAction(dispatch)
        dispatch(decrement)
    }

    const handleIncByValue = (v1) => {
        incrementByValue(v1,dispatch)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}> Increment </button>
            <button onClick={handleDecrement}> Decrement </button>
            <button onClick={() => handleIncByValue(3)}> Increment by 3 </button>
        </div>
    )

}