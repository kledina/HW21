import './App.css';
import React, { useState} from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Язык", "Число говорящих"],
  ["Китайский", 1311000],
  ["Испанский", 460000],
  ["Английский", 379000],
  ["Хинди", 341000],
  ["Арабский", 319000],
  ["Бенгальский", 228000],
  ["Португальский", 221000],
  ["Русский", 154000],
  ["Японский", 128000],
  ["Лахнда", 119000],
];

export const options = {
  title: "Топ-10 языков по числу носителей",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"800px"}
    />
  );
}

export default App;
