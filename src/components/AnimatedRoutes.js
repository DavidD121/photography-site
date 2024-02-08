import { Routes, Route } from "react-router-dom";
import HomePage from "../page/Home/Home";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import City from "../page/City/City";
import Events from "../page/Events/Events";
import Nature from "../page/Nature/Nature";
import Sports from "../page/Sports/Sports";

const AnimatedRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/city" element={<City />} />
      <Route path="/events" element={<Events />} />
      <Route path="/nature" element={<Nature />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/contact" element={<Contact name="Abgar Danielian" email="goldenark1@yahoo.com" location="Watertown, MA"/>} />
    </Routes>
  );
};

export default AnimatedRoutes;
