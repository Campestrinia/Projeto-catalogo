import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart/Cart';
import { Login } from './pages/Login';
import { Register } from './pages/Register/Register';
import { Product } from './pages/Product/Product';
import { ManageProduct } from './pages/manage-product';
import { CreateProduct } from './pages/CreateProduct/CreateProduct';
import { ProductWithCategoria } from './pages/ProductWithCategoria/ProductWithCategoria';
import { Profile } from './pages/Profile/Profile'

import { LoginProvider } from './context/Lcontext';

function App() {
  return (
    <LoginProvider>
      <Router>
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </LoginProvider>
  );
}

export default App;
