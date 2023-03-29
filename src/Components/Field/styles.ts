import styled from 'styled-components'
import { FlexContainerRow } from '../UI/general'
import FieldImg from '../../assets/Field.png'
import { LARGE_WIDTH } from '../../global/styles'

type ToggleProps = {
    phase: string
}

type SwitcherLabelProps = {
    selected:boolean
}

export const FieldContainer = styled.div`  
    ${FlexContainerRow}
    justify-content: stretch;
    align-items: flex-start;
    gap:1rem;
    @media (max-width:${LARGE_WIDTH}) {
        gap:0;
    }
`

export const Field = styled.div`
    box-shadow: ${p => p.theme.boxShadow};
    margin-top: 0.5rem;
    background: ${p => p.theme.card};
    padding: 0.75rem;
    border-radius: 6px;
   
`
export const FieldContent = styled.div`
    background-repeat: no-repeat;
    background: url(${FieldImg});
    width:316px;
    height: 380px;
    background-size: auto;
`

export const FieldSwitcherPhase = styled.div`
    ${FlexContainerRow}
    gap:0.75rem;
    margin-top: 0.5rem;
    @media (max-width:${LARGE_WIDTH}) {
       transform: translateX(3rem);
    }
`
export const Switch = styled.div`
    width: 2rem;
    height: 4rem;
    padding-top: 2px;
    background-color: ${p=>p.theme.card};
    border-radius: 2rem;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    box-shadow: ${p=>p.theme.boxShadow};
    
`
export const ToggleButton = styled.div<ToggleProps>`
    transform: scale(0.8);
    background: ${p=>p.phase==='xPointAttack'?'green':'orange'};
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    transform-origin: center center;
    transform: ${p => p.phase === 'xPointAttack' ?
        '' : 'translateY(2rem) scale(0.8);'};
    transition: 0.2s ease-in;

`

export const FieldSwitcherLabel = styled.label<SwitcherLabelProps>`
    color:${p=>p.theme.text};
    display: block;
    padding: 0.25rem 0 0.15rem 0;
    font-size: 15px;
    font-weight: ${p=>p.selected?'bolder':'400'};
    transition: 0.3s ease-in;
    cursor: pointer;
   /* border-bottom: ${p=>p.selected?'':'1px solid black'}; */
`