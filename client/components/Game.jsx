import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { something: "Hey" };
  }

  nothing = "";

  render() {
    alert("hello");
    if (this.props.isShowing) {
      return (
        <React.Fragment>
          <h3>Result's are in!</h3>
          <p>{`Answer: ${this.props.name}`}</p>
        </React.Fragment>
      );
    } else {
      return nothing;
    }
  }
}

export default Game;
