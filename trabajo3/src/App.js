import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import './App.css';
import AgregarCitas from "./components/AgregarCitas";
import Citas from "./components/data/Citas";
import ComponentCitas from "./components/ComponentCitas"
import Hospitales from "./components/data/Hospitales";
import ComponentesHospital from "./components/ComponentHospital";
import Medicos from "./components/data/Medicos";
import ComponentesMedico from "./components/ComponentMedicos";
import Pacientes from "./components/data/Pacientes";
import ComponentesPaciente from "./components/ComponentPacientes";

function App() {
  return (
    <Router>
      <Routes className="rutas">
        <Route path = "/" element = {<Inicio/>}/> 
        <Route path = "/Agregar-citas" element = {<AgregarCitas/>}/>
        <Route path = "/Citas" element = {<ComponentCitas data={Citas} />}/>
        <Route path = "/Hospital" element = {<ComponentesHospital data={Hospitales} />}/>
        <Route path = "/Medicos" element = {<ComponentesMedico data={Medicos} />}/>
        <Route path = "/Pacientes" element = {<ComponentesPaciente data={Pacientes} />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

/*
<Router >
      <Routes>
        <Route path = "/" element = {<Inicio/>}/>
        <Route path = "/ingreso-manual" element = {<Ingreso/>}/>
        <Route path = "/carga-archivos" element = {<Carga/>}/>  
      </Routes>
      <br/>
      <Footer/>
    </Router>

    */
