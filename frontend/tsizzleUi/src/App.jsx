import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signin from './components/Signin'
import CreateAccount from './components/CreateAccount'

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
           <Route path="/wishlist"></Route>
           <Route path="/shopping-bag"></Route>
        </Routes>
    </BrowserRouter>
      

    </div>
  )
}

export default App
