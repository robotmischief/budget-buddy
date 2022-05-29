export const NavBarItem = ({item, idx, handleClick }) => {

    return (
        <li key={idx} className={(item.active) ? 'nav-item active' : 'nav-item'} onClick={handleClick}>
                        <div className="nav-icon">
                            <img src={item.icon} alt={item.label} />
                        </div>
                        <p>{item.label}</p>
                        {(item.subitems) && 
                        <div className='sub-items'>
                            <div className={`nav-sub-dot left ${(item.active) ? 'active' : ''} `}><img src={item.subitems[0].icon} alt={item.subitems[0].label} /></div>
                            <div className={`nav-sub-dot right ${(item.active) ? 'active' : ''}`}><img src={item.subitems[1].icon} alt={item.subitems[1].label} /></div>
                        </div>
                        }
                    </li>
    )
}