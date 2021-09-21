import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  useEffect(() => {
    console.log("first render");
  }, []);

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
      </form>

      <Counter />
      <Counter />
      <Counter />
    </>
  );
};

export default App;
