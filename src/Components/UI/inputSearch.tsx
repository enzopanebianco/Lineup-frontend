import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { FlexContainerRow } from './general'

const InputSearchContainer = styled.div`
    ${FlexContainerRow}
    background: ${p=>p.theme.card};
    justify-content: space-between;
    box-shadow: ${p=>p.theme.boxShadow};
    border:1px solid #ccc;
    padding: 0.5rem;
    border-radius: 6px;
    input{
        background: transparent;
        border:0;
        outline: none;

    }
    svg{
        color: ${p=>p.theme.textDisabled};
    }
`   


export default function InputSearch(){
    return(
        <InputSearchContainer>
            <input type="text" />
            <FaSearch />
        </InputSearchContainer>
    )
}