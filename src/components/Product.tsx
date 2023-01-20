import { useDispatch} from 'react-redux'
import {
	addToCart,
	removeFromCart,
} from '../slices/productSlice'
import {  Props } from '../types'
import { useState } from 'react';

const Product = (props: Props) => {
	const dispatch = useDispatch()
	const [qty, setQty] = useState(0)

	const increment = () => {
        setQty(qty => qty + 1)
		dispatch(addToCart(props.product))
	}
	const decrement = () => {
        const id = props.product.id
		dispatch(removeFromCart(id))
        setQty(qty=>qty - 1)
	}
	return (
		<div className="p-8 shadow-inner hover:shadow-md duration-300 ease-in border rounded-lg w-auto bg-white" key={props.product.id}>
			<img
				src="https://glotelho.cm/media/catalog/product/cache/10c38e727fc23e80dac0902df9ceb42d/f/l/flybox-olax-ax7-pro---4g-lte-router.jpg"
				className="w-full h-auto aspect-video object-cover object-center"
				alt=""
			/>
			<h2 className="text-2xl font-bold pb-2 pt-8 text-blue-400">{props.product.title}</h2>
			<p className="py-2 text-3xl font-bold text-slate-800">
				{props.product.price}
			</p>
			<p className="py-2 mb-4 text-slate-400 text-sm font-extralight">
				{props.product.description}
			</p>

			<div className="flex flex-row gap-4 items-center justify-center">
				{qty ? (
					<div
						className="px-8 py-1 text-white text-2xl bg-amber-600/60 rounded-md cursor-pointer backdrop-blur-sm"
						onClick={decrement}
					>
						-
					</div>
				) : (
					''
				)}
				<div>{qty}</div>
				<div
					className="px-8 py-1 text-white text-2xl bg-blue-600/60 backdrop-blur-sm rounded-md"
					onClick={increment}
				>
					+
				</div>
			</div>
		</div>
	)
}

export default Product
