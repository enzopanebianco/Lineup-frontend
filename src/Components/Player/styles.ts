import styled from 'styled-components';
import { FlexContainerColumn } from '../UI/general';

export const PlayerContainer = styled.div`
    ${FlexContainerColumn}
    gap: 0.25rem;
`

export const PlayerName = styled.span`
    color:${p=>p.theme.card};
    font-size: 12px; 
    font-weight: bolder;
    text-shadow: 0px 1px 1px rgba(0,0,0,0.5);
`

