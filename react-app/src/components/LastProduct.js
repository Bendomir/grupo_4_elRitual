import React, { useEffect, useState } from "react";

function LastProduct (){

        const [products, setProducts] = useState ([])

                useEffect(() => {
                        fetch ('/api/products', {method:'GET', mode: 'no-cors'}) 
                        .then(response => response.json())
                        .then(data=> { let productsArray = data.data
                        let lastProductInDB = productsArray.at(-1).name
                        let lastProductDetail = productsArray.at(-1).detail
                        fetch(lastProductDetail, {method:'GET', mode: 'no-cors'})
                        .then(response => response.json())
                        .then(data=> { let productDetail = data.data
                                setProducts(productDetail)
                                console.log("🚀 ~ file: LastProduct.js:20 ~ useEffect ~ productDetail:", productDetail)
                        })
                        .catch(err => console.error)})
                }, [])
               
                useEffect(() => {
                }, [products])

       

//         const [lastProduct, setLastProduct] = useState ([])

//                   useEffect(() => {
//                           fetch (`/api/products/${totalProducts}`, {method:'GET', mode: 'no-cors'}) 
//                           .then(response => response.json())
//                           .then(data=> {setLastProduct(data.data)})
//                           .catch(err => console.error)
//                   }, []);

//                   useEffect(() => {
//                   }, [lastProduct])

//        console.log(lastProduct)

        return (
                <>
                <h1 className="h3 mb-0 text-gray-800">LAST PRODUCT</h1>
                { <h3> {products.name } </h3> }
                <img src={products.image}></img>
                </>
            );
        }
export default LastProduct