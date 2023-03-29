import styled, { css } from 'styled-components';

type CirclePlayerProps = {
    primaryColor: string
    secondaryColor: string
}

const FlexContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FlexContainerColumn = css`
    ${FlexContainer}
    flex-direction: column;
`
export const FlexContainerRow = css`
    ${FlexContainer}
    flex-direction: row;
`

export const GridContainer = css`
    display: grid;
    grid-gap: 1rem;
`


export const CirclePlayer = styled.div<CirclePlayerProps>`
    background: ${p => p.primaryColor};
    border: 6px solid ${p => p.secondaryColor};
    width: 1.5rem;
    height: 1.5rem;
    box-shadow: 0.5px 0.5px 3px rgba(0,0,0,0.5);
    border-radius: 50%;
`
