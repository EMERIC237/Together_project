import Home from "./Home";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inscription from "./Inscription";
import Members from "./Members";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes className="page">
        <Route path="/ho" element={<Home />} exact />
        <Route path="/members" element={<Members />} exact />
        <Route path="/inscription" element={<Inscription />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
