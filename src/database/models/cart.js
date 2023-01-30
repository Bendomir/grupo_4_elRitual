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
        },
        created_date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        modified_date:{
            type: DataTypes.DATE,
            allowNull: false
        }
    };
    
    let config = {
    
        tableName: 'carts',
        timestamp: true,
        created_date: 'created_date',
        modified_date: 'modified_date'
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
    