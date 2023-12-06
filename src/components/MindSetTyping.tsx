import Typewriter from 'typewriter-effect'


interface Props {
    name: string[]
}

const MindSetTyping = ({ name }: Props) => {
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
