import { CirclePlayer } from '../UI/general'
import * as _ from './styles'

type PlayerProps = {
    secondaryColor: string
    primaryColor: string
    name: string
    xPosition: string,
    yPosition: string
}

export default function Player(
    { name,
        secondaryColor,
        primaryColor,
        xPosition,
        yPosition }: PlayerProps) {
    return (
        <_.PlayerContainer
        style={{
            position:'absolute',
            
            transform:`translateY(${yPosition}px) translateX(${xPosition}px)`,
        }}
        >
            <CirclePlayer
                secondaryColor={secondaryColor}
                primaryColor={primaryColor}
            />
            <_.PlayerName>
                {name}
            </_.PlayerName>
        </_.PlayerContainer>
    )
}