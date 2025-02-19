import { useState } from "react";
import PropTypes from "prop-types";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
    //

    const [error, guardarError] = useState(false);

    // funcion que coloca los elementos en el state
    const handleChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    const { ciudad, pais } = busqueda;

    // Cuando el usuario da submit al form
    const handleSubmit = (e) => {
        e.preventDefault();

        // validar
        if (ciudad.trim() === "" || pais.trim() === "") {
            guardarError(true);
            return;
        }
        guardarError(false);

        //pasarlo al componente principal
        guardarConsultar(true);
    };
    return (
        <form onSubmit={handleSubmit}>
            {error ? (
                <div className="alert alert-danger" role="alert">
                    Todos los campos son obligatorios
                </div>
            ) : null}
            <div className="mb-3">
                <label htmlFor="ciudad" className="form-label">
                    Ciudad:
                </label>
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="pais" className="form-label">
                    Pais:
                </label>
                <select
                    name="pais"
                    value={pais}
                    onChange={handleChange}
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option value="" disabled selected>
                        Elige un país
                    </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="mb-3">
                <div className="d-grid gap-2">
                    <button className="btn btn-warning" type="submit">
                        Buscar Clima
                    </button>
                </div>
            </div>
        </form>
    );
};

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired,
};

export default Formulario;
