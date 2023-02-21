import React from 'react';

const Button = ({handleClick, buttonClass}) => {


    return(
        <div>
            <button className={buttonClass} onClick={handleClick}>Send</button>
        </div>
    )

}

export default Button;