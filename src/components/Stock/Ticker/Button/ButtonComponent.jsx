import React, { useState, useEffect} from 'react';
import './ButtonComponent.css';

const ButtonComponent = (props) => {
    //States for selected symbol for re-rendering
    const [selectedSymbol, setSelectedSymbol] = useState("");
    return (
        <div className="button-div">
            <button className="ticker unselected">{props.symbol}</button>
        </div>
    )
}

export default ButtonComponent;