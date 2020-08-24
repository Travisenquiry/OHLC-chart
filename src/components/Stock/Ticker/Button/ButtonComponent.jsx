import React, { useState, useEffect} from 'react';
import './ButtonComponent.css';

const ButtonComponent = (props) => {
    //States for selected symbol for re-rendering
    const [selectedSymbol, setSelectedSymbol] = useState(props.selected);
    
    //Re-renders the button if another symbol has been selected
    useEffect(() => {
        setSelectedSymbol(props.selected);
    }, [props.selected]);

    
    return (
        <div className="button-div">
            <button name={props.symbol} className={`ticker-btn ${selectedSymbol === props.symbol && "selected"}`} onClick={props.mouseClick}>{props.symbol}</button>
        </div>
    )
}

export default ButtonComponent;