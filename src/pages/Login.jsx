import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import {loginAction} from '../redux/slice/loginSlice'



const Login = () => {



  // Tools
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [baseApi, setBaseApi] = useState('http://localhost:2025/api/')


 
  const userRedux = useSelector((state) => state.login.data.user)
  useEffect(() => {
    // let authData = JSON.parse(localStorage.getItem("authData"))
    let authData = userRedux
    if(authData) navigate('/')
  }, []);




  //Function 
  const handleLogin = (event) => {
   

    event.preventDefault();
    const payload = {
        "username" : username,
        "password" : password
    }
    console.log(payload)
    axios.post(`${baseApi}/users/login`, payload)
      .then(res => {
        console.log('auth', res.data.data_user)
        dispatch(loginAction.addUser(res.data))
        localStorage.setItem('authData', JSON.stringify(res.data));
        navigate('/');
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }


  return (
    <div className=''>
      <div  className='App flex justify-center min-h-screen items-center'>
        <div className='col-xl-3 col-md-8 col-sm-12'>
            <h4 className='text-center'>Login Page</h4>
            <div className=''>
                <div className='p-2'> 
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Username</label>
                            <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
