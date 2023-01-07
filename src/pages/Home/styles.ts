import styled from "styled-components"

export const StaticContent = styled.span`
    display: flex;
    gap: 3.5rem;
    margin: 5.75rem 10rem auto 10rem;
    background: ${(props) => props.theme['white']};
    
`

export const StaticContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    
`
export const StaticContentTitle = styled.div`
    font-family: 'Baloo 2';
    line-height: 1.3;
    font-weight: bold;
    font-size: 3rem;
    width: 36.75rem;
    height: 7.75rem;
    
    
        

`
export const StaticContentText = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    width: 36.75rem;
    
`
export const StaticContentIcons = styled.span`
    width: 35.4375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    span{
    display: flex;
    
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
   }
    
   
    
   

    div{
        
        color: ${(props) => props.theme['background']};
        border-radius: 100%;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        

    }
    p{
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        white-space: nowrap;
    }

   .shoppingIcon{
        background: ${(props) => props.theme['yellow-dark']};
        
   }
   .cubeIcon{
        background: ${(props) => props.theme['base-text']};
       
   }
   .timerIcon{
        background: ${(props) => props.theme['yellow']};
   }
   .coffeeIcon{
        background: ${(props) => props.theme['purple']};
   }
   .alignSpan{
        margin-left: 3.3125rem;
        
   }
`
export const StaticContentImage = styled.div`
    width: 29.75
   img{
    width: 29.75rem;
   }
`
export const CardsArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 8rem 10rem 9.8128rem 10rem;
    gap: 2rem;
    flex-wrap: wrap;
   
        
   
    
`
export const CardsAreaTitle = styled.div`
    margin-left: 10rem;
    margin-top: 1rem;
    margin-bottom: calc(0px - 5rem);
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
`