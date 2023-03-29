import { useState } from "react"
import { Player as PlayerType } from "../../@types/Lineup"
import Player from "../Player"
import * as _ from './styles'

type FieldProps = {
    players: PlayerType[]
    secondaryColor: string
    primaryColor: string

}

export default function Field({ players, secondaryColor, primaryColor }: FieldProps) {
    const [phaseGame, setPhaseGame] = useState<Array<keyof PlayerType>>(["xPointAttack", "yPointAttack"])

    function onChangePhaseGame() {
        setPhaseGame(phase => {
            if (phase[0] === 'xPointAttack')
                return ['xPointDefense', 'yPointDefense']
            else
                return ['xPointAttack', 'yPointAttack']
        })
    }
    return (
        <_.FieldContainer>
            <_.Field>
                <_.FieldContent>
                    {players.map(player =>
                        <Player
                            xPosition={player[phaseGame[0]].toString()}
                            yPosition={player[phaseGame[1]].toString()}
                            name={player.name}
                            key={player.id}
                            secondaryColor={secondaryColor}
                            primaryColor={primaryColor}
                        />
                    )}
                </_.FieldContent>
            </_.Field>
            <_.FieldSwitcherPhase onClick={onChangePhaseGame}>
                <_.Switch >
                    <_.ToggleButton phase={phaseGame[0]}/>
                </_.Switch>
                <div>
                    <_.FieldSwitcherLabel selected={phaseGame[0]==='xPointAttack'}>
                        Ataque
                    </_.FieldSwitcherLabel>
                    <_.FieldSwitcherLabel selected={phaseGame[0]==='xPointDefense'}>
                        Defesa
                    </_.FieldSwitcherLabel>
                </div>
            </_.FieldSwitcherPhase>
        </_.FieldContainer>
    )
}