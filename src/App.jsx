import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./components/Home.jsx"
import Registration from "./components/Registration.jsx"
import Login from "./components/Login.jsx"
import Shop from "./components/Shop.jsx"
import Contact from "./components/Contact.jsx"
import About from "./components/About.jsx"
import ProductPage from "./components/ProductPage.jsx"
import Help from "./components/Help.jsx"
import LocateUs from "./components/LocateUs.jsx"
import Cart from "./components/Cart.jsx"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Banana-Retail-Site/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="contact" element={<Contact/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="registration" element={<Registration/>}/>
            <Route path="shop/catalogue/:id" element={<ProductPage/>}/>
            <Route path="help" element={<Help/>}></Route>
            <Route path="locate us" element={<LocateUs/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
