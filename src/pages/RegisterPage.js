import React, { useState } from 'react';
import Toolbar from '../components/Toolbar';
import Register from '../components/Register';

export default function AuthPage() {

    const [setAuth] = useState('register');

    return (
        <div>
            <Toolbar></Toolbar>
            <div className='auth'>

                <Register setAuth={setAuth} />
            </div>
        </div>
    );
}