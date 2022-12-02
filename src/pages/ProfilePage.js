import React, { useState } from 'react';
import Profile from '../components/Profile'
import Toolbar from '../components/Toolbar'

export default function ProfilePage() {

    return (
        <div className='login__page'>
            <Toolbar />

            <Profile />
        </div>
    )
}