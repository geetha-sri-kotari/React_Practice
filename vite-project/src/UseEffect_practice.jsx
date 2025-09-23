import { useState, useEffect } from "react";

const UseEffect_practice = () => {
    const [temp, setTemp] = useState(0);
    useEffect(() => {
        console.log("testing...");
    }, [temp]);
    return (
        <>
        <button onClick={() => setTemp(temp + 1)}>Increase {temp}</button>
        </>
    )
}
export default UseEffect_practice