import React, { useState } from 'react';
import Button from './Button';


const ButtonHandler = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick() {
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive");
        }

    }
    return ( 
        <div>
            <Button handleClick= {handleClick} buttonClass={buttonClass}/>
        </div>
     );
}
 
export default ButtonHandler;