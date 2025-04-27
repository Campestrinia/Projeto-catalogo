import './App.css';
import { BrowserRouter as Rauter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login';
import { Register } from './pages/Register/Register';
import { Product } from './pages/Product/Product';
import { ManageProduct } from './pages/manage-product';
import { CreateProduct } from './pages/CreateProduct/CreateProduct';
import { ProductWithCategoria } from './pages/ProductWithCategoria/ProductWithCategoria';

function App() {
  return (

    <Rauter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/manage-product/:id" element={<ManageProduct />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/productWithCategoria/:id" element={<ProductWithCategoria />} />
      </Routes>
    </Rauter>
  );
}

export default App;
