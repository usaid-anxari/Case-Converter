import "./App.css";
import Navbar from "./commponent/Navbar";
import Textform from "./commponent/Textform";
import About from "./commponent/About";
import React, { useState } from "react";
import Alert from "./commponent/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 3000);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#031432";
      showAlert("Dark Mode Hs Been Enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Hs Been Enable", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Text Generator" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="contener my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading=" Convert Text Case "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
