import { useState } from "react";

export default function CounterHook() {
    const [count, setCount] = useState(0)

    const incrementar = () => {
        setCount(count + 1)
    }
    const decrementar = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={incrementar}>Incrementar</button>
            <button className="btn btn-danger" onClick={decrementar}>Decrementar</button>
            <button className="btn btn-warning" onClick={reset}>Reset</button>
        </div>
    )
}