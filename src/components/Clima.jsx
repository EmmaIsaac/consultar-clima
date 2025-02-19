import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
    // Extraer valores
    const { name, main } = resultado;

    // Grados kelvin
    const kelvin = 273.15;

    if (!name) return null;
    return (
        <div
            className="card text-bg-warning mb-3"
            style={{ minWidth: "18rem" }}
        >
            <div className="card-body">
                <h2 className="card-title">El clima de {name} es:</h2>
                <h3 className="card-text">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)}°C
                </h3>
                <p className="card-text">
                    Temp. Máx:{" "}
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}°C
                </p>
                <p className="card-text">
                    Temp. Min:{" "}
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}°C
                </p>
            </div>
        </div>
    );
};

Clima.propTypes = {
    resultado: PropTypes.object.isRequired,
};

export default Clima;
