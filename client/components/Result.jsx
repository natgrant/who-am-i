import React from "react";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = { something: "Hey" };
  }

  render() {
    if (this.props.isShowing) {
      return (
        <React.Fragment>
          <h3>Result's are in!</h3>
          <p>{`Answer: ${this.props.name}`}</p>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default Result;
