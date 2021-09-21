import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Card from "./components/Card";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLabel, setButtonLabel] = useState("클릭");
  const [mode, setMode] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [movies, setMovies] = useState([
    { title: "avengers 1", year: 2001 },
    { title: "avengers 2", year: 2002 },
    { title: "avengers 3", year: 2003 },
    { title: "avengers 4", year: 2004 },
  ]);

  const renderMovies = movies.map((movie) => {
    return <Card movie={movie} key={movie.id} />;
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  const clickButton = () => {
    setButtonLabel("CLICK");
  };

  const toggle = () => setMode(!mode);

  const changeMode = mode ? "LIGHT MODE" : "DARK MODE";

  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, { title, year }]);
    setTitle("");
    setYear("");
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

      <button onClick={toggle}>{mode ? "light" : "dark"}</button>

      <div>
        <h2>{changeMode}</h2>
      </div>

      <hr />

      <h2>Add movie</h2>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          value={year}
          placeholder="year"
          onChange={(e) => setYear(e.target.value)}
        />
        <button>ADD</button>
      </form>

      <hr />

      <h1>Movie List</h1>
      {renderMovies}
    </>
  );
};

export default App;
