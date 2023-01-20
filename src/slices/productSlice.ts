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
    cart: [],
	sumTotal: 5681,
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addToCart: (state: State, action: PayloadAction<ProductType>) =>{
            const newitems = state.cart.map(item =>item.item)
            console.log(newitems)
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

export const getCart = (state:any) => state

export const getSumTotal = (state: any) => state.sumTotal

export default productSlice.reducer
