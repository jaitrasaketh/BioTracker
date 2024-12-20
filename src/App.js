import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Aims from "./pages/Aim";
import Geotrack from "./pages/Geotrack";
import Herbarium from "./pages/Herbarium";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aims" element={<Aims />}/>
        <Route path="/geotracker" element={<Geotrack/>}/>
        <Route path="/herbarium" element={<Herbarium/>}/>
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
