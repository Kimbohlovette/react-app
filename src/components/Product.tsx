import { useState } from "react"
import { Props } from "../types";

const Product = (props:Props) => {
    const [qtty, setQtty] = useState(10);

    const increment = ()=>{
        setQtty(qtty=>qtty+1>0?qtty+1:0)
        props.setTotal.setTotal({total: props.setTotal.total + 1})
    }
    const decrement = ()=>{

        setQtty(qtty=>qtty-1>0?qtty-1:0)
        props.setTotal.setTotal({total: (props.setTotal.total>1?props.setTotal.total -1 :0)})
        
    }
  return (
        <div className="p-8 shadow-inner hover:shadow-md duration-300 ease-in border rounded-lg w-auto">
            <img src="https://cdns-images.dzcdn.net/images/artist/022787f764f053c0aac3ccc3c75f0dc8/500x500.jpg" className="w-full h-auto aspect-video object-cover object-top" alt="" />
            <h2 className="text-xl font-bold py-2">{props.title}</h2>
            <p className="py-2 text-3xl font-bold text-slate-800">{props.price}</p>
            <p className="py-2 mb-4 text-slate-400 text-sm">{props.desc}</p>

            <div className="flex flex-row gap-4 items-center justify-center">
            {
                qtty? 
                (<div className="px-8 py-1 text-white text-2xl bg-amber-500 rounded-md"  onClick={decrement}>-</div>):
                ""
            }
                <div>{qtty}</div>
                <div className="px-8 py-1 text-white text-2xl bg-blue-500 rounded-md" onClick={increment}>+</div>
            </div>
        </div>
    )
}

export default Product