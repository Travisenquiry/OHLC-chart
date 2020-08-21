import React, { useState, useEffect } from 'react';

const ChartComponent = () => {
    useEffect(() => {
        let chart = document.getElementById("chart");
        let ctx = chart.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();
    });

    return (
        <canvas id="chart"></canvas>
    )
};

export default ChartComponent;