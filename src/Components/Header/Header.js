import React from 'react';
import './Header.css'
import { Nav, NavItem,  } from 'reactstrap';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className="header" style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <Nav>
                <NavItem>
                    <NavLink  className={'link'} to="/" exact>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={'link'} to="/Main" exact>our works</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={'link'} to="/NewSletter" exact >news</NavLink>
                </NavItem>

            </Nav>

        </div>
    );
};

export default Header;