import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInput = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="calculator">
          <h1 className="calculator-heading">
            Calculate the letters you enter
          </h1>
          <label htmlFor="inputLetters" className="input-label">
            Enter the phrase
          </label>
          <input
            id="inputLetters"
            type="text"
            placeholder="Enter the phrase"
            className="letters-input"
            onChange={this.onChangeInput}
            value={inputPhrase}
          />
          <div className="count-container">
            <p className="no-of-letters">No.of letters: {inputPhrase.length}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
