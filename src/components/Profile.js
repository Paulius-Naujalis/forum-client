import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/MainContext';
import { get, patch } from '../helper/helper';


export default function Profile() {

    const { user, getUser, setGetUser } = useContext(MainContext);
    const { message, setMessage } = useState('')

    const imageRef = useRef()
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const newPasswordRef = useRef()
    const rePasswordRef = useRef()
    const nav = useNavigate()

    const updateInfo = async () => {

        const updateUser = {
            image: imageRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        const newPass = newPasswordRef.current.value
        const repeatPass = rePasswordRef.current.value

        if (updateUser.password === '' && newPass !== '' && repeatPass !== '') {
            return setMessage('To change your password, you must enter your old password!')
        }
        if (updateUser.password !== '' && newPass === '' && repeatPass === '') {
            return setMessage('To change your password, you must enter your new and repeat password!')
        }
        if (newPass !== repeatPass) {
            return setMessage('New password and repeat password did not match!')
        }
        else {
            const secret = window.localStorage.getItem('secret')
            console.log('secret', JSON.stringify(secret))
            console.log('updateUser', JSON.stringify(updateUser))
            await patch(`profile/${secret}`, updateUser)
            nav(`/profile/${secret}`)
        }
    }

    return (

        <div className='profile'>

            <div className="profile__view">
                <h2>Profile</h2>
                <img src={user.image} alt="" />
                <h3>{user.username}</h3>
                <h3>{user.email}</h3>
            </div>

            <div className="profile__edit">
                <h2>Profile Edit</h2>
                <div className="profile__inputs">
                    <input ref={imageRef} type="text" placeholder='Avatar URL' />
                </div>

                <div className="profile__inputs">
                    <input ref={usernameRef} type="text" placeholder='New Username' />
                </div>

                <div className="profile__inputs">
                    <input ref={emailRef} type="text" placeholder='New Email' />
                </div>

                <div className="profile__inputs profile__passwords">
                    <input ref={passwordRef} type="text" placeholder='Old Password' />

                    <input ref={newPasswordRef} type="text" placeholder='New Password' />

                    <input ref={rePasswordRef} type="text" placeholder='Repeat Password' />
                </div>
                <button onClick={updateInfo} className='profile__button'>Update</button>
            </div>
        </div>
    );
}
