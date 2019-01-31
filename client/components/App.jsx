import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import Result from "./Result";
import Game from "./Game";
import results from "../../data/results";

const header = "Who Am I?";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { results: results };
    this.toggleResult = this.toggleResult.bind(this);
  }

  toggleResult() {
    this.setState({ showingResult: !this.state.showingResult });
  }
  render() {
    const { isOpened } = this.state;
    return (
      <div>
        <SweetAlert info title="Let's play a game!" onConfirm={this.hideAlert}>
          Hey there! Please read the description provided on this page and
          select the image which you believe most accurately represents that
          description.. don't take too long to think about it.
        </SweetAlert>
        <h1>{header}</h1>

        <button onClick={this.toggleResult}>Check My Result</button>

        <Result
          isShowing={this.state.showingResult}
          name={this.state.results.answer}
        />
      </div>
    );
  }
}

export default App;
