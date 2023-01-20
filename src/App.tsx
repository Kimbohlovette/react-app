import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Payment } from './pages/Payment';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="text-blue-400 my-5 container mx-auto px-2">
         <Navbar/>


        <Routes>
            <Route path='/' element={<Home />}/>
            {/* <Route path='/products' element={<ProductList />} /> */}
            <Route path='/payment' element={<Payment />} />
        </Routes>

    </div>
    </Provider>
  );
}

export default App;
