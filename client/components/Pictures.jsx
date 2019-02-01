import React from "react";

import SweetAlert from "react-bootstrap-sweetalert";

import pictures from "../../data/pictures";

class Pictures extends React.Component {
  //Need the three images to be added here with click events
  // console.log(params);
  // const id = Number(match.params.id);

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          message: "biased 1",
          photo: "/images/person1.png"
        },
        {
          id: 2,
          message: "biased 2",
          photo: "/images/person2.png"
        },
        {
          id: 3,
          message: "biased 3",
          photo: "/images/person3.png"
        }
      ],
      clickedId: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    let clickedId = event.target.id;

    console.log("You clicked " + clickedId);

    this.setState({
      clickedId: clickedId
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="picture">
          {this.state.data.map((item, key) => (
            <img
              id={item.id}
              className={`img-size id${item.id}`}
              src={item.photo}
              key={key}
              onClick={this.handleClick}
            />
          ))}
        </div>

        {this.state.clickedId && (
          <SweetAlert
            show={this.state.show}
            danger
            title="WHOOPS"
            onConfirm={() => this.setState({ clickedId: null })}
          >
            <p>
              Looks like you're displaying signs of implicit bias - it might
              time to take a good hard look at yourself.
              <br />
              <a href="https://www.psychologytoday.com/us/blog/sound-science-sound-policy/201501/overcoming-implicit-bias-and-racial-anxiety">
                Click here
              </a>{" "}
              for more information.
            </p>
            {/* Find the record in the data that matches the this.state.clickedId
            and display it's message */}
          </SweetAlert>
        )}
      </React.Fragment>
    );
  }
}

export default Pictures;
