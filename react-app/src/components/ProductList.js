import React, { useEffect, useState } from "react";
import "./dashboard.css"

function ProductList (){

    const [products, setProducts] = useState ([])

    useEffect(() => {
        fetch ('/api/products', {method:'GET', mode: 'no-cors'}) 
            .then(response => response.json())
            .then(data=> {setProducts(data.data)})
            .catch(err => console.error)
    }, []);

    useEffect(() => {
        console.log('ACA SE ACTUALIZA')
    }, [products])

    

return(
        <>
       
            <div className="cartList">
            <h1 className="titleList"> Listado de productos </h1>
            <ul className="List">
                {products.length === 0 && <p>cargando...</p>}

                {
                    products.map((product,i) => {
                            return (
                                <li key={i}>
                                    <h3 className="nameList"> {product.name} </h3> 
                                </li>
                            )
                    })
                }
            </ul>
            </div>
    
        </>
    )
}

export default ProductList