import './NavBar.css';
import React, { useContext } from 'react';
import { NavBarItem } from './NavBarItem';
import { GlobalContext } from '../context/GlobalState';


const NavBar = () => {
    const { navBarItems, handleNavBarClick, handleNewRecord } = useContext(GlobalContext);

    return (
        <>
            <ul className="nav-list">
                {navBarItems.map((item, idx) => (
                    <NavBarItem
                    item={item}
                    idx={idx}
                    routeLink={item.to}
                    handleClick={() => handleNavBarClick(idx)}
                    handleNewRecord={handleNewRecord} />
                ))}

                <div className="nav-dot"></div>

            </ul>
        </>
    );
};

export default NavBar;