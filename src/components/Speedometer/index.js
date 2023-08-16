// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onDecrease = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState - 10}))
    }
  }

  onIncrease = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState + 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />

        <h1 className="type-text">Speed is {count}mph</h1>
        <p className="note-text">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="button-container">
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onIncrease}
          >
            Accelerate
          </button>
          <button
            className="Apply-brake-btn"
            type="button"
            onClick={this.onDecrease}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
