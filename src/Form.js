import React from "react";
import styles from "./Form.css";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        className="input"
        type="text"
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
      <button className="button" type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
