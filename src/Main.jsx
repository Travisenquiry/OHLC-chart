import React, {useState, useEffect} from 'react';
import ChartComponent from './components/Stock/Ticker/Chart/ChartComponent.jsx';
import ButtonComponent from './components/Stock/Ticker/Button/ButtonComponent.jsx';
import './Main.css';

const Main = () => {
    //State used for symbol
    const [stockSymbol, setStockSymbol] = useState('');

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
        }


    }, []);

    return (
        <div className="container">
            <div className="header">
            </div>
            <div className="tickers-container">
                <ButtonComponent />
                <ButtonComponent />
                <ButtonComponent />
                <ButtonComponent />
                <ButtonComponent />
            </div>
            <div className="chart-container">
                <ChartComponent symbol="CNTTQ"/>
            </div>
            <div className="footer">
            </div>
        </div>
    );
};

export default Main;