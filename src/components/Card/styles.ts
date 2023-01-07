import styled from "styled-components"


export const CardContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    border-radius: 0 2.5rem;
    background: ${(props) => props.theme['base-card']};
    display: flex;
    flex-direction: column;
    align-items: center;
   

    span{
        display: flex;
        justify-content: center;
        gap: 0.25rem;
    }
    
`
export const CoffeeImage = styled.image`
    margin-top: calc(0px - 1.25rem);
    margin-bottom: 0px;
`
export const CoffeeObs = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'roboto', sans-serif;
    font-weight: bold;
    font-size: 0.75rem;
    margin-top: 0.5rem;
`

export const CoffeeName = styled.div`
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin: 1rem 1.25rem 0 1.25rem;

   

`

export const CoffeeDescription = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin: 0.5rem 1.25rem 0px 1.25rem;
    
`
export const OrderArea = styled.span`
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
`
export const CoffeePrice = styled.span`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`
export const CoffeePricePrefix = styled.span`
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};

  
    

`
export const CoffeePriceValue = styled.span`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};


`
export const CoffeeQuantity = styled.input`
    width: 4.5rem;
    height: 2.375rem;
    border: none;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-title']};
    text-align: center;
`
export const AddToCartButton = styled.button`
    height: 2.375rem;
    width: 2.375rem;
    border: none;
    border-radius: 0.375rem;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['white']};
    display: flex;
    align-items: center;
    justify-content: center;
`
