import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Payment } from './pages/Payment';
import { useState } from 'react';

function App() {
    const [sum, setTotal] = useState<{total:number}>({total:0})
  return (
    <div className="text-blue-400 my-5 container mx-auto">
         <Navbar total = {sum.total} />


        <Routes>
            <Route path='/' element={<Home total={sum.total} setTotal={setTotal} />}/>
            {/* <Route path='/products' element={<ProductList />} /> */}
            <Route path='/payment' element={<Payment />} />
        </Routes>

    </div>
  );
}

export default App;
