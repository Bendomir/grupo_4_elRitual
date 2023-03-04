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






// import React, { useEffect, useState } from "react";

// function ProductList (){

//     const [products, setProducts] = useState ([]);

//     useEffect(() => {
//         fetch ('/api/products', {method:'GET', mode: 'no-cors'}) 
//             .then(response => response.json())
//             .then(data=> setProducts(data))
//             .catch(err => console.error)
//     })

    

// return(
//         <>
                
//                 <h1 className="h3 mb-2 text-gray-800">
//                     Listado de productos
//                 </h1>

                
//                 <div className="card shadow mb-4">
//                     <div className="card-body">
//                         <div className="table-responsive">
//                             <table
//                                 className="table table-bordered"
//                                 id="dataTable"
//                                 width="100%"
//                                 cellSpacing="0"
//                             >
//                                 <thead>
//                                     <tr>
//                                         <th>Id</th>
//                                         <th>Titulo</th>
//                                         <th>Calificación</th>
//                                         <th>Premios</th>
//                                         <th>Duración</th>
//                                     </tr>
//                                 </thead>
//                                 <tfoot>
//                                     <tr>
//                                         <th>Id</th>
//                                         <th>Titulo</th>
//                                         <th>Calificación</th>
//                                         <th>Premios</th>
//                                         <th>Duración</th>
//                                     </tr>
//                                 </tfoot>
//                                 <tbody>
//                                     {products.map((m) => {
//                                         return <product key={m.id} movie={m} />;
//                                     })}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </>
//     )
// }

// export default ProductList