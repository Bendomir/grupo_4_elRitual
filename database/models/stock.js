module.exports = (sequelize, DataTypes) => {

    let alias = 'Stocks';
    
    let cols = {
        stock_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement:true,
            unsigned: true
        },
        quantity:{
            type: DataTypes.TINYINT
        },
        size_id: {
            type: DataTypes.INTEGER,
        },

        product_id: {
            type: DataTypes.INTEGER,
        },
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt:{
            type: DataTypes.DATE
        }
        
    };
    
    let config = {
    
        timestamp: true
    }
    
    const Stock = sequelize.define(alias, cols)

    Stock.associate = function (models){
        Stock.belongsTo (models.Sizes, {
            as: 'productSize',
            foreignKey: 'size_id'
        })

        Stock.belongsTo (models.Products, {
            as: 'productStock',
            foreignKey: 'product_id'
        })
    }
    
    return Stock
    }