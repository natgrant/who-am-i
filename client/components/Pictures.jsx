import React from "react";
import pictures from "../../data/pictures";

const Pictures = props => {
  //Need the three images to be added here with click events
  // console.log(params);
  // const id = Number(match.params.id);

  const people = [
    {
      id: 1,
      name: "Bob",
      photo: "/images/bob.jpg"
    },
    {
      id: 2,
      name: "Bob",
      photo: "/images/bob.jpg"
    },
    {
      id: 3,
      name: "Bob",
      photo: "/images/bob.jpg"
    }
  ];

  const data = [
    {
      id: 1,
      message: "biased 1",
      photo: "/images/bob.jpg"
    },
    {
      id: 2,
      message: "biased 2",
      photo: "/images/bob.jpg"
    },
    {
      id: 3,
      message: "biased 3",
      photo: "/images/bob.jpg"
    }
  ];

  // const id = 1;
  // const profile = pictures.find(item => item.id === id);
  // console.log(profile);

  return (
    <React.Fragment>
      <div className="picture1">
        {/* {people.map((item, key) => (
          <img className={`img-size id${item.id}`} src={item.photo} key={key} />
        ))} */}
        {/* <img src={profile.photo} alt="who am i" /> */}
        {/* <img
          src="/images/bob.jpg"
          style={{ width: "100px" }}
          onClick={() => {
            alert("click");
          }}
        /> */}

        {data.map((item, key) => (
          <img
            className={`img-size id${item.id}`}
            src={item.photo}
            key={key}
            onClick={() => {
              alert(item.message);
            }}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Pictures;
