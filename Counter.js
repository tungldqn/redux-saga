/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync }) =>
      <div>
        <button onClick={onIncrementAsync}>
          Increment Async
        </button>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrementAsync}>
          Decrement Async
        </button>
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
