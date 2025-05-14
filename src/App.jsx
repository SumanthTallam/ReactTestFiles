import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NonVegPage from "./components/NonVegPage";
import VegPage from "./components/vegPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="*" element={<div>Page Not Found</div>} />

          <Route path="/" element={<Home />} />
          <Route path="veg" element={<VegPage />} />
          <Route path="meat" element={<NonVegPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
