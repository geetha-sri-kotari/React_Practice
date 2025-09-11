import React from "react";
import { useState } from "react";

const UseState_practice = () => {
    const [Data, setData] = useState(0);
    const Change = () => {
        setData(Data + 1);
    }
    return (
        <>
            <button onClick={Change}>Click</button>
            <h1>Count : {Data}</h1>
        </>
    )
}
export default UseState_practice;