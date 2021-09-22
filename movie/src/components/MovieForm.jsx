import React, { useState } from "react";
import InputField from "./InputField";

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState("");

  const resetForm = () => {
    setTitle("");
    setYear("");
  };

  const resetErrors = () => {
    setTitleError("");
    setYearError("");
  };

  const validateForm = () => {
    let validated = true;
    resetErrors();

    if (!title) {
      setTitleError("영화 제목을 넣어주세요.");
      validated = false;
    }
    if (!year) {
      setYearError("개봉년도를 넣어주세요.");
      validated = false;
    }

    return validated;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addMovie({ id: Date.now(), title, year });
      resetErrors();
      resetForm();
    }
  };

  return (
    <div>
      <h2>Add movie</h2>
      <form onSubmit={onSubmit}>
        <InputField
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          errorMessage={titleError}
        />

        <InputField
          type="number"
          value={year}
          placeholder="year"
          onChange={(e) => setYear(e.target.value)}
          errorMessage={yearError}
        />

        <button>ADD</button>
      </form>
    </div>
  );
};

export default MovieForm;
