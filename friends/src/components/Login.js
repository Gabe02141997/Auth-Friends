import React,{useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const Login = props => {
    const classes = useStyles();
    const [loginForm, setLoginForm] = useState({ 
        username: '',
        password: ''
    })


    const changeHandler = e => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value})
    }

const login = e => {
    console.log('hello')
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
        <div className='form-container'>
            <form onSubmit={login} className='form'> 
                <div className='input-container'>
                <TextField id='outlined-basic' className={classes.textField} label='Username' margin='normal' variant='outlined'name ='username' type='text' value={loginForm.username} onChange={changeHandler}/> 
                <TextField id='outlined-basic' className={classes.textField} label='Password' margin='normal' variant='outlined'name ='password' type='password' value={loginForm.password} onChange={changeHandler}/> 
                </div>
                <Button variant='contained' color='primary' type ='submit'onSubmit={login}>Log In</Button>
            </form>
        </div>
    )
}


export default Login