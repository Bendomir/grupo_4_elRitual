import React, { useEffect, useState } from "react";

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
            <h1> Listado de productos </h1>
            <ul>
                {products.length === 0 && <p>cargando...</p>}

                {
                    products.map((product,i) => {
                            return (
                                <li key={i}>
                                    <h3> {product.name} </h3> 
                                </li>
                            )
                    })
                }
            </ul>
        </>
    )
}

export default ProductList