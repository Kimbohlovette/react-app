import { useState } from "react"
import { Props } from "../types";

const Product = (props:Props) => {
    const [qtty, setQtty] = useState(0);

    const increment = ()=>{
        setQtty(qtty=>qtty+1>0?qtty+1:0)
        props.setTotal.setTotal({total: props.setTotal.total + 1})
    }
    const decrement = ()=>{

        setQtty(qtty=>qtty-1>0?qtty-1:0)
        props.setTotal.setTotal({total: (props.setTotal.total>1?props.setTotal.total -1 :0)})
        
    }
  return (
        <div className="p-8 shadow-inner hover:shadow-md duration-300 ease-in border rounded-lg w-auto bg-white">
            <img src="https://glotelho.cm/media/catalog/product/cache/10c38e727fc23e80dac0902df9ceb42d/f/l/flybox-olax-ax7-pro---4g-lte-router.jpg" className="w-full h-auto aspect-video object-cover object-center" alt="" />
            <h2 className="text-xl font-bold py-2">{props.title}</h2>
            <p className="py-2 text-3xl font-bold text-slate-800">{props.price}</p>
            <p className="py-2 mb-4 text-slate-400 text-sm font-extralight">{props.desc}</p>

            <div className="flex flex-row gap-4 items-center justify-center">
            {
                qtty? 
                (<div className="px-8 py-1 text-white text-2xl bg-amber-600/60 rounded-md cursor-pointer backdrop-blur-sm"  onClick={decrement}>-</div>):
                ""
            }
                <div>{qtty}</div>
                <div className="px-8 py-1 text-white text-2xl bg-blue-600/60 backdrop-blur-sm rounded-md" onClick={increment}>+</div>
            </div>
        </div>
    )
}

export default Product