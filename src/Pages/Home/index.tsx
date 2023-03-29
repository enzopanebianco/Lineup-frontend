import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { BiFootball } from 'react-icons/bi'
import { Lineup } from "../../@types/Lineup"
import { CirclePlayer } from "../../Components/UI/general"
import InputSearch from "../../Components/UI/inputSearch"
import { getAllLineups } from "../../services/api"
import * as _ from './styles'

export default function Home() {
    const [lineups, setLineups] = useState<Lineup[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        async function handleGetAllLineups() {
            const data = await getAllLineups()

            setLineups(data)
        }

        handleGetAllLineups()
    }, [])

    return (

        <_.LineupContainer>
            <_.LineupSearchArea>
                <h1>Procure escalações</h1>
                <InputSearch />
            </_.LineupSearchArea>
            <_.LineupList>

                {
                    lineups.map(lineup => {
                        const numbersOfStrikers = lineup.formation.slice(-1)
                        return (
                            <_.LineupCard
                                onClick={()=>navigate(`/lineup/${lineup.id}`) }
                                key={lineup.id}
                            >
                                <_.LineupCardHeader>
                                    <_.LineupTitle>{lineup.title}</_.LineupTitle>
                                    <_.LineupFormation>{lineup.formation}</_.LineupFormation>
                                </_.LineupCardHeader>
                                <_.LineupCardBody formation={numbersOfStrikers as ("1" | "2" | "3")}>
                                    <CirclePlayer
                                        primaryColor={lineup.primaryColor}
                                        secondaryColor={lineup.secondaryColor} />
                                    <CirclePlayer
                                        primaryColor={lineup.primaryColor}
                                        secondaryColor={lineup.secondaryColor} />
                                    <CirclePlayer
                                        primaryColor={lineup.primaryColor}
                                        secondaryColor={lineup.secondaryColor} />
                                </_.LineupCardBody>
                                <_.LineupCardFooter>
                                    <_.LineupTeam>Time: {lineup.team}</_.LineupTeam>
                                    <_.LineupAuthor>
                                        <BiFootball />
                                        Enzo Romano
                                    </_.LineupAuthor>
                                </_.LineupCardFooter>
                            </_.LineupCard>
                        )
                    })
                }
            </_.LineupList>
        </_.LineupContainer >

    )
}