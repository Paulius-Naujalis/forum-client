import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';

import MainContext from '../src/context/MainContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

// const socket = io.connect('http://localhost:4000');

function App() {
  // Use states
  const [user, setUser] = useState('');
  const [getUser, setGetUser] = useState(null)
  const [message, setMessage] = useState('');
  const isLoggedIn = window.localStorage.getItem('isLoggedIn')
  const localSecret = window.localStorage.getItem('secret')

  // Main context
  const states = { user, setUser, message, setMessage, isLoggedIn, getUser, setGetUser };

  return (

    <div className='App'>

      <MainContext.Provider value={states}>
        <Routes>

          <Route path='/' element={isLoggedIn ? <HomePage /> : <LoginPage />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          {!isLoggedIn && <Route path='/register' element={<RegisterPage />}></Route>}
          {!isLoggedIn && <Route path='/login' element={<LoginPage />}></Route>}

        </Routes>
      </MainContext.Provider>

    </div>

  );
}

export default App;