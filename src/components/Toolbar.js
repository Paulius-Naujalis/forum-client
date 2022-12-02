import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../context/MainContext';
import NoUser from './NoUser';
import UserTrigger from './UserTrigger';

export default function Toolbar() {
    const { setMessage, isLoggedIn } = useContext(MainContext);

    return (
        <header className='toolbar'>
            {/* Login/Register */}

            {/* Logo */}
            <div className='toolbar__logo'>
                <img src={require('../images/logo.png')} alt='logo' />
            </div>

            {/* Links */}
            <div className='toolbar__links'>
                <Link onClick={() => { setMessage(''); }} to='/'> Forum </Link>
                <Link onClick={() => { setMessage(''); }} to='/leaderboard'> Leaderboard </Link>
                <Link onClick={() => { setMessage(''); }} to='/mail'> Mail </Link>
                <Link onClick={() => { setMessage(''); }} to='/profile'> Profile </Link>
            </div>

            {isLoggedIn && <UserTrigger />}
            {!isLoggedIn && <NoUser />}
        </header>
    );
}