import React, { useState } from 'react';
import './Main.css';
import ChartComponent from './components/Stock/Ticker/Chart/ChartComponent.jsx';
import ButtonComponent from './components/Stock/Ticker/Button/ButtonComponent.jsx';

const Main = () => {
    //State for selected symbol, default state set as local storage for user's choice of stock to not be lost upon page refresh
    const [stockSymbol, setStockSymbol] = useState(window.localStorage.getItem("symbol"));

    //Button onclick function to be passed to button component to set parent state for selected symbol
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
                    <ButtonComponent symbol="FGPR" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="BUKS" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="SDRLF" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="TNYBF" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                    <ButtonComponent symbol="BLOZF" selected={stockSymbol} mouseClick={buttonMouseClickFunction}/>
                </div>
                <div className="chart-container">
                    <ChartComponent selected={stockSymbol}/>
                </div>
            </div>
            <div className="footer">
                <p className="footer-text">a footer</p>
            </div>
        </div>
    );
};

export default Main;