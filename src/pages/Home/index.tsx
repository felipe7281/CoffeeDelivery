import { Card } from "../../components/Card";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeDeliveryCupImage from '../../assets/images/home-image-coffee-cup.png'
import { CardsArea, CardsAreaTitle, StaticContent, StaticContentContainer, StaticContentIcons, StaticContentImage, StaticContentText, StaticContentTitle } from "./styles";
import { useState } from "react";



export function Home() {

    const menu = [
        {
            id: '0101',
            name: 'Expresso Tradicional',
            obs1: 'Tradicional',
            obs2: null,
            obs3: '',
            photo: '/src/assets/images/expressoTradicional.png',
            description: 'O tradicional café feito com água quente e grãos moídos',
            price: 9.90,
    
        },
        {
            id: '0102',
            name: 'Expresso Americano',
            obs1: 'Tradicional',
            obs2: 'Teste',
            obs3: '',
            photo: '/src/assets/images/expressoAmericano.png',
            description: 'Expresso diluído, menos intenso que o tradicional',
            price: 9.90,
            
        },
        {
            id: '0103',
            name: 'Expresso Cremoso',
            obs1: 'Tradicional',
            obs2: '',
            obs3: '',
            photo: '/src/assets/images/expressoCremoso.png',
            description: 'Café expresso tradicional com espuma cremosa',
            price: 9.90,
    
        },
        {
            id: '0104',
            name: 'Expresso Gelado',
            obs1: 'Tradicional',
            obs2: 'Gelado',
            obs3: '',
            photo: '/src/assets/images/expressoGelado.png', 
            description: 'Bebida preparada com café expresso e cubos de gelo',        
            price: 9.90,
            
        }, {
            id: '0105',
            name: 'Café com Leite',
            obs1: 'TRADICIONAL',
            obs2: 'COM LEITE',
            obs3: '',
            photo: '/src/assets/images/cafe-com-leite.png',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 9.90,
    
        },
        {
            id: '0106',
            name: 'Latte',
            obs1: 'TRADICIONAL',
            obs2: 'COM LEITE',
            
            photo: '/src/assets/images/latte.png' ,
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            price: 9.90,
            
        },
        {
            id: '0107',
            name: 'Capuccino',
            obs1: 'TRADICIONAL',
            obs2: 'COM LEITE',
            obs3: '',
            photo: '/src/assets/images/capuccino.png' ,
            description: 'Café expresso tradicional com espuma cremosa',
            price: 9.90,
    
        },
        {
            id: '0108',
            name: 'Macchiato',
            obs1: 'TRADICIONAL',
            obs2: 'COM LEITE',
            obs3: '',
            photo: '/src/assets/images/macchiato.png' ,
            description: 'Café expresso misturado com um pouco de leite quente e espuma',        
            price: 9.90,
            
        },
        {
            id: '0109',
            name: 'Mocaccino',
            obs1: 'TRADICIONAL',
            obs2: 'COM LEITE',
            obs3: '',
            photo: '/src/assets/images/mocaccino.png',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: 9.90,
    
        },
        {
            id: '0110',
            name: 'Chocolate Quente',
            obs1: 'ESPECIAL',
            obs2: 'COM LEITE',
            obs3: '',
            photo: '/src/assets/images/chocolate-quente.png',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 9.90,
            
        },
        {
            id: '0111',
            name: 'Cubano',
            obs1: 'ESPECIAL',
            obs2: 'ALCOÓLICO',
            obs3: 'GELADO',
            photo: '/src/assets/images/cubano.png',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            price: 9.90,
    
        },
        {
            id: '0112',
            name: 'Havaiano',
            obs1: 'ESPECIAL',
            obs2: '',
            obs3: '',
            photo: '/src/assets/images/havaiano.png', 
            description: 'Bebida adocicada preparada com café e leite de coco',        
            price: 9.90,
            
        }, {
            id: '0113',
            name: 'Árabe',
            obs1: 'ESPECIAL',
            obs2: '',
            obs3: '',
            photo: '/src/assets/images/arabe.png',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            price: 9.90,
    
        },
        {
            id: '0114',
            name: 'Irlandês',
            obs1: 'ESPECIAL',
            obs2: 'ALCOÓLICO',
            
            photo: '/src/assets/images/irlandes.png' ,
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            price: 9.90,
            
        },
    ]

    const[pedido, setPedido] = useState("");

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
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            obs1={item.obs1}
                            obs2={item.obs2}
                            obs3={item.obs3}
                            photo={item.photo} />
                    ) 
                })}
            </CardsArea>
        </>
    )
}

