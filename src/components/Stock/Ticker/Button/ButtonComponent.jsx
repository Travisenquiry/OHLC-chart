import React, { useEffect } from 'react';
import './ButtonComponent.css';

const ButtonComponent = (props) => {

    return (
        <div className="button-div">
            <button className="ticker unselected">{props.symbol}</button>
        </div>
    )
}

export default ButtonComponent;