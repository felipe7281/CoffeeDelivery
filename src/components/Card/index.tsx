import { useState } from "react";
import { AddCartWrapper, AddToCartButton, CardContainer, CoffeeDescription, CoffeeImage, CoffeeName, CoffeeObs, CoffeePrice, CoffeePricePrefix, CoffeePriceValue, CoffeeQuantity, OrderArea } from "./styles";

import { ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

import { QuantityInput } from "../QuantityInput";


export interface Coffee{
    id: string | number
    tags: string[]
    name: string
    description: string
    photo: string;
    price: number
}
interface CardProps{
  coffee: Coffee
}



export function Card( {coffee}:CardProps ){ 
    const [quantity, setQuantity] = useState(0)

    function handleIncreaseQuantity(){
        setQuantity((state) => state + 1);
    }

    function handleDecreaseQuantity(){
        setQuantity((state) => state - 1);
    }

    const { addCoffeeToCart} = useCart();
    function handleAddToCart(){
        const coffeeToAdd = {
            ...coffee,
            quantity: 1
        }
        addCoffeeToCart(coffeeToAdd)
    }

  
    
    return(
        <>
           
            <CardContainer>
                <CoffeeImage><img src={coffee.photo} alt="" width='120' height='120' /></CoffeeImage>
                
                <CoffeeObs> {coffee.tags.map(tag => <span key={`${coffee.id}${tag}`}>{tag}</span>)}</CoffeeObs>

                    {/* <CoffeeObs>{coffee.tags[0]}</CoffeeObs>
                    <CoffeeObs>{coffee.tags[1]}</CoffeeObs>
                    <CoffeeObs>{coffee.tags[2]}</CoffeeObs> */}
                
                <CoffeeName>{coffee.name}</CoffeeName>
                <CoffeeDescription>{coffee.description}</CoffeeDescription>

                <OrderArea>
                    <CoffeePrice>
                        <CoffeePricePrefix>
                            R$
                        </CoffeePricePrefix>
                        <CoffeePriceValue>
                            {coffee.price.toFixed(2)}
                        </CoffeePriceValue>
                    </CoffeePrice>
                    <AddCartWrapper>
                        <QuantityInput
                            quantity={quantity}
                            onIncrease={handleIncreaseQuantity}
                            onDecrease={handleDecreaseQuantity}
                          
                            
                        />
                            <button onClick={handleAddToCart}>
                                <ShoppingCart weight="fill" size={22} />
                            </button>
                    </AddCartWrapper>
                   
                </OrderArea>

            </CardContainer>
        </>
    )
}