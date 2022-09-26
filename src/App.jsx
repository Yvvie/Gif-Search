import React from "react";
import { GifGenerator } from "./components/GifGenerator";
import "./App.css";
import { useState } from "react";

function App() {
  const [welcome, setWelcome] = useState(true);

  setTimeout(() => setWelcome(false), 3000);

  return (
    <div className="app">
      {welcome ? (
        <div className="welcome">
          <div>Welcome to GIF search</div>
        </div>
      ) : (
        <div className="gif-main">
          <header> GIF search</header>
          <GifGenerator />
        </div>
      )}
    </div>
  );
}

export default App;
