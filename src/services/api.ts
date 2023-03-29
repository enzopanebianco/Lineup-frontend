import axios, { AxiosResponse } from 'axios'
import { Lineup, LineupWithPlayers } from '../@types/Lineup'

interface ResponseData<T> extends AxiosResponse {
    data: T
}

const api = axios.create({
    baseURL: 'https://localhost:4000'
})


export async function getAllLineups() {
    const response: ResponseData<Lineup[]> = await api.get('/lineups')

    return response.data
}

export async function getLineupById(lineupId:string){
    const response:ResponseData<LineupWithPlayers> = await api.get(`/lineups/${lineupId}`)

    return response.data
}


export {
    api
}