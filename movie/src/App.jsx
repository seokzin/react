import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLabel, setButtonLabel] = useState("클릭");
  const [mode, setMode] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  const clickButton = () => {
    setButtonLabel("CLICK");
  };

  const toggle = () => setMode(!mode);

  const changeMode = mode ? "LIGHT MODE" : "DARK MODE";

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
      <button onClick={toggle}>{mode ? "light" : "dark"}</button>

      <div>
        <h2>{changeMode}</h2>
      </div>
    </>
  );
};

export default App;
