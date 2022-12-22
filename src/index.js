import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Home, Posts, Profile, Register, Login } from './components';

const App = () => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <div className="app">
      <BrowserRouter>
        <Navbar token={token}/>
          <Routes>
            <Route path='/posts' element={<Posts token={token}/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/profile' element={<Profile username={username} password={password} token={token}/>}/>
            <Route path='/register' element={<Register username={username} password={password} setUsernameFromParent={setUsername} setPasswordFromParent={setPassword} setTokenFromParent={setToken}/>}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
      </BrowserRouter>
      </div>

}

ReactDOM.render(<App />, document.getElementById("app"));