import React, { useEffect } from 'react';
import './ButtonComponent.css';

const ButtonComponent = () => {

    useEffect(() => {

        //Add event listeners to all ticker button
        let tickerButton = document.getElementsByClassName("ticker")[1];
        tickerButton.addEventListener("mouseover", (() => {
            tickerButton.classList.add("selected");
            tickerButton.classList.remove("unselected");
        }));

    }, []);

    return (
        <div className="button-div">
            <button className="ticker unselected">MSFT</button>
        </div>
    )
}

export default ButtonComponent;