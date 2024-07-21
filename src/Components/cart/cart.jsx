import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem} from "../../ecommercetoolkit/authSlice";
import { closeCart } from "../../ecommercetoolkit/authSlice";
// import '../../assets/Style/Style.css'
// import { useNavigate } from "react-router-dom";

const Cart = ()=>{
    //const navi = useNavigate
    const cartdata = useSelector((st)=>st.commerce.items);
    const dispatch = useDispatch()
    const remo = (arg)=>{
        dispatch(removeItem(arg))
    }

    const clo = ()=>{
        // dispatch(closeCart())
        // navi("/")
        
    }
    return(
        <>
        ()
    
     <section id="product-store" >
      <button onClick={clo}>X</button>
          {cartdata.map(e=>{
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
export default Cart;