import { OrderConfirmedContainer, OrderConfirmedIConAdress, OrderConfirmedIConDeliveryTime, OrderConfirmedIConPaymentMode, OrderConfirmedInfoBox, OrderConfirmedMessageBox } from "./styles";
import orderConfirmed from '../../assets/images/order-confirmed.png'
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";

export function OrderConfirm() {
    return(
        
            <OrderConfirmedContainer>
                <OrderConfirmedMessageBox>
                    <h5>Uhu! Pedido Confirmado</h5>
                    <h6>Agora é só aguardar que logo o café chegará até você</h6>
                    <OrderConfirmedInfoBox>
                        <span>
                            <OrderConfirmedIConAdress><MapPin weight="fill" size={16}/></OrderConfirmedIConAdress>
                            <div>
                                <p>Entrega em <strong>Estrada do Dinorah, 1400</strong></p>
                                <p>Horto FLorestal - Sorocaba -SP</p>
                            </div>
                        </span>
                        <span>
                            <OrderConfirmedIConDeliveryTime><Clock weight="fill" size={16}/></OrderConfirmedIConDeliveryTime>
                            <div>
                                <p>Previsão de entrega</p>
                                <strong>20 min - 30 min</strong>
                            </div>
                        </span>
                        <span>
                            <OrderConfirmedIConPaymentMode><CurrencyDollar weight="fill" size={16} /></OrderConfirmedIConPaymentMode>
                            <div>
                                <p>Pagamento na entrega</p>
                                <strong>Cartão de Crédito</strong>
                            </div>
                        </span>
                    </OrderConfirmedInfoBox>
                </OrderConfirmedMessageBox>
                <div>
                    <img src={orderConfirmed}/>
                </div>
            </OrderConfirmedContainer>
       
    )
}