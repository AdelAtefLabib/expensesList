import React from "react";
import Chart from "../Charts/Chart";
const ExpensesChart = (props) => {
  const chartDataPoints = [
    { value: 0, label: "Jan" },
    { value: 0, label: "Feb" },
    { value: 0, label: "Mar" },
    { value: 0, label: "Apr" },
    { value: 0, label: "May" },
    { value: 0, label: "Jun" },
    { value: 0, label: "Jul" },
    { value: 0, label: "Aug" },
    { value: 0, label: "Sep" },
    { value: 0, label: "Oct" },
    { value: 0, label: "Nov" },
    { value: 0, label: "Dec" }
  ];

  props.Expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value+= expense.amount;
  });
console.log('chartDataPoints',chartDataPoints);
  return <Chart chartDataPoints={chartDataPoints} />;
};
export default ExpensesChart;
