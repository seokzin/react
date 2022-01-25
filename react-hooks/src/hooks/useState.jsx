import React from "react";

const useState = () => {
  const [item, setItem] = useState(1);

  const increment = () => setItem(item + 1);
  const decrement = () => setItem(item - 1);

  return (
    <div>
      <h1>Hello {item}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default useState;
