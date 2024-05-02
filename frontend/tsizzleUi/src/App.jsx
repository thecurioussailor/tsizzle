import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signin from './components/Signin'
import CreateAccount from './components/CreateAccount'
import Profile from './pages/Profile'
import Wishlist from './pages/Wishlist'
import ShoppingBag from './pages/ShoppingBag'
import Footer from './components/Footer'
import Women from './pages/Women'
import Men from './pages/Men'
import Teen from './pages/Teen'
import Kids from './pages/Kids'
import AdminSignin from './pages/AdminSignin'
import AdminProductCatelog from './pages/AdminProductCatelog'
import AdminProductReview from './pages/AdminProductReview'
import AdminAddItems from './pages/AdminAddItems'

function App() {
 
  

  return (
    <div>
    <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/women" element={<Women/>}></Route>
           <Route path="/men" element={<Men/>}></Route>
           <Route path="/teen" element={<Teen/>} ></Route>
           <Route path="/kids" element={<Kids/>}></Route>
           <Route path="/signin" element={<Signin/>}></Route>
           <Route path="/createaccount" element={<CreateAccount/>}></Route>
           <Route path="/profile" element={<Profile/>}></Route>
           <Route path="/wishlist" element={<Wishlist/>}></Route>
           <Route path="/shopping-bag" element={<ShoppingBag/>}></Route>
           <Route path="/admin" element={<AdminSignin/>} ></Route>
           <Route path="/admin/productcatelog" element={<AdminProductCatelog/>}></Route>
           <Route path="/admin/productreview" element={<AdminProductReview/>}></Route>
           <Route path="/admin/additems" element={<AdminAddItems/>}></Route>

        </Routes>
        <Footer/>
    </BrowserRouter>
      

    </div>
  )
}

export default App
