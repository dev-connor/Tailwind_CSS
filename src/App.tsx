import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={() => alert("Button Clicked!")}
      >
        Click Me
      </button>
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Card Title</div>
      <p className="text-gray-700 text-base">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <span className="">Tag 1</span>
      <span className="">Tag 2</span>
    </>
  );
}

export default App;
