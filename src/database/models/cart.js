module.exports = (sequelize, DataTypes) => {

    let alias = 'Carts';
    
    let cols = {
        cart_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement:true,
            unsigned: true
        },
        quantity:{
            type: DataTypes.TINYINT,
            allowNull: false
        }
    };
    
    let config = {
    
        tableName: 'carts',
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    
    const Cart = sequelize.define(alias, cols, config)

    Cart.associate = function (models) {
        Cart.belongsTo (models.Products, {
            as: "productsCart",
            foreignKey: "product_id"
        })
    }

    Cart.associate = function (models) {
        Cart.belongsTo(models.Users, {
            as: "usersCart",
            foreignKey: "user_id"
        })
    }

    
    return Cart
    }
    