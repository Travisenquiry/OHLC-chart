import React, { useState, useEffect } from 'react';

//Get stock list function
const getStock = (props, setStockChartData) => {
    //Variables
    let stockChartArray = [];
    let stockSymbol = props.symbol;
    const apiLink = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=GRWNDOCNLWTTES40`;

    fetch(apiLink)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data){
                //Set array to consist of 50 data by latest date sorted from earliest to latest
                stockChartArray = Object.values(data["Time Series (Daily)"]).slice(0, 50).reverse();
                console.log(stockChartArray);
            }
        )
}

const ChartComponent = (props) => {
    //States
    const [stockChartData, setStockChartData] = useState([]);



    //Lifecycle Method
    useEffect(() => {


    //Get Stock listing and push into states
    getStock(props, setStockChartData);
        //Implemented chart canvas
        let chart = document.getElementById("chart");
        let ctx = chart.getContext("2d");
        //let chartDiv = document.getElementById("chart-div");

        //Set fixed canvas size
        //Attempted to use lifecycle to set size dynamically but met with a bug of maximum update depth
        chart.width = 900;
        chart.height = 500;
        
        //Code for chart background (Most outer X & Y line)
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, 450);
        ctx.lineTo(850, 450);
        ctx.stroke();
        
        //Loop for individual grey lines (Total 50 results)
        for(let i=1; i<51; i++){
            let nextLine = i*16
            ctx.beginPath();
            ctx.lineWidth = 0.5
            ctx.strokeStyle = 'grey';
            ctx.moveTo(50 + nextLine, 50);
            ctx.lineTo(50 + nextLine, 450);
            ctx.stroke();
        }

        //Y-axis price scale
        //Unable to figure out a way to dynamically enable the scale to extend based on the average high-low
        for(let i=0; i<11; i++){
            let priceScaleDistance = 50 + (40 * i);
            let priceDifference = 100 - (10 * i);
            let yAxisPrice = "$" + priceDifference.toString();
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(50, priceScaleDistance);
            ctx.lineTo(42, priceScaleDistance);
            ctx.stroke();
            ctx.font = "12px Times New Roman";
            ctx.textAlign = "right";
            ctx.fillText(yAxisPrice, 40, priceScaleDistance+4);      
        }

        //Testing of symbols (bullish)
        ctx.beginPath();
        ctx.strokeStyle = "#58bf66";
        ctx.lineWidth = 3;
        //High-to-low
        ctx.moveTo(66, 100);
        ctx.lineTo(66, 140);
        ctx.stroke();
        //Open
        ctx.moveTo(66, 130);
        ctx.lineTo(59, 130);
        ctx.stroke();
        //Close
        ctx.moveTo(66, 107);
        ctx.lineTo(73, 107);
        ctx.stroke();

        //Testing of symbols (bearish)
        ctx.beginPath();
        ctx.strokeStyle = "#ee6f72";
        ctx.lineWidth = 3;
        //High-to-low
        ctx.moveTo(82, 100);
        ctx.lineTo(82, 130);
        ctx.stroke();
        //Open
        ctx.moveTo(82, 106);
        ctx.lineTo(75, 106);
        ctx.stroke();
        //Close
        ctx.moveTo(82, 109);
        ctx.lineTo(89, 109);
        ctx.stroke();

    });

    return (
        <div id="chart-div">
            <canvas id="chart"></canvas>
        </div>
    )
};

export default ChartComponent;