import { useSelector } from 'react-redux'
import { getCart } from '../slices/productSlice'

export const Navbar = () => {
	const cartItems = [...useSelector(getCart).product.cart]
    console.log([...cartItems])
    
    const totalCartItems = cartItems.map(cartItem => cartItem.qtty).reduce((a,b)=> a+b, 0)
    console.log(totalCartItems)
    

	return (
		<div className="flex items-center justify-center border-b pb-4 px-8 fixed z-50 top-0 w-full bg-white/60 backdrop-blur-md">
			<nav className="w-full">
				<ul className="flex flex-row gap-4 justify-center items-center">
					<a href="/">
						<li>Home</li>
					</a>
					<a href="/products">
						<li>Products</li>
					</a>
					<a href="/payment">
						<li>Payment</li>
					</a>
				</ul>
			</nav>
			<div className="avatar rounded-full p-4 border-2 border-white bg-slate-100 text-slate-700 shadow-inner hover:bg-blue-400 transition-all duration-200 ease-linear">
				{totalCartItems?totalCartItems:0}
			</div>
		</div>
	)
}
