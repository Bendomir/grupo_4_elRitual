import React, { useEffect, useState } from "react";

function LastProduct (){

        const [products, setProducts] = useState ([])

                useEffect(() => {
                        fetch ('/api/products', {method:'GET', mode: 'no-cors'}) 
                        .then(response => response.json())
                        .then(data=> {setProducts(data)})
                        .catch(err => console.error)
                }, []);

                useEffect(() => {
                }, [products])

        const totalProducts = products.total

        console.log(totalProducts)

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
                {/* <h3> {lastProduct.name} </h3>  */}

                </>
            );
        }

export default LastProduct