import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLabel, setButtonLabel] = useState("클릭");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  const clickButton = () => {
    setButtonLabel("CLICK");
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

      <Counter click="버튼" />
      <Counter click={buttonLabel} />
      <Counter />
      <button onClick={clickButton}>HOOKS</button>
    </>
  );
};

export default App;
