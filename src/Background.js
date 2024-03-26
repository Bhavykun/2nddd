import React,{useEffect, useState} from "react";
import "./Background.css";

function Background()
{
    const [color,setColor]=useState();

    function selectRed()
    {
        setColor("red");
    }

    function selectBlue()
    {
        setColor("blue");
    }

    function selectYellow()
    {
        setColor("yellow");
    }

    function selectGreen()
    {
        setColor("green");
    }

    useEffect(()=>{
        console.log(color);
        document.body.style.backgroundColor=color;
    },[color])

    return(
        <div  className="main">
            <button 
            onClick={selectRed}
            className="select" >Red</button>
            <button className="select"
            onClick={selectBlue}
            >Blue</button>
            <button className="select"
            onClick={selectYellow}
            >Yellow</button>
            <button className="select"
            onClick={selectGreen}
            >Green</button>
        </div>
    );
}

export default Background;