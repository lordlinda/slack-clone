import React from 'react'
import './Message.css'

function Message({ message, timestamp, user, userImage }) {
    return (
        <div className='message'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnJ4ZnB5X7teEeunLtSkoC8EQ3nuDAkLAq5g&usqp=CAU' alt='' />
            <div className='message__info'>
                <h4>{user} {" "}
                    <span className='message__timestamp'>
                        {new Date(timestamp?.toDate()).toUTCString()}</span> </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
