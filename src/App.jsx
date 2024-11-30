import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./screen/Home.jsx"
import Registration from "./screen/Registration.jsx"
import Login from "./screen/Login.jsx"
import Shop from "./screen/Shop.jsx"
import Contact from "./screen/Contact.jsx"
import About from "./screen/About.jsx"
import ProductPage from "./screen/ProductPage.jsx"
import Help from "./screen/Help.jsx"
import LocateUs from "./screen/LocateUs.jsx"
import Cart from "./screen/Cart.jsx"

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
