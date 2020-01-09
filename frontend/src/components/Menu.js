import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: '#ff9900'}
    } else {
        return {color: '#ffffff'}
    }
}

const Menu = ({history}) => (
    <div>
        <ul className="nav nav-tabs bg-secondary">
            <li className="nav-item">
                <Link className="nav-link" to="/" style={isActive(history, '/')}>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/shop" style={isActive(history, '/shop')}>Shop</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/user/dashboard" style={isActive(history, '/user/dashboard')}>Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about" style={isActive(history, '/about')}>About</Link>
            </li>
        </ul>
    </div>
)

export default withRouter(Menu);