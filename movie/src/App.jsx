import React, { useState, useEffect } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  const countUp = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("first render");
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <input
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">Login</button>

        <div>
          <button onClick={countUp}>{count}</button>
        </div>
      </form>
    </>
  );
};

export default App;
