import React, { useEffect, useState } from "react";

function Clock() {
  // const [clockState, setClockState] = useState();

  // useEffect(() => {
  //   setInterval(() => {
  //     const date = new Date();
  //     setClockState(date.toLocaleTimeString());
  //   }, 1000);
  // }, []);
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        margin: "10px",
      }}
    >
      <p>
        {dateState.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p>
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          hourCycle: "h24",
          minute: "numeric",
          second: "numeric",
        })}
      </p>
    </div>
  );
}

export default Clock;
