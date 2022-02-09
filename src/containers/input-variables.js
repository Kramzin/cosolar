import * as React from "react";
import "./styles/styles.css";

function InputVariables({ onUpdate }) {
  const defaultState = {
    initialAmount: 10000,
    period: 10,
    growthRate: 8,
    monthlyContribution: 1600,
  };

  const [state, setState] = React.useState(defaultState);

  const { initialAmount, period, growthRate, monthlyContribution } = state;

  return (
    <section>
      <div className="flex">
        <label htmlFor="initialAmount">
          <h4> Initial deposit ($) </h4>
          <input
            type="number"
            id="initialAmount"
            name="initialAmount"
            value={initialAmount}
            onChange={({ target }) =>
              setState({ ...state, initialAmount: Number(target.value) })
            }
          />
        </label>
        <label htmlFor="period">
          <h4> Period of time (years)</h4>
          <input
            type="number"
            id="period"
            name="period"
            value={period}
            onChange={({ target }) =>
              setState({ ...state, period: Number(target.value) })
            }
          />
        </label>
        <label htmlFor="growthRate">
          <h4> Annual Growth Rate (%) </h4>
          <input
            type="number"
            id="growthRate"
            name="growthRate"
            value={growthRate}
            onChange={({ target }) =>
              setState({ ...state, growthRate: Number(target.value) })
            }
          />
        </label>
        <label htmlFor="monthlyContribution">
          <p />
          Monthly Contribution ($)
          <input
            type="number"
            id="monthlyContribution"
            name="monthlyContribution"
            value={monthlyContribution}
            onChange={({ target }) =>
              setState({ ...state, monthlyContribution: Number(target.value) })
            }
          />
        </label>
      </div>
      <button type="button" onClick={() => onUpdate(state)}>
        Update Chart
      </button>
    </section>
  );
}

export default InputVariables;
