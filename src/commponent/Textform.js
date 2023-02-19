import React, { useState } from "react";

export default function Textform(props) {
  const handleUpcase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Change To UpperCase", "success");
  };
  const handleLocase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Change To LowerCase", "success");
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "success");
  };

  const handleCopycase = () => {
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.showAlert("Copy Text", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      {" "}
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#122b56" : "white",
              color: props.mode === "dark" ? "white" : "#031432",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpcase}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLocase}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleclear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopycase}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        disabled={text.length === 0}
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>You Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          word and {text.length} characters
        </p>
        <h3>Previwe</h3>
        <p>{text.length > 0 ? text : "Nothing You Previwe!"}</p>
      </div>
    </>
  );
}
