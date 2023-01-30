module.exports = (sequelize, DataTypes) => {

    let alias = 'Shopping';
    
    let cols = {
        shop_id:{
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
        total_price:{
            type: DataTypes.INTEGER,
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
    
        tableName: 'shopping',
        timestamp: true,
        created_date: 'created_date',
        modified_date: 'modified_date'
    }
    
    const Shop = sequelize.define(alias, cols, config)

    Shop.associate = function (models) {
        Shop.belongsTo(models.Products, {
            as: "productsShop",
            foreignKey: "product_id"
        })
    }

    Shop.associate = function (models) {
        Shop.belongsTo(models.Users, {
            as: "usersShop",
            foreignKey: "user_id"
        })
    }
        
    
    return Shop
}

