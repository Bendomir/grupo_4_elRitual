const dB = require ('../../database/models/')


module.exports =  {
    list: (req, res) =>{
        dB.Products
        .findAll()
        .then(products => {
            res.json(
                {
                total: products.length,
                data: 
                        products.map((product) => ({
                            id: product.product_id,
                            name: product.name,
                            detail: "localhost:3000/api/products/" + product.product_id
                        })),
                status: 200
                }
            );
        })
        },
    
    detail: (req, res) =>{

        let productList = dB.Products 
                            .findByPk(req.params.id)
        let productStock = dB.Stocks
                            .findAll({
                                where: {
                                    product_id: req.params.id
                                }})


        Promise.all([productList, productStock])

         .then(([product, stock]) => {
             let totalStock = 0

            res.json({
                data: {
                    id: product.product_id,
                    name: product.name,
                    quota: product.quota,
                    image: "localhost:3000/images/" + product.image,
                    price: product.price,
                    quantity: (stock.forEach(e => {
                        totalStock = totalStock + e.dataValues.quantity
                    })), totalStock
                },
                status: 200
            });
         })
        }
}






// list: (req, res) =>{
//     dB.Products
//     .findAll()
//     .then(products => {
//         res.json(
//             {
//             total: products.length,
//             data: 
//                     products.map((product) => ({
//                         id: product.product_id,
//                         name: product.name,
//                         detail: "localhost:3000/api/products/" + product.product_id
//                     })),
//             status: 200
//             }
//         );
//     })
//     },




