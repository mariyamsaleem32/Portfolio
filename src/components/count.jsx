import { useState } from "react";

const Count = () => {

const [count,setCount] = useState(0);

    const increase = () => {
    setCount(value => value + 1)
    }
    const decrese = () => {
    setCount(value => value - 1)
    }
    const clear = () => {
    setCount(0)
    }

return  (
    <div>
        <h2>{count}</h2>
        <br />
        <button onClick={increase}>increase</button>
        <button onClick={decrese}>decrese</button>
        <button onClick={clear}>clear</button>
    </div>
)
}

export default Count;
