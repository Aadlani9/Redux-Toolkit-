import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment , incrementByAmount} from "../redux/counterSlice";

function Counter (){
    // const {count} = useSelector(state => state.counter);
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();
    console.log(count)

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleIncByValue = (v1) => {
        dispatch(incrementByAmount( v1))
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

export default Counter