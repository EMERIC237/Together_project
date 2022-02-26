import Home from "./Home";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Inscription from "./Inscription";


function App() {
  return (
    <BrowserRouter>
      <div className="flex-1">
        <h3 className="m-3 d-flex justify-content-center">
          Welcome to our platform, we share, we learn, we grow
        </h3>
        <h2>
          Click here to register <Link to="/inscription">here</Link>
        </h2>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/inscription" element={<Inscription />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
