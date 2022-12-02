import React from 'react';
import { Link } from 'react-router-dom';

export default function NoUser() {
    return (

        <div className='toolbar__nouser'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    );
}