import Home from "./Home";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inscription from "./Inscription";
import Members from "./Members";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/members" element={<Members />} exact />
          <Route path="/inscription" element={<Inscription />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
