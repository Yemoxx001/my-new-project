import React, { useState, useEffect } from "react";
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0);

    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setCount((prev) => prev +1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setCount(0);
    };

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <div className="buttons">
                <button className="start" onClick={start}>Start</button>
                <button className="stop" onClick={stop}>Stop</button>
                <button className="reset" onClick={reset}>Reset</button>
                
            </div>
        </div>
    );
}

export default Counter;