import React, { useState, useEffect} from 'react';
import './ButtonComponent.css';

const ButtonComponent = (props) => {
    //States for selected symbol for re-rendering
    const [selectedSymbol, setSelectedSymbol] = useState(props.selected);
    //Variable for selected/unselected
    let selection;

    //Checks if current selected stock symbol is same as button (including first time user which is null)
    if(props.symbol === selectedSymbol){
        selection = "ticker selected";
    } else {
        selection = "ticker";
    }

    //Re-renders the button if another symbol has been selected
    useEffect(() => {
        setSelectedSymbol(props.selected);
    }, [props.selected]);

    return (
        <div className="button-div">
            <button className={selection}>{props.symbol}</button>
        </div>
    )
}

export default ButtonComponent;