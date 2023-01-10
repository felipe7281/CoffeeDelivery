import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../components/Card";
import { produce } from 'immer'

export interface CartItem extends Coffee{
    quantity: number
}

interface CartContextType{
    cartItems: CartItem[];
    addCoffeeToCart: (item : CartItem) => void;
}

interface CartContextProviderProps{
    children: ReactNode;
}
export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children} : CartContextProviderProps ){
    const[cartItems, setCartitems] = useState<CartItem[]>([])

    function addCoffeeToCart(item: CartItem){
        const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === item.id);

        const newCart = produce( cartItems , (draft) => {
            if(coffeeAlreadyExistsInCart < 0){
                draft.push(item);
            } else {
                draft[coffeeAlreadyExistsInCart].quantity += item.quantity;
            }
        })

        setCartitems(newCart)
    }


    return(
        <CartContext.Provider value={{cartItems, addCoffeeToCart }}>
            {children}
        </CartContext.Provider>
    )
}