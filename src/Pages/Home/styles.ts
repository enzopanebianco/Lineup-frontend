import styled from 'styled-components'
import { FlexContainerColumn, FlexContainerRow, GridContainer } from '../../Components/UI/general'
import FieldSVG from '../../assets/lineup.svg'

const playersDisposition = {
    '3': {
        child1: 'transform:translateY(1rem)',
        child2: '',
        child3: 'transform:translateY(1rem)',
    },
    '2': {
        child1: 'transform:translateX(1rem)',
        child2: 'transform:translateY(3rem)',
        child3: 'transform:translateX(-1rem)',
    },
    '1': {
        child1: 'transform:translateY(3rem)',
        child2: '',
        child3: 'transform:translateY(3rem)',
    }
}

type LineupCardBodyProps = {
    formation:keyof typeof playersDisposition
}

export const LineupContainer = styled.div`
    ${FlexContainerColumn}
    color: ${p => p.theme.text};
`;

export const LineupSearchArea = styled.div`
    ${FlexContainerRow}
    margin-top: 2rem;
    justify-content: space-between;
    width: 85%;
`

export const LineupList = styled.div`
    ${GridContainer}
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    width: 85%;
    margin-top: 1rem;
`

export const LineupCard = styled.div`
    ${FlexContainerColumn}
    align-items: stretch;
    background: ${p => p.theme.card};
    border-radius: 4px;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.25);
`

export const LineupCardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0.5rem;
    
`

export const LineupTitle = styled.h3`
    color: ${p=>p.theme.text};
    padding: 0.25rem 0;
    align-self: center;
    font-size: 14px;
    max-width: 90%;
    max-height: 80px;
    text-overflow: ellipsis;
    overflow-y: hidden;
    overflow-x: hidden;
`

export const LineupFormation = styled.span`
    font-size: 13px;
    font-weight: lighter;
`

export const LineupCardBody = styled.main<LineupCardBodyProps>`
    ${FlexContainerRow}
    gap: 20%;
    align-items: flex-start;
    padding-top: 2.5rem;
    background: url(${FieldSVG});
    background-size: cover;
    width: 100%;
    cursor: pointer;    
    height:117px;
    div:nth-child(1){
        ${p=>playersDisposition[p.formation].child1}
    }
    div:nth-child(2){
        ${p=>playersDisposition[p.formation].child2}
    }
    div:nth-child(3){
        ${p=>playersDisposition[p.formation].child3}
    }
`

export const LineupCardFooter = styled.footer`
    ${FlexContainerRow}
    justify-content: space-between;
    padding: 0.5rem;
`

export const LineupTeam = styled.span`
    color: ${p=>p.theme.text};

`

export const LineupAuthor = styled.strong`
    ${FlexContainerRow}
    color: #F4442E;
    gap: 0.25rem;
    cursor: pointer;
    :hover{
        text-decoration: underline #F4442E 1px;
    }
`