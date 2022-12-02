/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/MainContext';
import { get } from '../helper/helper'

export default function UserTrigger() {
    const { user, setMessage, setUser, isLoggedIn } = useContext(MainContext);

    const nav = useNavigate();

    useEffect(() => {
        async function fetchUser() {
            const secret = window.localStorage.getItem('secret')
            const res = await get(`profile/${secret}`)
            console.log(res.data)
            setUser(res.data)
        }
        if (isLoggedIn) {
            fetchUser()
        } else {
            nav('/login')
        }
    }, [])

    return (

        <div className='toolbar__user'>
            <img src={user.image} alt="" />
            <h2>{user.username}</h2>

            <button onClick={() => { setMessage(''); setUser(null); nav('/'); window.localStorage.removeItem('isLoggedIn', 'secret') }}>
                Logout
            </button>

        </div>
    );
}