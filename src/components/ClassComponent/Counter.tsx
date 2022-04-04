import React, { Component } from 'react'

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}


export class Counter extends Component<CounterProps,CounterState> {

    state = {
        count : 0,
    }

    handleClick = () => {
        this.setState(prev => ({
            count: prev.count + 1
        }))
    }

  render() {
    return (
      <div>Counter

        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}

export default Counter