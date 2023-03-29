import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    background: ${p=>p.theme.header};
    height: 3rem;
    color: ${p=>p.theme.headerText};
    align-items: center;
    justify-content: center;
    strong{
        font-size: 20px;
    }
`
