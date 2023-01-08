import styled from "styled-components";

export const ShoopingCartContainer = styled.div`
    background: ${(props) => props.theme['white']};
    margin-left: 10rem;
    margin-top: 2.5rem;
    display: flex;
    gap: 2rem;
`
export const ShoopingCartTitle = styled.h1`
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
`
export const ShoopingCartAdressPlusPayment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    
`
export const ShoopingCartAdress = styled.div`
   width: 40rem;
   height: 23.25rem;
   background: ${(props) => props.theme['base-card']};
   padding: 2.5rem;
   span{
    display:flex;
    color: ${(props) => props.theme['yellow-dark']};
    gap: 0.5rem;
   }
   div{
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3

   }
   p:nth-child(2){
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
   }
    
`
export const ShoopingCartPaymentMode = styled.div`
   width: 40rem;
   height: 12.9375rem;
   background: ${(props) => props.theme['base-card']};
   padding: 2.5rem;

   span{
    display:flex;
    color: ${(props) => props.theme['purple']};
    gap: 0.5rem;
   }
   div{
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3

   }
   .pay-methods{
      display: flex;
      gap: 0.75rem;
      margin-top: 2rem;
   }
   p:nth-child(2){
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
   }
   
    
`
export const ShoopingCartOrderSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
`
export const ShoopingCartOrderSummaryBox = styled.div`
   width: 28rem;
   height: fit-content;
   background: ${(props) => props.theme['base-card']};
   border-radius: 6px 44px; 
   

    
`
export const ShoopingCartOrderInputsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
   
    div {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
    }
    
`

export const ShoppingCartAdressInputBase = styled.input`
   
   height: 2.625rem;
   background: ${(props) => props.theme['base-input']};
   color: ${(props) => props.theme['base-label']};
   font-family: 'Roboto', sans-serif;
   font-size: 0.875rem;
   border: 1px solid ${(props) => props.theme['base-button']};
   padding-left: 1rem;
   border-radius: 0.25rem;
   
 

`
export const ShoppingCartAdressInputCep = styled(ShoppingCartAdressInputBase)`
   width: 12.5rem;
   
` 
export const ShoppingCartAdressInputStreet = styled(ShoppingCartAdressInputBase)`
   width: 35rem;
   
` 
export const ShoppingCartAdressInputNumber = styled(ShoppingCartAdressInputBase)`
width: 12.5rem;

` 
export const ShoppingCartAdressInputComplement = styled(ShoppingCartAdressInputBase)`
   width: 21.75rem;
   
` 
export const ShoppingCartAdressInputDistrict = styled(ShoppingCartAdressInputBase)`
   width: 12.5rem;
   
` 
export const ShoppingCartAdressInputCity = styled(ShoppingCartAdressInputBase)`
   width: 17.25rem;
   
` 
export const ShoppingCartAdressInputUF = styled(ShoppingCartAdressInputBase)`
   width: 3.75rem;
   
` 

export const ShoppingCartPaymentFormInput = styled.button`
   width: 11.16rem;
   height: 3.1875rem;
   background: ${(props) => props.theme['base-button']};
   color: ${(props) => props.theme['base-text']};
   font-family: 'Roboto', sans-serif;
   font-size: 0.875rem;
   border: none;
  
   border-radius: 0.375rem;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.75rem;

  .icon{
   color: ${(props) => props.theme['purple']};
  }
` 
export const ShoopingCartBillDetails = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.75rem;
   margin: 1.5rem 2.5rem auto 2.5rem;
`
export const ShoopingCartBillDiscriminatedValue = styled.span`
   display: flex;
   justify-content: space-between;
   font-family: 'Roboto', sans-serif;
   font-size: 0.875rem;
   color: ${(props) => props.theme['base-text']};

`
export const ShoopingCartBillTotalValue = styled.span`
   display: flex;
   justify-content: space-between;
   font-family: 'Roboto', sans-serif;
   font-size: 1.25rem;
   font-weight: bold;
   color: ${(props) => props.theme['base-subtitle']};

`

export const ShoppingCartSubmitButton= styled.button`
   width: 23rem;
   height: 2.875rem;
   background: ${(props) => props.theme['yellow']};
   color: ${(props) => props.theme['white']};
   font-family: 'Roboto', sans-serif;
   font-size: 0.875rem;
   border: none;
   margin-top: 0.5rem;
   margin-bottom: 2.5rem;
   border-radius: 0.375rem;
   display: flex;
   align-items: center;
   justify-content: center;
   


` 
export const ShoopingCartSelectedProducts = styled.span`
   display: flex;
   padding: 2.5rem 2.5rem 1.5rem 2.5rem;
   gap: 1.25rem;
   

   span{
      display: flex;
      gap: 0.5rem;
      align-items: center;


   }
   input{
      width: 4.5rem;
      height: 2rem;
      border: none;
      border-radius: 0.375rem;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-title']};
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      text-align: center;


   }
   div{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
   }
   .deleteProduct{
      width: 5.6875rem;
      height: 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};  
      font-size: 0.75rem;
     
   }
   .trashIcon{
      color: ${(props) => props.theme['purple']}; 
   }
   .itemPrice{
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};  
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      margin-left: 2rem;;

   }
`
