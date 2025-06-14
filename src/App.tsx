import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
    <div className="flex">
      <div className="flex-1">
        <div className="flex flex-col">
          <div>Item A</div>
          <div>Item B</div>
        </div>
      </div>
      <div className="flex-1">
        Item 2
      </div>
    </div>
    </>
  );
}

export default App;
