import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar, Home, Posts, Profile, Register, Login, CreatePost} from './components';

const App = () => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate;

  function logout() {
    window.localStorage.removeItem("token");
    setToken('');
  }

  return <div className="app">
      <BrowserRouter>
        <Navbar logout={logout} token={token}/>
          <Routes>
            <Route path='/home' element={<Home username={username} token={token}/>}/>
            <Route path='/posts' element={<Posts token={token} navigate={navigate}/>}/>
            <Route path='/posts/addpost' element={<CreatePost username={username} password={password} token={token} navigate={navigate}/>}/>
            <Route path='/profile' element={<Profile username={username} password={password} token={token}/>}/>
            <Route path='/register' element={<Register username={username} password={password} setUsernameFromParent={setUsername} setPasswordFromParent={setPassword} setTokenFromParent={setToken}/>}/>
            <Route path='/login' element={<Login username={username} password={password} setUsernameFromParent={setUsername} setPasswordFromParent={setPassword} setTokenFromParent={setToken} navigate={navigate}/>}/>
          </Routes>
      </BrowserRouter>
      </div>

}

ReactDOM.render(<App />, document.getElementById("app"));