import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { ShoopingCartAdress, ShoopingCartAdressPlusPayment, ShoopingCartBillDetails, ShoopingCartBillDiscriminatedValue, ShoopingCartBillTotalValue, ShoopingCartContainer, ShoopingCartOrderInputsBox, ShoopingCartOrderSummary, ShoopingCartOrderSummaryBox, ShoopingCartPaymentMode, ShoopingCartTitle, ShoppingCartAdressInputCep, ShoppingCartAdressInputCity, ShoppingCartAdressInputComplement, ShoppingCartAdressInputDistrict, ShoppingCartAdressInputNumber, ShoppingCartAdressInputStreet, ShoppingCartAdressInputUF, ShoppingCartPaymentFormInput } from "./styles";

import imgex from '../../assets/images/arabe.png'
import { Divider } from "@mui/material";

export function ShopCart() {
    return(
        <ShoopingCartContainer>
            <ShoopingCartAdressPlusPayment>
                <ShoopingCartTitle>
                    Complete seu pedido
                </ShoopingCartTitle>
                <ShoopingCartAdress>
                    <span>
                        <MapPinLine size={22}/>
                        <div>
                            <p>Endereço de Entrega</p>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </span>
                    <ShoopingCartOrderInputsBox>
                        <ShoppingCartAdressInputCep placeholder="CEP"/>
                        <ShoppingCartAdressInputStreet placeholder="Rua" />
                        <div>
                            <ShoppingCartAdressInputNumber placeholder="Número" />
                            <ShoppingCartAdressInputComplement placeholder="Complemento" />
                        </div>
                        <div>
                            <ShoppingCartAdressInputDistrict placeholder="Bairro" />
                            <ShoppingCartAdressInputCity placeholder="Cidade" />
                            <ShoppingCartAdressInputUF placeholder="UF" />
                        </div>

                    </ShoopingCartOrderInputsBox>
                    
                </ShoopingCartAdress>
                <ShoopingCartPaymentMode>
                    <span>
                        <CurrencyDollar size={22}/>
                        <div>
                            <p>Pagamento</p>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                        
                    </span>
                    <div className="pay-methods">
                        <ShoppingCartPaymentFormInput>
                            <CreditCard className="icon" size={16}/>
                                CARTÃO DE CRÉDITO
                        </ShoppingCartPaymentFormInput>
                        <ShoppingCartPaymentFormInput>
                            <Bank className="icon" size={16} />
                                CARTÃO DE DÉBITO
                        </ShoppingCartPaymentFormInput>
                        <ShoppingCartPaymentFormInput>
                            <Money className="icon" size={16} />
                                DINHEIRO
                        </ShoppingCartPaymentFormInput>
                    </div>
                </ShoopingCartPaymentMode>
            </ShoopingCartAdressPlusPayment>
            <ShoopingCartOrderSummary>
                <ShoopingCartTitle>
                    Cafés selecionados
                </ShoopingCartTitle>
                
                <ShoopingCartOrderSummaryBox>
                    <div>
                         <span>
                             <img src={imgex} alt="" />
                             <div>
                                <p>Expresso tradicional</p>
                                <div>
                                    <input type="number" />
                                    <div><Trash/><p>REMOVER</p></div>
                                </div>
                                <div>
                                    <p>R$ 9,90</p>
                                </div>
                             </div>
                         </span>
                        <Divider/>
                    </div>
                    <ShoopingCartBillDetails>
                        <ShoopingCartBillDiscriminatedValue>
                            <p>Total de itens</p>
                            <p>R$ 29,70</p>
                        </ShoopingCartBillDiscriminatedValue>
                        <ShoopingCartBillDiscriminatedValue>
                            <p>Entrega</p>
                            <p>R$ 3,50</p>
                        </ShoopingCartBillDiscriminatedValue>
                        <ShoopingCartBillTotalValue>
                            <p>Total</p>
                            <p>R$ 33,20</p>
                        </ShoopingCartBillTotalValue>
                        <button>Confirmar Pedido</button>
                    </ShoopingCartBillDetails>
                   
                    
                </ShoopingCartOrderSummaryBox>
            </ShoopingCartOrderSummary>





        </ShoopingCartContainer>
    )
}