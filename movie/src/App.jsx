import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Card from "./components/Card";
import MovieForm from "./components/MovieForm";
import axios from "axios";
import UserList from "./components/UserList";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLabel, setButtonLabel] = useState("클릭");
  const [mode, setMode] = useState(false);

  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie) => {
        return <Card movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : "추가된 영화가 없습니다.";

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

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

      <hr />

      <MovieForm addMovie={addMovie} />

      <hr />

      <h1>Movie List</h1>
      {renderMovies}

      <hr />

      <h1>Users</h1>
      <UserList users={users} />
    </>
  );
};

export default App;
