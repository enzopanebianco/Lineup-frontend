import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { BsFillShieldFill, BsTwitter, BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs'
import { MdComment } from 'react-icons/md'
import { LineupWithPlayers } from "../../@types/Lineup"
import { getLineupById } from "../../services/api"
import * as _ from './styles'
import Pengu from '../../assets/pengu.jfif'
import Field from "../../Components/Field"

export default function Lineup() {
    const [lineup, setLineup] = useState<LineupWithPlayers>()
    const { id } = useParams()

    useEffect(() => {
        async function handleGetLineup() {
            if (id) {
                setLineup(await getLineupById(id))
            }
        }
        handleGetLineup()
    }, [id])

    return (
        <_.LineupContainer>
            <_.LineupTop>
                <_.LineupTitle>{lineup?.title}</_.LineupTitle>
                <_.LineupFormation>  {lineup?.formation} </_.LineupFormation>
            </_.LineupTop>
            <_.LineupContent>
                <_.LineupBox>
                    <_.LineupHeader>
                        <_.LineupHeaderItem>
                            <_.LineupTeam>
                                <span>Time</span>
                                <strong><BsFillShieldFill size={12} /> {lineup?.team}</strong>
                            </_.LineupTeam>
                            <_.LineupDate>
                                Criada em: {new Date(lineup?.createdAt!!).toLocaleDateString()}
                            </_.LineupDate>
                        </_.LineupHeaderItem>
                    </_.LineupHeader>
                    {
                        lineup?.players &&
                        <Field
                            players={lineup?.players}
                            primaryColor={lineup?.primaryColor || ''}
                            secondaryColor={lineup?.secondaryColor || ''}
                        />
                    }
                </_.LineupBox>
                <_.LineupBoxRight>
                    <div>
                        <_.LineupUserContainer>
                            <_.LineupUser>
                                <img src={Pengu} alt="Imagem do usuário" />
                                <_.LineupUserInfo>
                                    <strong>Enzo Romano</strong>
                                    <span>@enzo.panebianco</span>
                                </_.LineupUserInfo>
                            </_.LineupUser>
                            <BsTwitter />
                            <BsInstagram />
                            <BsYoutube />
                            <BsLinkedin />
                        </_.LineupUserContainer>
                        <_.LineupArticle>
                            <_.LineupSubtitle>Sobre a Escalação...</_.LineupSubtitle>
                            <_.LineupParagraph>
                                {lineup?.description}
                                Lorem ipsum dolor uidem rem nam eos velit, pariatur qui maiores.
                            </_.LineupParagraph>
                            <a href="#">Ler mais</a>
                        </_.LineupArticle>
                    </div>
                    <_.LineupCommentsContainer>
                        <_.LineupSubtitle>
                            Comentários
                            <_.LineupFormation>
                                34 <MdComment /> 
                            </_.LineupFormation>
                        </_.LineupSubtitle>
                        <_.LineupComment>
                            <img src={Pengu} alt="Imagem do usuário" />
                            <_.LineupUserComment>
                                <div>
                                    <strong>Enzo Romano</strong>
                                    <span>@enzo.panebianco</span>
                                </div>
                                <_.LineupCommentParagraph>
                                    Lorem, ipsum dolor sit
                                    amelllllllllllllllllllllllllllllllllllllllllllllllllllllllt
                                    consectetur adipisquibusdam est doloribus consequatur voluptate
                                    recusandae alias enim.
                                </_.LineupCommentParagraph>
                            </_.LineupUserComment>
                        </_.LineupComment>
                        <_.LineupComment>
                            <img src={Pengu} alt="Imagem do usuário" />
                            <_.LineupUserComment>
                                <div>
                                    <strong>Enzo Romano</strong>
                                    <span>@enzo.panebianco</span>
                                </div>
                                <_.LineupCommentParagraph>
                                    Lorem, ipsum dolor sit
                                    amelllllllllllllllllllllllllllllllllllllllllllllllllllllllt
                                    consectetur adipisquibusdam est doloribus consequatur voluptate
                                    recusandae alias enim.
                                </_.LineupCommentParagraph>
                            </_.LineupUserComment>
                        </_.LineupComment>
                    </_.LineupCommentsContainer>
                </_.LineupBoxRight>
            </_.LineupContent>
        </_.LineupContainer>
    )
}