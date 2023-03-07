const dB = require ('../../database/models/')
const sequelize = require("sequelize");

module.exports =  {
    list: (req, res) =>{
        dB.Users
        .findAll()
        .then(users => {
            res.json(
                {
                total: users.length,
                data: 
                        users.map((user) => ({
                            id: user.user_id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            detail: "localhost:3000/api/users/" + user.user_id
                        })),
                status: 200
                }
            );
        })
        },
    
    detail: (req, res) =>{
        dB.Users
        .findByPk(req.params.id)
         .then(user => {

            if (!user){
                res.json("El usuario no existe")
             } else {

            res.json({
                data: {
                    id: user.user_id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    userName: user.userName,
                    imageUrl: "localhost:3000/images/userImages/" + user.image,
                },
                status: 200
            })};
         })
        }
}
