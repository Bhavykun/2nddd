import React, { useContext, useState } from "react";
import { GlobalSpace } from "./GlobalSpace";

function Counter()
{
    const [c,setC]=useState(10);

    function increment()
    {
        setC((c)=>{return c+1;});
        setC((c)=>{return c+1;});
        setC((c)=>{return c+1;});
        
    }

    function decrement()
    {
        // setC(()=>{return c-1;});
        setC(c-1);
        setC(c-1);
        setC(c-1);
        
    }
    
    const d=useContext(GlobalSpace);

    return(
        <>
    <h2>The count for {d} is: {c}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    );
}

export default Counter;