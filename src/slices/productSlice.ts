import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../types'

interface CartItem {
    item: ProductType
    qtty: number
}
interface State {
	cart: CartItem[]
	sumTotal: number
}

const initialState: State = {
    cart: [
        {
            item:{
                id: 1,
                title: 'Tatiana Manaois',
                price: '17332',
                description: 'odio vel est tempor bibendum. Donec felis orci, adipiscing',
            },
            qtty: 4
        }, 
        {
            item: {
                id: 2,
                title: 'Olax AX7 Pro Router',
                price: '7475',
                description: 'vitae diam. Proin dolor. Nulla semper tellus id nunc',
            },
            qtty: 2
        }
    ],
	sumTotal: 5681,
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addToCart: (state: any, action: PayloadAction<ProductType>) =>{
            console.log(state.cart)
            //const cartLength = state.cart?state.cart.length:0
            let found = false
            for(const cartItem of state.cart){
                if(cartItem.item.id === action.payload.id){
                    found = true
                    const idx = state.cart.indexOf(cartItem)
                    state.cart[idx] = {item:action.payload,qtty: cartItem.qtty +1}
                }
            }
            if(!found){
                console.log("Not found! Adding...")
                state.cart.push({item: action.payload, qtty: 1})
            }
            state.sumTotal += Number(action.payload.price)
            console.log("cart after action: ", state.cart, state.cart.length)

        },
		removeFromCart: (state, action:PayloadAction<ProductType> )=> {},
	},
})

//console.log(productSlice.actions.addToCart)

export const { addToCart, removeFromCart } = productSlice.actions

export const getCart = (state:any) => state.cart

export const getSumTotal = (state: any) => state.sumTotal

export default productSlice.reducer
