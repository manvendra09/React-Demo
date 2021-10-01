import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = ({title}) => {
    return (
        <nav className="navbar">
            <h1>React Repository</h1>
            <div className="links">
                <ul>

                <li><Link to="/">Home</Link></li>
                <li><Link to="/repo">Repositories</Link></li>
                <li><Link to="/org">Organisation</Link></li>
                </ul>
                
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: 'Repository',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
