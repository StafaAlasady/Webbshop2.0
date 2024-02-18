
import './App.css';
import { Navbar } from './Components/TopNavbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Product } from './Pages/Product';
import { MarketPlaceCategory } from './Pages/MarketPlaceCategory';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Home } from './Pages/Home';
import { Explore } from './Pages/Explore';
import { ContactUs } from './Pages/Contact-us';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/MarketPlace' element={<MarketPlaceCategory category="Artworks"/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Contact-us" element={<ContactUs/>}/>
        <Route path="/Product" element={<Product/>}>

          <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
