import { ProductList } from '../components/ProductList';

export const Home = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold py-2">
           Products
        </h1>

        <ProductList/>
    </div>
  )
}
