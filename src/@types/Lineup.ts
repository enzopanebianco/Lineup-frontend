export type Lineup = {
    id: number
    title: string
    description: string
    formation: string,
    createdAt: Date,
    updatedAt: Date,
    primaryColor: string,
    secondaryColor: string,
    team: string,
    userId: number
}


export type LineupWithPlayers = Lineup & {
    players: Player[]
}

export type Player = {
    id: string
    name: string
    xPointAttack: string
    yPointAttack: string
    xPointDefense: string
    yPointDefense: string
    position: string
    lineupId: number
}