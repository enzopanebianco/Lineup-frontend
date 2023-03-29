import styled from 'styled-components'
import { FlexContainerColumn, FlexContainerRow } from '../../Components/UI/general'

export const LineupContainer = styled.div`
    ${FlexContainerColumn}
    margin: 0 auto;
    width: 85%;
    margin-top: 2rem;
`

export const LineupTop = styled.div`
    ${FlexContainerRow}
    align-self: flex-start;
    gap:1rem;
`

export const LineupContent = styled.div`
    display: flex;
    /* ${FlexContainerRow}; */
    /* align-items: flex-start; */
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 0.5rem;
`

export const LineupBox = styled.section`
    ${FlexContainerColumn}
    align-items: flex-start;
    align-self: flex-start;
    width: 40%;
`

export const LineupHeader = styled.header`
    ${FlexContainerColumn};
    align-items:flex-start;
    gap: 0.5rem;
`


export const LineupHeaderItem = styled.div`
    ${FlexContainerRow}
    justify-content: space-between;
    width: 100%;
    > span{
        transform:translateX(1.5rem);
    }
`

export const LineupTeam = styled.div`
    ${FlexContainerColumn}
    align-items:flex-start;
    font-size: 14px;
    gap: 0.25rem;
    span{
        color: ${p => p.theme.textDisabled};
    }
    strong{
        ${FlexContainerRow}
        gap:0.25rem;
    }
`

export const LineupBoxRight = styled(LineupBox)`
    justify-content: space-between;
    width: 50%;
    gap:2rem;
`

export const LineupTitle = styled.h2`
    font-size: 28px;
    color:${p => p.theme.text};
    `

export const LineupFormation = styled.span`
    font-size: 18px; 
    color: ${p => p.theme.textDisabled};
    font-weight: lighter;
`

export const LineupUserContainer = styled.div`
    ${FlexContainerRow}
    justify-content: flex-start;
    gap: 2rem;
    width:100%;
    margin-bottom:1rem;
    svg{
        font-size: 24px;
        cursor: pointer;
        color: ${p => p.theme.socialMediaIcon};
        :hover{
            color:${p => p.theme.text}
        }
    }
`

export const LineupUser = styled.div`
    ${FlexContainerRow}
    gap: 0.75rem;
    cursor: pointer;
    justify-content: flex-start;
    img{
        width:32px;
        border: 1px solid ${p => p.theme.header};
        border-radius: 50%;
    }
`

export const LineupUserInfo = styled.div`
    ${FlexContainerColumn}
    align-items: flex-start;
    strong{
        font-size: 14px;
        color:${p => p.theme.text};

    }
    span{
        color:${p => p.theme.textDisabled};
        font-size: 13px;
        font-style: italic;
    }
`

export const LineupDate = styled.span`
    color:${p => p.theme.textDisabled};
    font-weight: 300;
    font-size: 14px;
    align-self:flex-end;
`

export const LineupArticle = styled.article`
    ${FlexContainerColumn}
    align-items: stretch;
    background: ${p => p.theme.card};
    padding: 1rem;
    box-shadow: ${p => p.theme.boxShadow};
`

export const LineupSubtitle = styled.h3`
    margin-top: 0;
    font-size: 22px;
    color:${p => p.theme.text};
    font-weight: bolder;
    margin-bottom: 1rem;
    align-self: flex-start;
    margin-left: 0.5rem;
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: center;
    > span{
        margin-left: 1rem;
        font-size: 15px;
        display: flex;
        align-items: center;
        gap:0.25rem;
    }
`
export const LineupParagraph = styled.p`
    word-break: break-word;
    width:100%;
    line-height: 25px;
    text-align: justify;
    font-family: 'Noto Serif';
    color:black;
    color:#333;
    margin-bottom: 1rem;
    letter-spacing: -0.003em;
`

export const LineupArticleLink = styled.a`
    align-self: flex-end;
`

export const LineupCommentsContainer = styled(LineupArticle)`
    max-height: 8rem;
    overflow-y: hidden;
    background: ${p => p.theme.card};
    justify-content: flex-start;
`

export const LineupComment = styled(LineupUser)`
    align-items: flex-start;
    margin-bottom: 0.5rem;
`

export const LineupUserComment = styled(LineupUserInfo)`
    align-self: flex-start;
    gap:0.25rem;
    span{
        margin-left:0.25rem;
    }
`

export const LineupCommentParagraph = styled.p`
    color:${p => p.theme.text};
    font-size: 13px;
`