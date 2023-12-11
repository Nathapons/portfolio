import React from 'react'
import Typewriter from 'typewriter-effect'


interface Props {
    name: string[]
}

const MindSetTyping: React.FC = ({ name }: Props) => {
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
