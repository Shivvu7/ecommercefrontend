import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import About from "./Pages/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import HomePage from "./Components/Home/HomePage";
import ShoppingCartPage from "./Components/Cart/Cart";
import Shop from "./Components/Shop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/HomePage" element={<HomePage></HomePage>} />
        <Route path="/cart" element={<ShoppingCartPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
