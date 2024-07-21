import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem} from "../../ecommercetoolkit/authSlice";
const Wishlist = ()=>{
    const wishdata = useSelector((st)=>st.commerce.wishlist);
    const dispatch = useDispatch()
    const remo = (arg)=>{
        dispatch(removeItem(arg))
    }

    const clo = ()=>{
        // dispatch(closeCart())
    }
    return(
        <>
        ()

<section id="product-store"  >
    <button onClick={clo}>X</button>
          {wishdata.map(e=>{
            return <div key={e.id}>
                 <div class="product-card">
          <div class="product-image">
              <img src={e.image} alt="Product Image"/>
          </div>
          <div class="product-details">
              <div class="product-name">{e.name}</div>
              <div class="product-price">{e.price}</div>
              <button onClick={()=>{remo(e.id)}}>remove</button>
              
          </div>
         
      </div> 
            </div>
          })}
          </section>
            
        </>
    )
}
export default Wishlist;