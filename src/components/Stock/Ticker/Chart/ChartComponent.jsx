import React, { useEffect } from 'react';
import './ChartComponent.css';

const ChartComponent = (props) => {

    //Get stock ticker data from Alpha Vantage API function to be called in useEffect after DOM elements are drawn
    const getStock = (props) => {
        //Variables
        let stockSymbol = props.selected;
        const apiLink = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=GRWNDOCNLWTTES40`;
        
        //Reinitialized chart DOM element for bearish and bullish symbols to prevent overloading of parameters
        let chart = document.getElementById("chart");
        let ctx = chart.getContext("2d");

        fetch(apiLink)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data){
                    //Initialize array to consist of 50 data by latest date sorted from earliest to latest
                    //Chart is designed to store only 50 data by the latest result everyday
                    let stockChartArray = Object.values(data["Time Series (Daily)"]).slice(0, 50).reverse();

                    //Flips the canvas on the Y axis for easier symbols drawing formula with zero starting from bottom to top
                    ctx.transform(1, 0, 0, -1, 0, chart.height);

                    //Creation of symbols
                    for (let i=0; i<stockChartArray.length; i++){
                        //Variables for readability
                        let open = parseFloat(stockChartArray[i]["1. open"]);
                        let close = parseFloat(stockChartArray[i]["4. close"]);
                        let high = parseFloat(stockChartArray[i]["2. high"]);
                        let low = parseFloat(stockChartArray[i]["3. low"]);

                        //Setup of symbols
                        ctx.lineWidth = 3;
                        //Check for bearish or bullish to declare the color
                        if(open > close){
                            //Bearish Symbol
                            ctx.strokeStyle = "#ee6f72";
                        } else if(open < close) {
                            //Bullish Symbol
                            ctx.strokeStyle = "#58bf66";
                        } else if(open === close) {
                            //Even Symbol
                            ctx.strokeStyle = "#000000";
                        } else {
                            console.log("error");
                        }

                        //Drawing of symbols
                        //High-low
                        //Set to 16px per stock change gap, +1 on X-axis due to index starting at 0
                        //Y-axis formula is done by purely trial and error, unable to explain why it works
                        ctx.beginPath();
                        ctx.moveTo(50 + (16 * (i + 1)), ((high * 800) - 110));
                        ctx.lineTo(50 + (16 * (i + 1)), ((low * 800) - 110));
                        ctx.stroke();

                        //Open (Set to 7px on X-axis for visibility)
                        ctx.beginPath();
                        ctx.moveTo(50 + (16 * (i + 1)), (open * 800) - 110);
                        ctx.lineTo((50 + (16 * (i + 1)) - 7), (open * 800) - 110);
                        ctx.stroke();

                        //Close (Set to 7px on X-axis for visibility)
                        ctx.beginPath();
                        ctx.moveTo(50 + (16 * (i + 1)), (close * 800) - 110);
                        ctx.lineTo((50 + (16 * (i + 1)) + 7), (close * 800) - 110);
                        ctx.stroke();
                    }
                }
            )
    }

    useEffect(() => {
        //Calls getStock(props) function after DOM for the chart background has been drawn
        //Checks whether if the user is new, do not call getStock function on load if true as the result will be null without symbol
        if(window.localStorage.getItem("symbol") !== null) {
            getStock(props);
        }

        //Implements chart canvas
        let chart = document.getElementById("chart");
        let ctx = chart.getContext("2d");
        
        //Set fixed canvas size for easier X & Y axis drawing of symbols
        chart.width = 900;
        chart.height = 500;
        
        //Code for chart background (Most outer X & Y line)
        //There is a 50px gap for both X and Y axis to the corners for the canvas to fit in the center
        //(50px gap is taken into account for the chart background methods below)
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, 450);
        ctx.lineTo(850, 450);
        ctx.stroke();
        
        //Code for individual grey lines (Total of 50 lines)
        for(let i=1; i<51; i++){
            let nextLine = i*16
            ctx.beginPath();
            ctx.lineWidth = 0.5
            ctx.strokeStyle = 'grey';
            ctx.moveTo(50 + nextLine, 50);
            ctx.lineTo(50 + nextLine, 450);
            ctx.stroke();
        }

        //Y-axis price scale (Pre-defined to be from $0.2 to $0.7)
        //Unable to figure out a way to dynamically enable the scale to extend based on the average high-low
        //Gap between each scale is 40px due to the defined chart height and container height
        for(let i=0; i<11; i++){
            let priceScaleDistance = 50 + (40 * i);
            let priceDifference = 7 - (0.5 * i);
            let yAxisPrice = "$" + (priceDifference / 10).toString();
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(50, priceScaleDistance);
            ctx.lineTo(42, priceScaleDistance);
            ctx.stroke();
            ctx.font = "12px Times New Roman";
            ctx.textAlign = "right";
            ctx.fillText(yAxisPrice, 40, priceScaleDistance+4);      
        }
    }, [props.selected]);

    return (
        <div id="chart-div">
            <canvas id="chart"></canvas>
        </div>
    )
};

export default ChartComponent;