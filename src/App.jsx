import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
    // state
    const [busqueda, guardarBusqueda] = useState({
        ciudad: "",
        pais: "",
    });
    const [consultar, guardarConsultar] = useState(false);
    const [resultado, guardarResultado] = useState({});
    const [error, guardarError] = useState(false);

    const { ciudad, pais } = busqueda;

    useEffect(() => {
        const consultarAPI = async () => {
            if (consultar) {
                const appId = import.meta.env.VITE_APP_ID;
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;

                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                guardarResultado(resultado);
                guardarConsultar(false);

                //Detecta si hubo resultados correctos en la consulta
                if (resultado.cod === "404") {
                    guardarError(true);
                } else {
                    guardarError(false);
                }
            }
            // api.openweathermap.org/data/2.5/weather?q=parana,ar&APPID=aa3b425793103852a54ab9ad2f68aefe
        };
        consultarAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [consultar]);

    // Componente condicional
    let componente;
    if (error) {
        componente = <Error mensaje="No hay resultados" />;
    } else {
        componente = <Clima resultado={resultado} />;
    }

    return (
        <>
            <Header titulo="Clima React App" />
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Formulario
                                busqueda={busqueda}
                                guardarBusqueda={guardarBusqueda}
                                guardarConsultar={guardarConsultar}
                            />
                        </div>
                        <div className="col-md-6">{componente}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
