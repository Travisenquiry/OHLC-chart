import React, { useState, useEffect } from 'react';

const ChartComponent = () => {

    useEffect(() => {
        //Implemented chart canvas
        let chart = document.getElementById("chart");
        let ctx = chart.getContext("2d");
        let chartDiv = document.getElementById("chart-div");

        //Set canvas size to be chart-div size
        //Attempted to use lifecycle to set size dynamically but met with a bug of maximum update depth
        chart.width = chartDiv.clientWidth;
        chart.height = chartDiv.clientHeight;

        ctx.moveTo(0, 0);
        ctx.lineTo(50, 500);
        ctx.stroke();
    });

    return (
        <div id="chart-div">
            <canvas id="chart"></canvas>
        </div>
    )
};

export default ChartComponent;