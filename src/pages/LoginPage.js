import React, { useState } from 'react';
import Login from '../components/Login'
import Toolbar from '../components/Toolbar'

export default function LoginPage() {
    const [setAuth] = useState('login');

    return (
        <div className='login__page'>

            <Toolbar />
            <Login setAuth={setAuth} />
        </div>
    )
}