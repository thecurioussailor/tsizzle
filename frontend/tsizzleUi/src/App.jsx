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

function App() {
 
  

  return (
    <div>
    <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/women"></Route>
           <Route path="/men"></Route>
           <Route path="/teen"></Route>
           <Route path="/kids"></Route>

           <Route path="/signin" element={<Signin/>}></Route>
           <Route path="/createaccount" element={<CreateAccount/>}></Route>
           <Route path="/profile" element={<Profile/>}></Route>
           <Route path="/wishlist" element={<Wishlist/>}></Route>
           <Route path="/shopping-bag" element={<ShoppingBag/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
      

    </div>
  )
}

export default App
