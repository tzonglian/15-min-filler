import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        setText(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {text.message}
        {/* refresh button */}
        <button className="btn" onClick={() => window.location.reload(false)}>
          Refresh
        </button>
      </header>
    </div>
  );
}

export default App;
