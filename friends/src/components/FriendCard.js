import React from 'react'

const FriendCard = props => {
    return (
        <div>
        <h2>{props.friend.name}</h2>
        <h2>{props.friend.age}</h2>
        <p>{props.friend.email}</p>
        </div>
    )
}

export default FriendCard ;