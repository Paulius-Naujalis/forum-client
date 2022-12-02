import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/MainContext';
import { post } from '../helper/helper';

export default function Register() {

    const nav = useNavigate()
    const { message, setMessage } = useContext(MainContext);
    // Setting inputs references
    const usernameRef = useRef();
    const emailRef = useRef();
    const password = useRef();
    const passwordRepeat = useRef();
    const imageUrl = useRef();

    const register = async () => {
        // New user creating, setting input values
        const newUser = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: password.current.value,
            passwordRepeat: passwordRepeat.current.value,
            image: imageUrl.current.value
        };
        // New user sending to database
        const results = await post(newUser, 'register');
        if (!results.error) {
            setMessage(`${results.message} Successfully signed!`);
            usernameRef.current.value = '';
            emailRef.current.value = '';
            password.current.value = '';
            passwordRepeat.current.value = '';
        } else {
            setMessage(results.message);
        }
        nav('/login')
    };

    return (
        <div className='signup'>
            <h2>Sign Up</h2>
            {message !== '' && <p className='message'>{message}</p>}
            <input onClick={() => setMessage('')} ref={usernameRef} type='text' placeholder='Enter Your Username' />
            <input onClick={() => setMessage('')} ref={emailRef} type='email' placeholder='Enter Your Email' />
            <input onClick={() => setMessage('')} ref={password} type='password' placeholder='Enter Your Password' />
            <input onClick={() => setMessage('')} ref={passwordRepeat} type='password' placeholder='Repeat Your Password' />
            <input onClick={() => setMessage('')} ref={imageUrl} type='text' placeholder='Avatar URL' />
            <button onClick={register}>Sign up</button>
        </div>
    );
}