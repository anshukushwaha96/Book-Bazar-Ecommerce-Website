import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/Style/Style.css"
const Showsearch =()=>{
   return(
    <>
    <div id="searchbar">
    <div><img width={"200px"} src="https://skins.minimog.co/cdn/shop/files/Logo_f98924a5-9404-4847-86cc-8ff056c23912.png?v=1627728487&width=400" alt="" /></div>
    <div><Link><input type="text" placeholder="Search Product" ></input></Link></div>
    <div><Link to="/login"><i><FaRegUser /></i></Link></div>
      <div ><Link><i><FaRegHeart/></i></Link></div>
      <div ><Link><i><HiOutlineShoppingBag /></i></Link></div>
    </div>
    </>
   )
}
export {Showsearch}