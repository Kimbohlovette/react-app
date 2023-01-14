import { ProductList } from "../components/ProductList"
import { SetTotal } from '../types';

export const Home = (props:SetTotal) => {
  return (
    <div>
        <h1 className="text-2xl font-bold py-2">
           Products
        </h1>

        <ProductList total={props.total} setTotal={props.setTotal} />
    </div>
  )
}
