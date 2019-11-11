import React, { Component } from 'react'
import {connect} from 'react-redux'

class Input extends Component {
  render() {
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            // value={this.state.currentGuess}
            // onChange={(evt) => this.setState({ currentGuess: evt.target.value })}
            placeholder="enter guess" />
          <button
            data-test="submit-button"
            onClick={(evt) => this.submitGuessedWord(evt)}
            className="btn btn-primary mb-2"
            type="submit">
            Submit
          </button>
        </form>
      )
    return (
      <div data-test="component-input">
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps)(Input)
