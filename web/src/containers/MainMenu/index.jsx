import React from 'react';
import { NavLink } from "react-router-dom";
import ('./style.css');

const MainMenu = ({ isOpen }) => {
    console.log(isOpen);
    return (
      <div>
        <div className={isOpen ? "app-menu" : "app-menu--hidden"}>
            <ul>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
            </ul>
        </div>
      </div>
    )
}

export default MainMenu;