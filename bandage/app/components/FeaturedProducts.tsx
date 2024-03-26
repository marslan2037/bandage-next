'use client';
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux_toolkit/cartSlice";

export default function FeaturedProducts({mainHeading, subHeading, description, shopPage}: any) {
    const [products, setProducts]:any = useState();
    const dispatch = useDispatch();

    function addItemtoCart(item: any) {
        console.log(item)
        dispatch(addItem(item));
    }

    const productsLimit = useRef(10);

    async function fetchData(limit: any) {
        const json = await fetch(`https://dummyjson.com/products?limit=${limit}`);
        const data = await json.json();
        console.log(productsLimit);
        console.log(data);
        setProducts(data.products);
    }

    useEffect(() => {
        fetchData(productsLimit.current);
    }, []);
    
    function loadMoreProducts() {
        productsLimit.current += 10;
        fetchData(productsLimit.current);
    }

    return products ? 
        <div className={`section-content ${subHeading ? '' : 'best-seller-product-style-2'}`}>
            <div className="inner-container">
                <div className="heading">
                    {subHeading? <h4>{subHeading}</h4>: null}
                    {mainHeading? <h3>{mainHeading}</h3>: null}
                    {description? <span className="text-style-1">{description} </span>: null}  
                </div>

                <div className="products-container">
                    {products.map((item:any, index:any) => (

                    <div className="single-product">
                        <img src="assets/images/product-card-1.png" alt="" />

                            <div className="content">
                                <h5>{item.title}</h5>

                                <p>{item.categories}</p>

                                <h5 className="price">${item.price}</h5>
                                <h5>W</h5>
                                <h5  onClick={()=>addItemtoCart(item) }>C</h5>
                            </div>
                    </div>)
                    )}
                </div>

                {
                    !shopPage ? <button onClick={loadMoreProducts} className="button">LOAD MORE PRODUCTS</button> : null
                }
            </div>
        </div>

    :

    null 
}