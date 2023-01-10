import { Card } from "../../components/Card";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeDeliveryCupImage from '../../assets/images/home-image-coffee-cup.png'
import { CardsArea, CardsAreaTitle, StaticContent, StaticContentContainer, StaticContentIcons, StaticContentImage, StaticContentText, StaticContentTitle } from "./styles";
import { menu } from '../../menu'
import { useState } from "react";
import { useCart } from "../../hooks/useCart";


interface NewOrderProps {
    id: string
    name: string
    price: number
    photo: string
}

export function Home() {
   

   
   return(
        <>
             <StaticContent>
                <StaticContentContainer>
                    <StaticContentTitle>
                        Encontre o café perfeito para qualquer hora do dia
                    </StaticContentTitle>
                    <StaticContentText>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </StaticContentText>
                    <StaticContentIcons>
                        <span><div className="shoppingIcon"><ShoppingCart size={16} weight="fill"/></div><p>Compra simples e segura</p></span>
                        <span className="alignSpan"><div className="cubeIcon"><Package size={16} weight="fill"/></div><p>Embalagem mantém o café intacto</p></span>
                        
                    </StaticContentIcons>
                    <StaticContentIcons>
                        <span ><div className="timerIcon" ><Timer size={16} weight="fill"/></div><p>Entrega rápida e rastreada</p></span>
                        <span><div className="coffeeIcon"><Coffee size={16} weight="fill"/></div><p>O café chega fresquinho até você</p></span>
                    </StaticContentIcons>
                </StaticContentContainer>
                <StaticContentImage>
                    <img src={coffeeDeliveryCupImage} alt="" />
                </StaticContentImage>
            </StaticContent>
            <CardsAreaTitle>Nossos Cafés</CardsAreaTitle>
            <CardsArea>
                

                {menu.map(item =>{
                    return(
                        
                        <Card 
                            key={item.id}
                            coffee={item}
                        />
                    ) 
                })}
            </CardsArea>
        </>
    )
}

