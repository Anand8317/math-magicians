import React, { useState } from 'react';
import calculate from '../logics/calculate';

export default function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const handleClick = (e) => {
    const value = calculate(state, e.currentTarget.innerText);
    setState(() => ({
      total: value.total,
      next: value.next,
      operation: value.operation,
    }));
  };

  const { total, operation, next } = state;
  return (
    <div className="calculator">
      <div>
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div id="subroot">
        <div id="input">
          {total}
          {operation}
          {next}
        </div>
        <div className="row1">
          <button id="ac" type="button" onClick={handleClick}>AC</button>
          <button id="negative" type="button" onClick={handleClick}>+/-</button>
          <button id="modulus" type="button" onClick={handleClick}>%</button>
          <button id="divide" className="col4" type="button" onClick={handleClick}>÷</button>
        </div>
        <div className="row2">
          <button id="seven" type="button" onClick={handleClick}>7</button>
          <button id="eight" type="button" onClick={handleClick}>8</button>
          <button id="nine" type="button" onClick={handleClick}>9</button>
          <button id="multiply" className="col4" type="button" onClick={handleClick}>x</button>
        </div>
        <div className="row3">
          <button id="four" type="button" onClick={handleClick}>4</button>
          <button id="five" type="button" onClick={handleClick}>5</button>
          <button id="six" type="button" onClick={handleClick}>6</button>
          <button id="minus" className="col4" type="button" onClick={handleClick}>-</button>
        </div>
        <div className="row4">
          <button id="one" type="button" onClick={handleClick}>1</button>
          <button id="two" type="button" onClick={handleClick}>2</button>
          <button id="three" type="button" onClick={handleClick}>3</button>
          <button id="plus" className="col4" type="button" onClick={handleClick}>+</button>
        </div>
        <div className="row5">
          <button id="zero" type="button" onClick={handleClick}>0</button>
          <button id="dot" type="button" onClick={handleClick}>.</button>
          <button id="equal" className="col4" type="button" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
}
