import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };

  useEffect(() => {
    document.title = `Text-Editor ${mode === "dark" ? "Dark" : "Light"} Mode`;
  }, [mode]);

  return (
    <Router>
      <Navbar title='Text Editor' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Edit" mode={mode} />} />
          <Route exact path="/text-editor" element={<TextForm showAlert={showAlert} heading="Enter the Text to Edit" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
