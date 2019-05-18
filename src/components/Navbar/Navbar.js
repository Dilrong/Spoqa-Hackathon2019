import React from 'react';
import { MenuButton } from '../index';
import './Navbar.scss';

const Navbar = ({history}) => (
    <div className="Navbar">
        <MenuButton text="케이크"/>
        <MenuButton text="폭죽"/>
        <MenuButton text="박수"/>
    </div>
)

export default Navbar;