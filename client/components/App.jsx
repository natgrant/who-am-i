import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import Result from "./Result";
import Pictures from "./Pictures";
import results from "../../data/results";
import Description from "./Description"
import Pictures from "./Pictures"

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
  render() {0
    return (
      <div>
        <SweetAlert
          show={this.state.show}
          info
          title="Let's play a game!"
          onConfirm={() => this.setState({ show: false })}
        >
          Hey there! Please read the description provided on this page and
          select the image which you believe most accurately represents that
          description.. don't take too long to think about it.
        </SweetAlert>
        <h1>{header}</h1>

   

         <div className = "description"> 
        <Description name = "Bob" occupation = "builder" hobby = "motorbike" />
        </div>



        <Result
          isShowing={this.state.showingResult}
          name={this.state.results.answer}
        />
        <Pictures />
      </div>
    );
  }
}

export default App;
