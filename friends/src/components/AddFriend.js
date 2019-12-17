import React,{useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const AddFriend = props => {
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
            <form onSubmit={addFriend}>
                <input type='number' name ='age' placeholder='Age' value={addFriendForm.age} onChange={changeHandler}/>
                <input type='email' name ='email' placeholder='Email' value={addFriendForm.email} onChange={changeHandler}/>
                <input type='text' name ='name' placeholder='Name' value={addFriendForm.name} onChange={changeHandler}/>
                <button>Add Friend</button>
            </form>
        </div>
    )

}

export default AddFriend