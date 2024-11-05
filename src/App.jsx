import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("#b4afaf");

  return (
    <div id="main" style={{ background: color }}>
      <div id="content">
        <button
          style={{ background: "#e90c0c" }}
          onClick={() => {
            setcolor("#e90c0c");
          }}
        >
          Red
        </button>
        <button
          style={{ background: "#e9de0c" }}
          onClick={() => {
            setcolor("#e9de0c");
          }}
        >
          yellow
        </button>
        <button
          style={{ background: "#086433" }}
          onClick={() => {
            setcolor("#086433");
          }}
        >
          Green
        </button>
        <button
          style={{ background: "#582a07" }}
          onClick={() => {
            setcolor("#582a07");
          }}
        >
          Brown
        </button>
        <button
          style={{ background: "#640d7f6c" }}
          onClick={() => {
            setcolor("#640d7f6c");
          }}
        >
          perpul
        </button>
      </div>
    </div>
  );
}

export default App;
