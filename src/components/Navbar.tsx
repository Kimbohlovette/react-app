export const Navbar = (prop:{total: number}) => {
  return (
    <div className="flex items-center justify-center border-b pb-4 px-8 fixed top-0 w-full bg-white/60 backdrop-blur-md">
        <nav className="w-full">
            <ul className="flex flex-row gap-4 justify-center items-center">
            <a href="/"><li>Home</li></a>
            <a href="/products"><li>Products</li></a>
            <a href="/payment"><li>Payment</li></a>
            </ul>
        </nav>
        <div className="avatar rounded-full p-4 border-2 border-white bg-slate-100 text-slate-700 shadow-inner hover:bg-blue-400 transition-all duration-200 ease-linear">
            {prop.total}
        </div>
    </div>
  )
}
