import React, { useState } from 'react'
import './ChatInput.css'
import Button from '@material-ui/core/Button';
import db from './firebase';
function ChatInput({ channelName, roomId }) {
    const [input, setInput] = useState('')
    const sendMessage = (e) => {
        e.preventDefault()
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .collection('messages')
                .add({
                    message: input,
                    timestamp: new Date()
                    ,
                    user: "lord luke",
                    userImage: 'lord'
                })
        }
    }
    return (
        <div className='chatInput'>
            <form>
                <input placeholder={`Message ${channelName?.name}`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <Button type='submit'
                    onClick={sendMessage}>
                    SEND
                </Button>
            </form>

        </div>
    )
}

export default ChatInput
