import React, { useEffect, useState } from "react";
import "./dashboard.css"

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

       

        return (
                <>
                
                <div className="CartLastProduct">
                <h1 className="titleList">Último Producto</h1>
                { <h3 className="nameProduct"> {products.name } </h3> }
                <img src={products.image} className="imageProduct"></img>
                { <h3 className="nameProduct"> Precio: ${products.price } </h3> }
                { <h3 className="nameProduct"> Stock: {products.totalStock } </h3> }
                </div>
                
                </>
            );
        }
export default LastProduct