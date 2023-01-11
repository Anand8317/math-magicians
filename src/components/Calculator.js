import React, { PureComponent } from 'react';

export default class Calculator extends PureComponent {
  render() {
    return (
      <div id="subroot">
        <input id="input" value={0} />
        <div className="row1">
          <button id="ac" type="button">AC</button>
          <button id="negative" type="button">+/-</button>
          <button id="modulus" type="button">%</button>
          <button id="divide" className="col4" type="button">/</button>
        </div>
        <div className="row2">
          <button id="seven" type="button">7</button>
          <button id="eight" type="button">8</button>
          <button id="nine" type="button">9</button>
          <button id="multiply" className="col4" type="button">x</button>
        </div>
        <div className="row3">
          <button id="four" type="button">4</button>
          <button id="five" type="button">5</button>
          <button id="six" type="button">6</button>
          <button id="minus" className="col4" type="button">-</button>
        </div>
        <div className="row4">
          <button id="one" type="button">1</button>
          <button id="two" type="button">2</button>
          <button id="three" type="button">3</button>
          <button id="plus" className="col4" type="button">+</button>
        </div>
        <div className="row5">
          <button id="zero" type="button">0</button>
          <button id="dot" type="button">.</button>
          <button id="equal" className="col4" type="button">=</button>
        </div>

      </div>
    );
  }
}
