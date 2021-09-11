import * as React from "react";
import ReactDOM from "react-dom";
import { HeaderContainer } from "../containers/header";
import InputVariables from "../containers/input-variables";
import CalculatorChart from "../containers/calculator-chart";
import { Feature } from "../components";
import { CompoundInterest } from "../containers/calculator";

export default function Calculatorr() {
  return (
    <>
      <CompoundInterest />;
    </>
  );
}
