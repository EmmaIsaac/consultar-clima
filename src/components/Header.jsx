import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContenedorTitulo = styled.div`
    display: flex;
    justify-content: center;
    background-color: #0081bc;
    color: #fff;
`;

const Header = ({ titulo }) => {
    return (
        <nav>
            <ContenedorTitulo className="nav-wrapper light-blue darken-2">
                <h1>{titulo}</h1>
            </ContenedorTitulo>
        </nav>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
};

export default Header;
