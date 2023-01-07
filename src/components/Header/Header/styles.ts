import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme['white']};
    margin: 2rem 10rem; 
    @media screen and (max-width: 776px) {
        margin: 1rem;
    }     
   
`
export const SpanContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    border-radius: 6px;
`
export const AdressContainer = styled(SpanContainer)`
    
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple']};
    width: 8.9375rem;
   

`
export const CartContainer = styled(SpanContainer)`
    
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    width: 2.375rem;
   
    
`
export const AdressPlusCartContainer = styled.span`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`