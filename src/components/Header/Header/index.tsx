import logoCoffee from '../../../assets/svg/Logo.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
import { AdressContainer, AdressPlusCartContainer, CartContainer, HeaderContainer } from './styles'

export function Header() {

    return(
        
        <HeaderContainer>
            <a href='/'><img src={logoCoffee} alt="" /></a>
            <AdressPlusCartContainer>
                <AdressContainer>
                    <MapPin size={22} weight='fill' />
                        Sorocaba - SP
                    
                    
                </AdressContainer>
                <a href='/cart'>
                    <CartContainer>
                        <ShoppingCart size={22} weight='fill' />
                    </CartContainer>
                </a>
            </AdressPlusCartContainer>
            
        </HeaderContainer>

        
    )
}