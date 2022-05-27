import React from 'react';

import './NavBar.css';

const navBarItems = [
{
    label: 'statement',
    to: 'react/route',
    icon: '../assets/icons/stats-chart-outline.svg'
},
{
    label: 'add',
    to: 'react/route',
    icon: '../assets/icons/cash-outline.svg',
    subitems: [
        {label: 'income', to: 'react/route', icon: 'path to icon'},
        {label: 'expense', to: 'react/route', icon: 'path to icon'}
    ]
},
{
    label: 'settings',
    to: 'react/route',
    icon: '../assets/icons/settings-outline.svg'
}
];

const NavBar = () => {

    return (
        <>
            <ul className="nav-list">
                {navBarItems.map((item, idx) => (
                    <li key={idx} className='nav-item'>
                        <div className="nav-icon">
                            <img src={item.icon} alt={item.label} />
                        </div>
                        <p>{item.label}</p>
                    </li>
                ))}
            </ul>
            <div className="nav-dot">
                <span className='nav-dot-left'><img src="./assets/icons/add-circle-outline.svg" alt="income" /></span>
                <span className='nav-dot-right'><img src="./assets/icons/remove-circle-outline.svg" alt="expense" /></span>
            </div>
        </>
    );
};

export default NavBar;