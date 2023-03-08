


import React, { useEffect, useState } from "react";

function ContentRow (){

    const [products, setProducts] = useState ([])

    useEffect(() => {
        fetch ('/api/products', {method:'GET', mode: 'no-cors'}) 
            .then(response => response.json())
            .then(data=> {setProducts(data)})
            .catch(err => console.error)
    }, []);

    useEffect(() => {
        console.log('ACA SE ACTUALIZA')
    }, [products])


    const [users, setUsers] = useState ([])

    useEffect(() => {
        fetch ('/api/users', {method:'GET', mode: 'no-cors'}) 
            .then(response => response.json())
            .then(data=> {setUsers(data)})
            .catch(err => console.error)
    }, []);

    useEffect(() => {
        console.log('ACA SE ACTUALIZA')
    }, [users])


return(
        <div className='row' id="row2">
            <div className="col-md-4 mb-4">
                <div className={`card border-left-success shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-success text-uppercase mb-1`}> Total de Productos</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{products.total}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fa-shopping-cart fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> Total de Usuarios</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{users.total}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fa-user fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentRow


