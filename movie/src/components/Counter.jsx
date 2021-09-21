import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={countUp}>{count}</button>
    </div>
  );
};

export default Counter;
