import Header from "./Header";
import './ComponenteMostrar.css'

function ComponentesHospital (props) {
    const data= props.data;

    function FormatearObjeto (object) {
        return (
            <div className="mostrar">
                {Object.keys(object).map(
                    (key) => {return(
                        <div className="info">
                            <span>{key}: </span>
                            <span>{object[key]}</span>
                        </div>
                        )
                    }
                )}
            </div>
        );
    }

    return(
        <>
            <Header/>
            <div>
                {FormatearObjeto(data[0])}
            </div>
            <br></br>
            <div>
                {FormatearObjeto(data[1])}
            </div>
        </>
    );
}

export default ComponentesHospital;