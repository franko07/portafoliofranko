import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/NavBar";
import Galery from "./component/galery/Galery.jsx";
import About from "./component/about/About";
import Restaurante from "./component/Servicios/Restaurante.jsx";
import Bar from "./component/Servicios/Bar.jsx";
import Details from "./component/details/Details.jsx";
import DetailsBar from "./component/details/DetailsBar.jsx";
import GaleryDetail from "./component/galeryDetails/GaleryDetail";
import Whatsapp from "./component/whatsapp/Whatsapp";
import RedesSociales from "./component/redesSociales/redes";
import UnderConstruction from "./component/UnderConstruction/UnderConstruction.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurante" element={<Restaurante />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/detailsB/:id" element={<DetailsBar />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/galeryDeatail/:id" element={<GaleryDetail />} />
        <Route path="/ecohotel" element={<UnderConstruction />} />
      </Routes>
      <RedesSociales />
      <Whatsapp />
    </div>
  );
}

export default App;
