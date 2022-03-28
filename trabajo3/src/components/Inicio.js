import './Inicio.css';

function Inicio () {
    return (
        <div className="menuInicio">
            <div className="divImagen">
                <a href=""><img className="Imagen" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/public-health-1921120-1620604.png" alt="" /></a>
            </div>
            <ul className="menu">
                <li><a href="/Hospital">Consultar Hospital</a></li>
                <li><a href="/Pacientes">Consultar Pacientes</a></li>
                <li><a href="/Medicos">Consultar Medicos</a></li>
                <li><a href="/Citas">Consultar Citas</a></li>
                <li><a href="/Agregar-citas">Agregar citas</a></li>
            </ul>
        </div>
    );
}

export default Inicio