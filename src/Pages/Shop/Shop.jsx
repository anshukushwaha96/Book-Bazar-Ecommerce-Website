import '../Product/product.css';
import { addtocart,addtowish } from '../../ecommercetoolkit/authSlice';
import { useDispatch } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
const Shop =()=>{

    const dispatch = useDispatch();

    const pro = [
        {
            name: 'Everything Bhudhism',
            image: 'https://www.crossword.in/cdn/shop/products/71H80X277mL.jpg?v=1685693241',
            price: "$19.99",
            rating: 4.5,
            id: 1
        },
        {
            name: 'Fear Not be Strong',
            image: 'https://cdnp.targetpublications.org/media/catalog/product/cache/f63311a2a00c092df9b3c20ab1a8a20f/1/2/12473_2_1.jpg',
            price: "$29.99",
            rating: 5,
            id: 2
        },
        {
            name: 'Harry Potter',
            image: 'https://m.media-amazon.com/images/I/71CedT9yPIL._AC_UF1000,1000_QL80_.jpg',
            price: "$19.99",
            rating: 4.5,
            id: 3
        },
        {
            name: 'Belts',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwNfL3dsFobL8GFXul2I9apLq8GjLJ5UApPg&usqp=CAU',
            price: "$29.99",
            rating: 5,
            id: 4
        }, {
            name: 'Glasses',
            image: 'https://offshootbooks.com/cdn/shop/products/Pinochiocover.jpg?v=1652433434',
            price: "$19.99",
            rating: 4.5,
            id: 5
        },
        {
            name: 'Shoes',
            image: 'https://offshootbooks.com/cdn/shop/products/81k2Ol0VprL.jpg?v=1652862776',
            price: "$29.99",
            rating: 5,
            id: 6
        }, {
            name: 'Tie',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qPDIKvLizcW6VmjOOmQF0kH_11akEjdSdg&usqp=CAU',
            price: "$19.99",
            rating: 4.5,
            id: 7
        },
        {
            name: 'Blazers',
            image: 'https://www.ibdmaphouse.com/cdn/shop/products/4_e807673c-d8aa-422c-a3a2-00af3de477bf.png?v=1643801204',
            price: "$29.99",
            rating: 5,
            id: 8
        }



    ]
        const pro1 =[
         {
            name: 'Blazers',
            image: 'https://cdn.waterstones.com/bookjackets/large/9781/7876/9781787637245.jpg',
            price: "$29.99",
            rating: 5,
            id: 9
        },
        {
            name: 'Blazers',
            image: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Author_Author_Cover.jpg',
            price: "$29.99",
            rating: 5,
            id: 10
        },
        {
            name: 'Blazers',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WNWI78ytGQ89sGxPZ-yse8_CX9pcpj37IUaAV3WYmGE3jpcOJhs6u5kzF1C4-vqwojg&usqp=CAU',
            price: "$29.99",
            rating: 5,
            id: 11
        },
        {
            name: 'Blazers',
            image: 'https://orion-uploads.openroadmedia.com/md_f7e651-tolkien-lordoftherings.jpg',
            price: "$29.99",
            rating: 5,
            id: 12
        },
        {
            name: 'Blazers',
            image: 'https://i.pinimg.com/474x/12/56/d8/1256d8f3befb60f266dbcfc66596814c.jpg',
            price: "$29.99",
            rating: 5,
            id: 13
        },
        {
            name: 'Blazers',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBKVEPtYAa3Vfd3oFcFxI93nVq_8piWV5we0TFl969eK70ynleABCTNMdQ9WwAcG_fK8&usqp=CAU',
            price: "$29.99",
            rating: 5,
            id: 14
        },
        {
            name: 'Blazers',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtmBtXp7r8GZM6nbPRqRG6aBM9TyMsFRzg3zECWXslltj8i-XtkbUnbLjYWkne-DmOwE&usqp=CAU',
            price: "$29.99",
            rating: 5,
            id: 15
        },
        {
            name: 'Blazers',
            image: 'https://m.media-amazon.com/images/I/918wMKe5xhL._AC_UF1000,1000_QL80_.jpg',
            price: "$29.99",
            rating: 5,
            id: 16
        },

    ];
    
    const add = (arg) => {
        dispatch(addtocart(arg))
    }
    const wish=(ar)=>{
        dispatch(addtowish(ar))
    }

    
    return (
        <>
          <div><h1 style={{fontSize:"50px",marginLeft:"50px",marginTop:"50px"}}>Story books</h1></div>
            <section id="cardouter">
                
                {pro.map(e => {
                    return <div key={e.id}>
                       
                        <div class="product-card">
                            <div class="product-image">
                                <img  src={e.image} alt="Product Image" />
                            </div>
                            
                            <div class="product-details">
                                <div class="product-name">{e.name}</div>
                                <div class="product-price">{e.price}</div>
                                
                            </div>
                           
                            <div id="middlecart">
                            <button onClick={() => { add(e) }}> Add to cart </button>
                            <span onClick={()=>{ wish(e) }}><FaRegHeart /></span>
                            
                            </div>
                            {/* <center><button onClick={() => { detail(e) }}>detail</button></center> */}
                            
                        </div>
                    </div>
                })}
            </section>
            <div><h1 style={{fontSize:"50px",marginLeft:"50px",marginTop:"100px"}}>Novel books</h1></div>
            <section id="cardouter">
                
                {pro1.map(e => {
                    return <div key={e.id}>
                        
                        <div class="product-card">
                            <div class="product-image">
                                <img  src={e.image} alt="Product Image" />
                            </div>
                            
                            <div class="product-details">
                                <div class="product-name">{e.name}</div>
                                <div class="product-price">{e.price}</div>
                                
                            </div>
                           
                            <div id="middlecart">
                            <button onClick={() => { add(e) }}> Add to cart </button>
                            <span onClick={()=>{ wish(e) }}><FaRegHeart /></span>
                            
                            </div>
                            {/* <center><button onClick={() => { detail(e) }}>detail</button></center> */}
                            
                        </div>
                    </div>
                })}
            </section>
        



    </>
    )
}
export {Shop};