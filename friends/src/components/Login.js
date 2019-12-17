import React,{useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
const Login = props => {
    const [loginForm, setLoginForm] = useState({ 
        username: '',
        password: ''
    })


    const changeHandler = e => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value})
    }

const login = e => {
    e.preventDefault(); 
    axiosWithAuth().post('/login', loginForm)
    .then(res => {
      localStorage.setItem('token', res.data.payload)  
      props.history.push('/friends')
    })
    .catch(error => {
        console.log(error)
    })
}

    return (
        <div>
            <form onSubmit={login}> 
                <input placeholder='Username' name ='username' type='text' value={loginForm.username} onChange={changeHandler}/> 
                <input placeholder='Password' type='password'  name ='password' value={loginForm.password} onChange={changeHandler}/> 
                <button>Log In</button>
            </form>
        </div>
    )
}


export default Login