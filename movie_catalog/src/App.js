import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SingleMovie from "./Components/SingleMovie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
}

export default App;
