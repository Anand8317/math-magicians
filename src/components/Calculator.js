import React, { PureComponent } from 'react';
import calculate from '../logics/calculate';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const value = calculate(this.state, e.currentTarget.innerText);
    this.setState(() => ({
      total: value.total,
      next: value.next,
      operation: value.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="subroot">
        <div id="input">
          {total}
          {operation}
          {next}
        </div>
        <div className="row1">
          <button id="ac" type="button" onClick={this.handleClick}>AC</button>
          <button id="negative" type="button" onClick={this.handleClick}>+/-</button>
          <button id="modulus" type="button" onClick={this.handleClick}>%</button>
          <button id="divide" className="col4" type="button" onClick={this.handleClick}>/</button>
        </div>
        <div className="row2">
          <button id="seven" type="button" onClick={this.handleClick}>7</button>
          <button id="eight" type="button" onClick={this.handleClick}>8</button>
          <button id="nine" type="button" onClick={this.handleClick}>9</button>
          <button id="multiply" className="col4" type="button" onClick={this.handleClick}>x</button>
        </div>
        <div className="row3">
          <button id="four" type="button" onClick={this.handleClick}>4</button>
          <button id="five" type="button" onClick={this.handleClick}>5</button>
          <button id="six" type="button" onClick={this.handleClick}>6</button>
          <button id="minus" className="col4" type="button" onClick={this.handleClick}>-</button>
        </div>
        <div className="row4">
          <button id="one" type="button" onClick={this.handleClick}>1</button>
          <button id="two" type="button" onClick={this.handleClick}>2</button>
          <button id="three" type="button" onClick={this.handleClick}>3</button>
          <button id="plus" className="col4" type="button" onClick={this.handleClick}>+</button>
        </div>
        <div className="row5">
          <button id="zero" type="button" onClick={this.handleClick}>0</button>
          <button id="dot" type="button" onClick={this.handleClick}>.</button>
          <button id="equal" className="col4" type="button" onClick={this.handleClick}>=</button>
        </div>

      </div>
    );
  }
}
