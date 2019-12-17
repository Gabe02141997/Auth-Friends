import React, {useState, useEffect} from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'
import AddFriend from './AddFriend'

const FriendsList = props => {
    const [friends, setFriends] = useState([])
    
     useEffect(() => {
      axiosWithAuth().get('/friends')
      .then(res => {
          console.log(res)
          setFriends(res.data)
      })
      .catch(error => {
          console.log(error)
      })
     },[])   
 
    return (
       <div>
          <h1>Friends</h1>
          <AddFriend/> 
          {friends && friends.map(friend => (
              <FriendCard friend = {friend} key={friend.id}/> 
          ))}
       </div>
    )
}


export default FriendsList;  
