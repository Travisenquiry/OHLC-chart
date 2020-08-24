import React from 'react';
import ChartComponent from './components/Stock/Chart/ChartComponent.jsx';

const Main = () => {
    return (
        <div className="Main">
            <ChartComponent symbol="CNTTQ"/>
        </div>
    );
};

export default Main;