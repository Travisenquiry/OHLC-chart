import React, {useState, useEffect} from 'react';
import ChartComponent from './components/Stock/Ticker/Chart/ChartComponent.jsx';
import ButtonComponent from './components/Stock/Ticker/Button/ButtonComponent.jsx';
import './Main.css';

const Main = () => {
    //States
    const [stockSymbol, setStockSymbol] = useState("");
    //Get localStorage stock symbol
    const storedStockSymbol = window.localStorage.getItem("symbol");

    useEffect(() => {
        //Add event listeners to all ticker button
        let tickerButtons = document.getElementsByClassName("ticker");
        for (let i=0; i < tickerButtons.length; i++) {
            //Add mouseover event to change button color on hover
            tickerButtons[i].addEventListener("mouseover", (() => {
                tickerButtons[i].classList.add("selected");
                tickerButtons[i].classList.remove("unselected");
            }));

            //Add mouseout event to change button color on leaving
            tickerButtons[i].addEventListener("mouseout", (() => {
                tickerButtons[i].classList.add("unselected");
                tickerButtons[i].classList.remove("selected");
            }));

            //Add onclick event to change ticker upon click
            tickerButtons[i].addEventListener("click", (() => {
                window.localStorage.setItem("symbol", tickerButtons[i].innerHTML);
                setStockSymbol(window.localStorage.getItem("symbol"));
                console.log(window.localStorage.getItem("symbol"));
            }));
        }

    }, []);

    return (
        <div className="container">
            <div className="header">
            </div>
            <div className="tickers-container">
                <ButtonComponent symbol="AVHOQ"/>
                <ButtonComponent symbol="CNTTQ"/>
                <ButtonComponent />
                <ButtonComponent />
                <ButtonComponent />
            </div>
            <div className="chart-container">
                <ChartComponent symbol={storedStockSymbol}/>
            </div>
            <div className="footer">
            </div>
        </div>
    );
};

export default Main;