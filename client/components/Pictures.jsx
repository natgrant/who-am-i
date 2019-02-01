import React from "react";
import pictures from "../../data/pictures";

const Pictures = props => {
  //Need the three images to be added here with click events
  // console.log(params);
  // const id = Number(match.params.id);

  const people = [
    {
      id: 1,
      name: "Taylor",
      photo: "/images/person1.png"
    },
    {
      id: 2,
      name: "Alex",
      photo: "/images/person2.png"
    },
    {
      id: 3,
      name: "Sam",
      photo: "/images/person3.png"
    }
  ];

  // const id = 1;
  // const profile = pictures.find(item => item.id === id);
  // console.log(profile);

  return (
    <React.Fragment>
      <div className="picture">
        {people.map((item, key) => (
          <img src={item.photo} key={key} />
        ))}
        {/* <img src={profile.photo} alt="who am i" /> */}
      </div>
    </React.Fragment>
  );
};

export default Pictures;
