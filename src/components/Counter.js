import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrementAction, incrementAction, incrementByValue} from "../redux/actions/counterActions";

export default function Counter (){
    // const [count , setCount] = useState(0);
    // const {countState} = useSelector(function (state){
    //      return state.count
    // });
    //const countState = useSelector(state => state.count);
    // -- Or --
    const {count} = useSelector(state => state.counter);  // state.counter // key in index.js
    const dispatch = useDispatch();

    console.log(count)

    const handleIncrement = () => {
        //setCount(count + 1) ;
        // dispatch(incrementAction())
        incrementAction(dispatch);
    }
    const handleDecrement = () => {
        // setCount(count -1 )
        // dispatch(decrementAction());
        decrementAction(dispatch)
    }

    const handleIncByValue = (v1) => {
        //dispatch(incrementByValue(v1))
        incrementByValue(v1,dispatch)
    }

    // const handleIncByValue = () => {
    //     dispatch({
    //         type: INC_BY_VALUE
    //     })
    // }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncrement}> Increment </button>
            <button onClick={handleDecrement}> Decrement </button>
            <button onClick={() => handleIncByValue(3)}> Increment by 3 </button>
        </div>
    )

}