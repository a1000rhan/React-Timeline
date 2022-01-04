import React from "react";

function TimelineList({ list }) {
  return (
    <div className="wrap">
      <div className="container">
        <div className="bag">
          <h1>{list.year}</h1>
        </div>
        <img className="img" src={list.image} alt="event" />

        <p className="texts">{list.event}</p>
      </div>
    </div>
  );
}

export default TimelineList;
