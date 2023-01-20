// import Product from './components/Product';

export interface ProductType {
    id: number
	title: string
	price: string
	description: string
}

export interface Props {
	product: ProductType
}

export interface SetTotal {
	total: number
	setTotal: React.Dispatch<React.SetStateAction<{ total: number }>>
}
