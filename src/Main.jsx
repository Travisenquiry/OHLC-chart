import React, { useState } from 'react';
import ChartComponent from './components/Stock/Ticker/Chart/ChartComponent.jsx';
import ButtonComponent from './components/Stock/Ticker/Button/ButtonComponent.jsx';
import './Main.css';

const Main = () => {
    //States (Used for re-rendering of chart)
    const [stockSymbol, setStockSymbol] = useState(window.localStorage.getItem("symbol"));

    //Button onclick function to be passed to button component to set state
    const buttonMouseClickFunction = (e) => {
        window.localStorage.setItem("symbol", e.target.name);
        setStockSymbol(window.localStorage.getItem("symbol"));
        console.log(stockSymbol);
    };

    return (
        <div className="container">
            <div className="header">
            </div>
            <div className="tickers-container">
                <ButtonComponent symbol="AVHOQ" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                <ButtonComponent symbol="CNTTQ" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                <ButtonComponent symbol="CPIVF" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                <ButtonComponent symbol="EVLLF" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                <ButtonComponent symbol="BIOL" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
            </div>
            <div className="chart-container">
                <ChartComponent symbol={stockSymbol}/>
            </div>
            <div className="footer">
            </div>
        </div>
    );
};

export default Main;