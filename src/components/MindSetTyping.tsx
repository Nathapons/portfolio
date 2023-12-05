import React from 'react'

import Typewriter from 'typewriter-effect'

import { Props } from '../types/MindSetTyping'


const MindSetTyping: React.FC<Props> = (props) => {
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
