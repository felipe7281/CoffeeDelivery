import styled from "styled-components";

export const OrderConfirmedContainer = styled.span`
    display: flex;
    gap: 4.75rem;
    margin-right: 10rem;
    margin-left: 10rem;
    margin-top: 5rem;
    img{
        margin-top: 6rem;
    }
`

export const OrderConfirmedMessageBox = styled.span`
    display: flex;
    flex-direction: column;

    h5 {
        color: ${(props) => props.theme['yellow-dark']};
        font-size: 2rem;
        font-family: 'Baloo 2';
        line-height: 1.3;
    }
    h6 {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.3;
        font-family: 'Roboto', sans-serif;;
    }
`

export const OrderConfirmedInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 32.875rem;
    height: 16.875rem;
    /* border-image: linear-gradient(to right, ${(props) => props.theme['yellow-dark']} , ${(props) => props.theme['purple-dark']}) 50;
    border-width: 2px;
    border-style: solid; */

    border: 2px solid transparent;
    background: 
        linear-gradient(to right, ${(props) => props.theme['white']}, ${(props) => props.theme['white']}), // background
        linear-gradient(to right, ${(props) => props.theme['yellow-dark']} , ${(props) => props.theme['purple-dark']}); //borda
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;

    border-radius: 6px 36px;
    padding: 2.5rem;
    gap: 2rem;
    margin-top: 2.5rem;

    span{
        display: flex;
        gap: 0.875rem;
        align-items: center;
        color: ${(props) => props.theme['base-text']};

    }
`
export const OrderConfirmedIConBase = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
 
  display: flex;
  justify-content: center;
  align-items: center;
  
`
export const OrderConfirmedIConAdress = styled(OrderConfirmedIConBase)`


  background: ${(props) => props.theme['purple']};
  color: ${(props) => props.theme['white']};

`
export const OrderConfirmedIConDeliveryTime = styled(OrderConfirmedIConBase)`


  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};

`
export const OrderConfirmedIConPaymentMode = styled(OrderConfirmedIConBase)`


  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};

`
