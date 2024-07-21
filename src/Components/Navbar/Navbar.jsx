import {Link} from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import {  useDispatch, useSelector } from "react-redux";
import Cart from "../cart/cart.jsx";
import "../../assets/Style/Style.css"
import { useState } from "react";
import { HomeSlide } from "../../Pages/Home/Homeslide/homeslide";
import { ShopSlide } from "../../Pages/Shop/Shopslide/shopslide";
import { ProductSlide } from "../../Pages/Product/ProductSlice/product";
import { Showsearch } from "./showsearch";
import Wishlist from "../cart/wishlist";
const Navbar =()=>{
  const[cartstate,setCartstate]=useState(null)
  const[wish,setWish]=useState(null)
  const dispatch =useDispatch();
  const cart = useSelector((state)=>state.commerce.items)
  const wishcount = useSelector((state)=>state.commerce.wishlist)
  const showcart =()=>{
    setCartstate(<Cart/>)
    // alert("hii")
  }
  const showwish =()=>{
    setWish(<Wishlist/>)
    // setCartstate("")
  }
  const [navslidestore,setNavslidestore]=useState(null)
  const [showsearch,setShowsearch]=useState(null);


  const displayhome =()=>{
        setNavslidestore(<HomeSlide/>);
  }
  const displayshop=()=>{
    setNavslidestore(<ShopSlide/>)
  }
  const displayproduct=()=>{
    setNavslidestore(<ProductSlide/>)
  }
  const hide =()=>{
    setNavslidestore("")
    setShowsearch("")
  }
  const search =()=>{
     setShowsearch(<Showsearch/>)
  }

    return(
    <>
    <input type="checkbox" id="navshow" hidden />
    
    <label for="navshow" id="bar"><FaBars /></label>
    <div id="imgbar"><Link to="/"><img src="https://skins.minimog.co/cdn/shop/files/Logo_f98924a5-9404-4847-86cc-8ff056c23912.png?v=1627728487&width=400" alt="" /></Link>
    <div onClick={showcart} id="cartshow"><Link><i><HiOutlineShoppingBag />{cart.length}</i></Link></div>
    <div onClick={showwish} id="wishshow"><Link><i><FaRegHeart />{wishcount.length}</i></Link></div>
    </div>

    <div style={{position:"absolute",float:"right"}}>
      
       {cartstate}
      
      </div>
    <div style={{position:"absolute",float:"left"}}>
      {wish}
    </div>
    <div onMouseLeave={hide}></div>
    <div onMouseLeave={hide}>{showsearch}</div>
    <div id="navi">
      <div ><Link onMouseEnter={displayhome} to="/" style={{paddingRight:"20px"}}  >HOME</Link></div>
      <div><Link  onMouseEnter={displayshop} to="/shop" style={{paddingRight:"20px"}}>CATEGORY</Link></div>
      <div><Link onMouseEnter={displayproduct} to="/product" style={{paddingRight:"20px"}}>PRODUCT</Link></div>
      <div><Link onMouseLeave={hide} to="/about" style={{paddingRight:"20px"}}>ABOUT</Link></div>
      {/* <div><Link  to="/foxkit" style={{paddingRight:"20px"}}>FOXKIT</Link></div> */}
      <div><Link to="/"><img src="https://skins.minimog.co/cdn/shop/files/Logo_f98924a5-9404-4847-86cc-8ff056c23912.png?v=1627728487&width=400" alt="" /></Link></div>
      <div><i><FaSearch /></i></div>
      <div id="search" onClick={search}><Link><input type="text" placeholder="Search Product" ></input></Link></div>
      <div><Link to="/login"><i><FaRegUser /></i></Link></div>
      <div onClick={showwish}><Link><i><FaRegHeart />{wishcount.length}</i></Link></div>
      <div onClick={showcart}><Link><i><HiOutlineShoppingBag />{cart.length}</i></Link></div>
      </div>
       <div onMouseLeave={hide}>{navslidestore}</div>  
    </>
    )
}
export {Navbar};