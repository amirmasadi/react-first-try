import React from 'react'
import styled from 'styled-components'

const PStyle = styled.p`
    font-size: 1.2rem;
    max-width: 500px;
    font-weight: 100;
    line-height: 1.7rem;

    @media only screen and (max-width: 768px) {
        max-width: 370px;
        line-height: 1.8rem
    }
`;

export default function PText({children, textPos="text-center text-md-start"}) {
    return (
        <PStyle className={textPos}>
            {children}
        </PStyle>
    )
}
