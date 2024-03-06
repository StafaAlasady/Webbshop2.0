
import './App.css';
import { Navbar } from './Components/TopNavbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Product } from './Pages/Product';
import { MarketPlaceCategory } from './Pages/MarketPlaceCategory';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { MarketPlace } from './Pages/MarketPlace';
import { Explore } from './Pages/Explore';
import { ContactUs } from './Pages/Contact-us';
import { Footer } from './Components/Footer/Footer';
import MarketPlaceBanner from './Components/Assets/Banner1.png'




function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MarketPlace/>}/>
        <Route path='/MarketPlace' element={<MarketPlaceCategory banner={MarketPlaceBanner} category="Artworks"/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Contact-us" element={<ContactUs/>}/>
        <Route path="/Product" element={<Product/>}>

          <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
