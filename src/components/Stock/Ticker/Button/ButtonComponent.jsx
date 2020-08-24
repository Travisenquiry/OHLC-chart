import React, { useEffect } from 'react';
import './ButtonComponent.css';

const ButtonComponent = () => {

    useEffect(() => {


    }, []);

    return (
        <div className="button-div">
            <button className="ticker unselected">MSFT</button>
        </div>
    )
}

export default ButtonComponent;