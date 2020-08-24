import React, {useState} from 'react';
import ChartComponent from './components/Stock/Ticker/Chart/ChartComponent.jsx';
import ButtonComponent from './components/Stock/Ticker/Button/ButtonComponent.jsx';
import './Main.css';

const Main = () => {
    //State used for symbol
    const [stockSymbol, setStockSymbol] = useState('');

    return (
        <div className="Main">
            <span className="tickers">
                <ButtonComponent />
            </span>
            <span>
                <ChartComponent symbol="CNTTQ"/>
            </span>
        </div>
    );
};

export default Main;