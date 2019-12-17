import React,{useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },


    },
  }));



const AddFriend = props => {
    const classes = useStyles();
    const [addFriendForm, setAddFriendForm]  = useState({
        age: Number,
        email: '',
        name: ''
    })


 const changeHandler = e => {
     setAddFriendForm({...addFriendForm, [e.target.name]: e.target.value})
 }

 const addFriend = e => {
     e.preventDefault();
     axiosWithAuth().post('/friends', addFriendForm)
     .then(res => {
         console.log(res)
     })
     .catch(error => {
         console.log('error', error)
     })
 }


    return (
        <div>
            <div className='post-form'>
        <form onSubmit={addFriend} className={classes.root} noValidate autoComplete='off'>
            <TextField variant ='outlined' id ='standard-basic'name ='email' value={addFriendForm.age} onChange={changeHandler} type ='text' label='Age' className='input-field'/>
            <TextField  variant ='outlined' name ='email' value={addFriendForm.email} onChange={changeHandler} type ='email'
            label='Email' className='input-field'/>
            <TextField  variant ='outlined' name ='name' value={addFriendForm.name} onChange={changeHandler} type ='text'
            label='Name' className='input-field'/>
            <Button variant ='contained' color ='primary'onClick={addFriend}>Post User</Button>
        </form>
    </div>
        </div>
    )

}

export default AddFriend



{/* <form onSubmit={addFriend}>
                <input type='number' name ='age' placeholder='Age' value={addFriendForm.age} onChange={changeHandler}/>
                <input type='email' name ='email' placeholder='Email' value={addFriendForm.email} onChange={changeHandler}/>
                <input type='text' name ='name' placeholder='Name' value={addFriendForm.name} onChange={changeHandler}/>
                <button>Add Friend</button> */}