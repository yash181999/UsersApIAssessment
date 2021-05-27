import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useStateValue } from "./StateProvider";

function App() {


  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
