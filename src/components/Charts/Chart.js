import React from "react";
import ChartBar from "./ChartBar";
import "./Charts.css";
const Chart = (props) => {
    const dataPointsValues = props.chartDataPoints.map(item=> item.value)
    const totalMaximum= Math.max(...dataPointsValues);
    console.log('totalMaximum',totalMaximum);
return(
    <div className="chart">
    {props.chartDataPoints.map((dataPoint) => {
        
      return (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      );
    })}
  </div>
)

};
export default Chart;
