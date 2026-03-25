//O CORAÇÃO DO APP PASSA A SER O CONTEXT
import { createContext, ReactNode, useState } from "react"

//TIPAGEM DO PRODUTO
export type Product = {
    id: string;
    title: string;
    price: number;
    description: ;
    category: ;
    image: ;
}

//TIPAGEM DO CARRINHO, JÁ RECEBE A TIPAGEM DO PRODUTO E QUANTIDADE
export type CartItem = Product & {
    quantity: ;
}

//A TYPAGEM DO QUE A NOSSA APLICAÇAO PRECISA UTILIZAR 
//ITEMS, ADICIONAR UM ITEM NO CARRINHO, REMOVER UM ITEM DO CARRINHO E TOTAL
type CartContextType = {
    items: CartItem[];
    addToCart: (product: string) => void;
    removeFromCart: (id: string) => void;
    total: number;
}

//CRIANDO O CONTEXTO QUE RECEBE A TIPAGEM DO CARRINHO
export const CartContext = createContext({} as null)

//CRIAMOS O PROVEDOR QUE VAI ENGLOBAR NOSSA APLICAÇÃO. POR CAUSA DO PROVIDER É QUE OUTROS ARQUIVOS
//CONSEGUEM ACESSAR AS FUNÇÕES.
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {
        setItems(prev => {
            //PRIMEIRO: VERIFICO SE JÁ EXISTE O ITEM SELECIONADO DENTRO DO CARRINHO
            const itemExists = prev.find(p => p.id === product.id)

            if(itemExists){
                return prev.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p)
            }
            return [...prev, {...product, quantity: 1}]
        })
    }

    const removeFromCart = (id: string) => {
        setItems(prev => prev.filter(p => p.id !== id))
    }

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    return (
        <CartContext.Provider value={{items, total}}>
            {children}
        </CartContext.Provider>
    )
}