import { useState } from "react";
import style from "./createForm.module.css";

const CreateForm = ({ dispatch }) => {
  const [url, setUrl] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setUrl(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD", data: url });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={handleChange}
        className={style.input}
        placeholder="Type a valid URL..."
      />
    </form>
  );
};

export default CreateForm;
