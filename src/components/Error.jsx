import PropTypes from "prop-types";

const Error = ({ mensaje }) => {
    return (
        <div className="card text-bg-danger mb-3" style={{ minWidth: "18rem" }}>
            <div className="card-body">
                <h2 className="card-title">Hubo un error!</h2>
                <p className="card-text">{mensaje}</p>
            </div>
        </div>
    );
};

Error.propTypes = {
    mensaje: PropTypes.string.isRequired,
};

export default Error;
