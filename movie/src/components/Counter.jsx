import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const label = props.click || "라벨";

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={countUp}>
        {label} {count}
      </button>
    </div>
  );
};

export default Counter;
