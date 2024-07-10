import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ShopHome from './Pages/ShopHome';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Login from './Pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ShopHome/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory  banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <ToastContainer/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
