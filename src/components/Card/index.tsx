import { AddToCartButton, CardContainer, CoffeeDescription, CoffeeImage, CoffeeName, CoffeeObs, CoffeePrice, CoffeePricePrefix, CoffeePriceValue, CoffeeQuantity, OrderArea } from "./styles";

import { ShoppingCart } from "phosphor-react";



interface CardProps{
    id?: string 
    name:string
    price:number
    obs1: string | undefined
    obs2?: string | null
    obs3?: string | null
    description:string
    photo: string
}

export function Card( {name, obs1, obs2, obs3, description, price, photo}:CardProps ){ 

   

    
    return(
        <>
           
            <CardContainer>
                <CoffeeImage><img src={photo} alt="" width='120' height='120' /></CoffeeImage>
                <span>
                    <CoffeeObs>{obs1}</CoffeeObs>
                    <CoffeeObs>{obs2}</CoffeeObs>
                    <CoffeeObs>{obs3}</CoffeeObs>
                </span>
                <CoffeeName>{name}</CoffeeName>
                <CoffeeDescription>{description}</CoffeeDescription>

                <OrderArea>
                    <CoffeePrice>
                        <CoffeePricePrefix>
                            R$
                        </CoffeePricePrefix>
                        <CoffeePriceValue>
                            {price.toFixed(2)}
                        </CoffeePriceValue>
                    </CoffeePrice>
                    <CoffeeQuantity type="number" step={1} min={0} >

                    </CoffeeQuantity>
                    <AddToCartButton ><ShoppingCart size={22} weight="fill"/></AddToCartButton>
                </OrderArea>

            </CardContainer>
        </>
    )
}