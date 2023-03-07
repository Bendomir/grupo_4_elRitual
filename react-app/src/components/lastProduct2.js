import React, { useEffect, useState } from "react";

function LastProduct2 (props){

        const totalProducts = props


          console.log(totalProducts)

//         const [lastProduct, setLastProduct] = useState ([])

//                  useEffect(() => {
//                          fetch (`/api/products/${totalProducts}`, {method:'GET', mode: 'no-cors'}) 
//                          .then(response => response.json())
//                          .then(data=> {setLastProduct(data.data)})
//                          .catch(err => console.error)
//                  }, []);

//                  useEffect(() => {
//                          console.log('ACA SE ACTUALIZA')
//                  }, [lastProduct])

//      console.log(lastProduct)

        return (
                <>
                <h1 className="h3 mb-0 text-gray-800">LAST PRODUCT 2</h1>
                {/* <h3> {lastProduct.name} </h3>  */}

                </>
            );
        }

export default LastProduct2