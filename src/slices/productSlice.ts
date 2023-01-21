import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
            let found = false
            for(const cartItem of state.cart){
                if(cartItem.item.id === action.payload.id){
                    found = true
                    const idx = state.cart.indexOf(cartItem)
                    state.cart[idx] = {item:action.payload,qtty: cartItem.qtty +1}
                }
            }
            if(!found){
                state.cart.push({item: action.payload, qtty: 1})
            }
            state.sumTotal += Number(action.payload.price)
        },
		removeFromCart: (state, action:PayloadAction<number> )=> { 
            const id = action.payload
            for(const cartItem of state.cart){
                if(cartItem.item.id===id){
                    const index = state.cart.indexOf(cartItem)
                    state.cart[index].qtty -=1
                }
            }
        },
	},
})

export const { addToCart, removeFromCart } = productSlice.actions
export const getCart = (state:any) => state
export default productSlice.reducer
