import React, { useState } from "react";

function Calculator() {
  // state variables for user inputs and result
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [choice, setChoice] = useState("");
  const [result, setResult] = useState("");

  // function to handle user input changes
  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "num1") {
      setNum1(value);
    } else if (name === "num2") {
      setNum2(value);
    } else if (name === "choice") {
      setChoice(value);
    }
  }

  // function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (choice === "1") {
      setResult(parseFloat(num1) + parseFloat(num2));
    } else if (choice === "2") {
      setResult(parseFloat(num1) - parseFloat(num2));
    } else if (choice === "3") {
      setResult(parseFloat(num1) * parseFloat(num2));
    } else if (choice === "4") {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setResult("Invalid input");
    }
  }

  // function to calculate result
  function calculate() {
    handleSubmit();
  }

  return (
    <div>
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="choice">Select operation:</label>
        <select name="choice" id="choice" onChange={handleChange}>
          <option value="">Choose an option</option>
          <option value="1">Add</option>
          <option value="2">Subtract</option>
          <option value="3">Multiply</option>
          <option value="4">Divide</option>
        </select>
        <br />
        <label htmlFor="num1">Enter first number:</label>
        <input type="number" name="num1" id="num1" value={num1} onChange={handleChange} />
        <br />
        <label htmlFor="num2">Enter second number:</label>
        <input type="number" name="num2" id="num2" value={num2} onChange={handleChange} />
        <br />
        <button type="submit">Calculate</button>
        <button type="button" onClick={calculate}>Calculate using function</button>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default Calculator;
