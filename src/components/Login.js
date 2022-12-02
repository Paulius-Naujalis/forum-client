import React, { useContext, useRef } from 'react';
import MainContext from '../context/MainContext';
import { post } from '../helper/helper';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const nav = useNavigate()
    const { message, setMessage, setUser } = useContext(MainContext);
    // Setting inputs references
    const usernameRef = useRef();
    const passwordRef = useRef();

    const login = async () => {
        // Setting a user for sign in, taking input values
        const userLogin = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };
        // Posting sign in user to database, if all fields validated (successfully signin), if failed (getting error message)
        const result = await post(userLogin, 'login');
        if (!result.error) {
            setMessage(result.message);
            usernameRef.current.value = '';
            passwordRef.current.value = '';
            window.localStorage.setItem('secret', JSON.stringify(result.data.secret))
            window.localStorage.setItem('isLoggedIn', true)
            nav('/')
        } else {
            setMessage(result.message);
        }
    };

    return (
        <div className='login'>
            <h2>Sign In!</h2>
            {message !== '' && <p className='signin__message'>{message}</p>}
            <input ref={usernameRef} onClick={() => setMessage('')} type='text' placeholder='Enter Username' />
            <input ref={passwordRef} onClick={() => setMessage('')} type='password' placeholder='Enter Password' />
            <button onClick={login}>Sign In</button>
        </div>
    );
}