import * as React from "react";
import InputVariables from "./input-variables.js";
import CalculatorChart from "./calculator-chart.js";
import "./styles/styles.css";

export function CompoundInterest() {
  const defaultState = {
    initialAmount: 10000,
    period: 10,
    growthRate: 8,
    monthlyContribution: 1600,
  };

  const [state, setState] = React.useState(defaultState);

  return (
    <div className="annualCompoundCalculator">
      <h1 className="text-center">Annual Compound Interest Calculator</h1>
      <hr />
      <InputVariables onUpdate={(variables) => setState(variables)} />
      <hr />
      <CalculatorChart {...state} /> */}
    </div>
  );
}
