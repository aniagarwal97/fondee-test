import React from 'react';
import logo from '../../assets/logo.png';
import ee_icon from '../../assets/ee_icon.png';

const Header = () => {
    return (
        <header className="app_header">
            <div className='header_left'>
                <img className='logo' src = {logo} />
            </div>
            <div className='header_right'>
                <div>
                    <img className='ee_icon' src={ee_icon} />
                </div>
                <p className='gray-light user_name'>@json@found.ee</p>
            </div>
        </header>
    )
}

export default Header