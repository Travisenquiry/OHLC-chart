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
        setStockSymbol(e.target.name);
    };

    return (
        
        <div className="container">
            <div className="header">
                <h1 className="header-text">A HEADER</h1>
            </div>
            <div className="content-container">
                <div className="tickers-container">
                    <ButtonComponent symbol="AVHOQ" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="CNTTQ" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="CPIVF" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="EVLLF" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="BIOL" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="TRCH" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                </div>
                <div className="chart-container">
                    <ChartComponent symbol={stockSymbol}/>
                </div>
            </div>
            <div className="footer">
                <p className="footer-text">a footer</p>
            </div>
        </div>
    );
};

export default Main;