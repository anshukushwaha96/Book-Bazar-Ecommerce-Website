import './product.css';
import { addtocart,addtowish } from '../../ecommercetoolkit/authSlice';
import { useDispatch } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";
const Product = () => {

    const dispatch = useDispatch();

    const pro = [
        {
            name: 'Everything Bhudhism',
            image: 'https://m.media-amazon.com/images/I/71RzKar5M6L._AC_UF1000,1000_QL80_.jpg',
            price: "$19.99",
            rating: 4.5,
            id: 1
        },
        {
            name: 'Fear Not be Strong',
            image: 'https://m.media-amazon.com/images/I/61cVNCxwLXL._SY466_.jpg',
            price: "$29.99",
            rating: 5,
            id: 2
        },
        {
            name: 'Harry Potter',
            image: 'https://m.media-amazon.com/images/I/71sH3vxziLL._AC_UF1000,1000_QL80_.jpg',
            price: "$19.99",
            rating: 4.5,
            id: 3
        },
        {
            name: 'Belts',
            image: 'https://onlinecollegestreet.com/cdn/shop/products/9780143458180.jpg?v=1664281229',
            price: "$29.99",
            rating: 5,
            id: 4
        }, {
            name: 'Glasses',
            image: 'data:image/jpeg;base64,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',
            price: "$19.99",
            rating: 4.5,
            id: 5
        },
        {
            name: 'Shoes',
            image: 'https://booksandbao.com/wp-content/uploads/2021/01/916BOEQO13L-652x1000.jpg.webp',
            price: "$29.99",
            rating: 5,
            id: 6
        }, {
            name: 'Tie',
            image: 'https://m.media-amazon.com/images/I/61945NQjF7L._AC_UF1000,1000_QL80_.jpg',
            price: "$19.99",
            rating: 4.5,
            id: 7
        },
        {
            name: 'Blazers',
            image: 'https://img.etimg.com/photo/msid-98117661,imgsize-96130/OneDay%2CLifeWillChangebySaranyaUmakanthan.jpg',
            price: "$29.99",
            rating: 5,
            id: 8
        }
        , {
            name: 'Blazers',
            image: 'https://www.crossword.in/cdn/shop/products/9788194790860.jpg?v=1680199607',
            price: "$29.99",
            rating: 5,
            id: 9
        },
        {
            name: 'Blazers',
            image: 'https://www.crossword.in/cdn/shop/files/815Zs-YvvYL._SY466_360x@2x.jpg?v=1698836690',
            price: "$29.99",
            rating: 5,
            id: 10
        },
        {
            name: 'Blazers',
            image: 'https://m.media-amazon.com/images/I/61D+a8Zh63L._AC_UF1000,1000_QL80_.jpg',
            price: "$29.99",
            rating: 5,
            id: 11
        },
        {
            name: 'Blazers',
            image: 'https://m.media-amazon.com/images/M/MV5BMmQ0MmI3YjktNDlkNi00YTBkLTk5OGItNjhkNmM1NGI1M2IwXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg',
            price: "$29.99",
            rating: 5,
            id: 12
        },
        {
            name: 'Blazers',
            image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405510570i/22732195.jpg',
            price: "$29.99",
            rating: 5,
            id: 13
        },
        {
            name: 'Blazers',
            image: 'https://cdn.shopify.com/s/files/1/0648/3066/9017/products/getimage_21bc4238-d0b3-4321-816e-69bf0c3a5865_360x.jpg?v=1678458341',
            price: "$29.99",
            rating: 5,
            id: 14
        },
        {
            name: 'Blazers',
            image: 'https://m.media-amazon.com/images/I/51Ke5T-ECjL._SX300_SY300_QL70_FMwebp_.jpg',
            price: "$29.99",
            rating: 5,
            id: 15
        },
        {
            name: 'Blazers',
            image: 'https://m.media-amazon.com/images/I/71hcNIzZqaL._SX522_.jpg',
            price: "$29.99",
            rating: 5,
            id: 16
        },

    ];
    
    const add=(arg)=> {
        dispatch(addtocart(arg))
    }
    const wish=(ar)=>{
        dispatch(addtowish(ar))
    }

    
    return (
        <>
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
                            <button onClick={()=> {add(e)}}> Add to cart </button>
                            <span onClick={()=>{wish(e)}}><FaRegHeart /></span>
                            
                            </div>
                            {/* <center><button onClick={() => { detail(e) }}>detail</button></center> */}
                            
                        </div>
                    </div>
                })}
            </section>
        </>
    );
}

export { Product };