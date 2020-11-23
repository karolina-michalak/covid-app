import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
