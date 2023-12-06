import React from 'react'

import Typewriter from 'typewriter-effect'


const MindSetTyping = (props) => {
    const name: string[] = props.name
    return (
        <Typewriter
            options={{
            strings: name,
            autoStart: true,
            loop: true,
        }}
    />
    )
}

export default MindSetTyping
