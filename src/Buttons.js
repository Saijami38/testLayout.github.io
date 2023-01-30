import React, { useState } from "react";
import Per from "./Per";
import Edu from "./Edu";
import Car from "./Car";
import "./buttons.css"
function Buttons() {
  const [show , setShow] = useState("HOMEPAGE")
  return (
    <div   >
      <h1>{show}</h1>
      {show === "HOMEPAGE" ? (
        <div>
          <button className="buttons" onClick={() => 
          {setShow("pinfo");}} > PERSONAL INFO </button>
          <br/><button className="buttons" onClick={() => 
          {setShow("einfo")}} > EDUCATIONAL INFO </button>
          <button className="buttons" onClick={() => 
          {setShow("cinfo")}}> CAREER INFO </button>
        </div>
      ) : show === "pinfo" ? (<Per/>) 
         : show === "einfo" ? (<Edu/>)
         : (<Car/> )
      }
      {show === "HOMEPAGE"? (<h1></h1>) : <button className="buttons" onClick={() => {
        setShow("HOMEPAGE")
      }}>
        HOME
        
        </button>}
    
    </div>
  );
}

export default Buttons;
