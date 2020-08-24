import React, {useState} from 'react';
import ChartComponent from './components/Stock/Ticker/Chart/ChartComponent.jsx';
import ButtonComponent from './components/Stock/Ticker/Button/ButtonComponent.jsx';
import './Main.css';

const Main = () => {
    //State used for symbol
    const [stockSymbol, setStockSymbol] = useState('');

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