import * as React from "react";
import "./styles/styles.css";

function toNumber(value) {
  return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Summary({ period, data }) {
  return (
    <div className="calculator">
      <h2>Summary</h2>
      <p>
        In {period} years, you will have -
        <strong>${toNumber(data[data.length - 1].value)}</strong>
        (with dividends reinvested)
      </p>
      <h3>Breakdown</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">End of Year</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ label, value }) => (
            <tr key={label}>
              <td>{label}</td>
              <td>${value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Summary;
