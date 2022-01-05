import React from "react";
import data from "../timeline";
import TimelineList from "./TimelineList";
import timeList from "./TimelineList";

function Home() {
  const mydata = data.map((time) => <TimelineList list={time} />);
  return (
    <div className="bg">
      <h1 className="title">My Timeline</h1>
      <div className="wrap"> {mydata}</div>
    </div>
  );
}

export default Home;
