import React, { useState } from "react";

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const resetForm = () => {
    setTitle("");
    setYear("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addMovie({ id: Date.now(), title, year });
    resetForm();
  };

  return (
    <div>
      <h2>Add movie</h2>
      <form onSubmit={onSubmit}>
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
    </div>
  );
};

export default MovieForm;
