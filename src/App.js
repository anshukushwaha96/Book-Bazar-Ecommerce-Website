import { BrowserRouter,Routes,Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Foxkit } from "./Pages/FoxKit/FoxKit";
import { Product } from "./Pages/Product/Product";
import { Shop } from "./Pages/Shop/Shop";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Pages/Login/Login";
function App() {
  // const lstate = useSelector((state)=>state.commerce.items)

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/foxkit" element={<Foxkit/>}></Route>
      {/* <Route path="/login" element={<Login/>}></Route> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
