import React, { useContext, useRef, useState } from 'react';
import MainContext from '../context/MainContext';
import { get } from '../helper/helper';


export default function Profile() {
    const { user, getUser, setGetUser } = useContext(MainContext);
    const { message, setMessage } = useState('')
    const imageRef = useRef()
    const usernameRef = useRef()
    const emailRef = useRef()
    const oldPasswordRef = useRef()
    const newPasswordRef = useRef()
    const rePasswordRef = useRef()

    const updateInfo = async () => {

        // const updateUser = {
        //     image: imageRef.current.value,
        //     username: usernameRef.current.value,
        //     email: emailRef.current.value,
        //     oldPassword: oldPasswordRef.current.value,
        //     newPassword: newPasswordRef.current.value,
        //     rePassword: rePasswordRef.current.value
        // }
        const getSingleUser = await get(`profile/${user.secret}`)
        setGetUser(getSingleUser)

        // if (updateUser.image === '' || undefined || null) {
        //     return updateUser.image = getUser.image
        // }
        // if (updateUser.username === '' || undefined || null) {
        //     return updateUser.username === getUser.username
        // }
        // if (updateUser.email === '' || undefined || null) {
        //     return updateUser.email === getUser.email
        // }
        // if (updateUser.username === '' || undefined || null) {
        //     return updateUser.user === getUser.username
        // }
        // if (updateUser.oldPassword === '' || undefined || null) {
        //     return updateUser.oldPassword === getUser.password
        // }
        // if (updateUser.newPassword !== '' || undefined || null) {
        //     return updateUser.newPassword === getUser.password
        // }
        // if (updateUser.rePassword !== '' || undefined || null) {
        //     return updateUser.newPassword === getUser.password
        // }
        // if (updateUser.oldPassword === '' && updateUser.newPassword !== '' && updateUser.rePassword !== '') {
        //     return setMessage('Please enter your old password')
        // }
        // if (updateUser.oldPassword !== '' && updateUser.newPassword === '' && updateUser.rePassword === '') {
        //     return setMessage('Please enter your new password')
        // }
        // if (updateUser.oldPassword !== getUser.password) {
        //     return setMessage('Your old password did not match!')
        // }
        // if (updateUser.newPassword !== updateUser.rePassword) {
        //     return setMessage('New password did not match!')
        // }
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
                    <input ref={oldPasswordRef} type="text" placeholder='Old Password' />

                    <input ref={newPasswordRef} type="text" placeholder='New Password' />

                    <input ref={rePasswordRef} type="text" placeholder='Repeat Password' />
                </div>
                <button className='profile__button'>Update</button>
            </div>
        </div>
    );
}
