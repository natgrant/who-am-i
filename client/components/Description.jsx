import React from "react";
export default function Description(props) {
  return (
    <div className="description">
      <h2>
        <strong>GUESS WHO</strong>
      </h2>
      <h3>Name: {props.name}</h3>
      <h3>Occupation: {props.occupation}</h3>
      <h3>Likes: {props.hobby}</h3>
    </div>
  );
}
