import React, {useState, useEffect} from 'react';
import ChartComponent from './components/Stock/Ticker/Chart/ChartComponent.jsx';
import ButtonComponent from './components/Stock/Ticker/Button/ButtonComponent.jsx';
import './Main.css';

const Main = () => {
    //States (Used for re-rendering of chart)
    const [stockSymbol, setStockSymbol] = useState("");

    useEffect(() => {
        //Add event listeners to all ticker button
        let tickerButtons = document.getElementsByClassName("ticker");
        for (let i=0; i < tickerButtons.length; i++) {

            //List of functions for mouse events
            //Mouse over
            let mouseOverFunction = (() => {
                tickerButtons[i].classList.add("selected");
            });
            //Mouse out
            //Condition to check if ticker is currently selected
            let mouseOutFunction = (() => {
                if(window.localStorage.getItem("symbol") !== tickerButtons[i].innerHTML) {
                    tickerButtons[i].classList.remove("selected");
                }
            });

            //Add mouseover event to change button color on hover
            tickerButtons[i].onMouseOver =  mouseOverFunction;

            //Add mouseout event to change button color on leaving
            tickerButtons[i].onMouseOut = mouseOutFunction;

            //Add onclick event to change ticker upon click
            //Does not used the variable initialized due to changed local storage
            tickerButtons[i].addEventListener("click", (() => {
                window.localStorage.setItem("symbol", tickerButtons[i].innerHTML);
                setStockSymbol(window.localStorage.getItem("symbol"));
                console.log(stockSymbol);
            }));
        }

    }, [stockSymbol]);

    return (
        <div className="container">
            <div className="header">
            </div>
            <div className="tickers-container">
                <ButtonComponent symbol="AVHOQ" selected={stockSymbol}/>
                <ButtonComponent symbol="CNTTQ" selected={stockSymbol}/>
                <ButtonComponent symbol="CPIVF" selected={stockSymbol}/>
                <ButtonComponent symbol="EVLLF" selected={stockSymbol}/>
                <ButtonComponent symbol="BIOL" selected={stockSymbol}/>
            </div>
            <div className="chart-container">
                <ChartComponent symbol={window.localStorage.getItem("symbol")}/>
            </div>
            <div className="footer">
            </div>
        </div>
    );
};

export default Main;