import { useState } from "react";
import Img1 from "../../assets/Images/Slide2_7e6636d6-bde0-4806-8fb8-e03b432ae8ce.jpg"
import Pro1 from "../../assets/Images/promotion1_3226e820-34fd-43c4-a4f3-be2e658bd88f.jpg"
import Pro2 from "../../assets/Images/promotion2_854e84ac-f587-44b7-9db9-2495a9c77589.jpg"
import Pro3 from "../../assets/Images/promotion3_2a386e70-39c5-4c9c-811e-cee10d9eb6bd.jpg"
import best1 from "../../assets/Images/1-a_1e4cd32e-8e11-470c-9a1c-666b4a8cc6f0.jpg"
import best2 from "../../assets/Images/5-a_7d1395bb-258c-4ae0-8335-ea19c52084dc.jpg"
import best3 from "../../assets/Images/3-a_6d1018fb-0a7d-4b23-acb8-aa8981f9fecf.jpg"
import best4 from "../../assets/Images/14-a_011f4de9-3216-4fb9-a687-89f43df3efc2.jpg"
import single from "../../assets/Images/imagewithtext.jpg"
const Home = () => {

    return (
        <>
            <div style={{ width: "100%" }} ><img src={Img1} width="100%" alt="" /></div>
            <div id="imagenote"><p>For Booklovers</p>
            <h1>A World of books For Young And Old</h1>
            <button>Shop now</button></div>
            <div style={{ height: "900px" }}>
                <div id="mem">Member Favorites</div>
                <div id="proImg">
                    <div><img src={Pro1} width="100%" alt="" />
                        <h1>recommended books</h1>
                        <p>Turn organization into decor with a multi-use, three-tier rack that’s beautiful in any room</p></div>
                    <div><img src={Pro2} width="100%" alt="" />
                        <h1>comming soon</h1>
                        <p>Turn organization into decor with a multi-use, three-tier rack that’s beautiful in any room</p></div>
                    <div><img src={Pro3} width="100%" alt="" />
                        <h1>Featured people</h1>
                        <p>Turn organization into decor with a multi-use, three-tier rack that’s beautiful in any room</p>
                    </div>

                </div>

            </div>
            <div id="part3">
                <div><img src="https://cdn.shopify.com/s/files/1/0561/2742/2636/files/12.png?v=1622195418" alt="" /></div>
                <div><h1>Summer’s Most Anticipated Reads</h1>
                    <span>The biggist books oth the season!</span></div>
                <div><button>Shop Now</button></div>
            </div>
            <div style={{ height: "700px" }}>
                <div id="mem">Bestsellers</div>
                <div id="proImg2">
                    <div><img src={best1} width="100%" alt="" />
                        <h2>House Plant</h2>
                        <span>$15.00</span></div>
                    <div><img src={best2} width="100%" alt="" />
                        <h2>Dogs at Home</h2>
                        <span>$12.00</span>

                    </div>
                    <div><img src={best3} width="100%" alt="" /><h2>Dogs at Home</h2>
                        <span>$12.00</span>
                    </div>
                    <div><img src={best4} width="100%" alt="" />
                        <h2>Dogs at Home</h2>
                        <span>$12.00</span>
                    </div>


                </div>
            </div>

            <div id="part5">
                <div><img src={single} alt="" /></div>
                <div id="part52"><h1>Inspiration for
                    Every Age.
                </h1>
                    <p>81% of students whom traditionally used bound books to
                        conduct research are now using digital devices.</p>
                        <button>Shop Now</button></div>
            </div>

        </>
    )
}
export { Home };