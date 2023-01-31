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
        
    };
    
    let config = {
    
        tableName: 'Stocks',
        timestamp: false
    }
    
    const Stock = sequelize.define(alias, cols, config)

    Stock.associate = function (models){
        Stock.belongsTo (models.Sizes, {
            as: 'productSize',
            foreignKey: 'size_id'
        })}

    Stock.associate = function (models){
        Stock.belongsTo (models.Products, {
            as: 'productStock',
            foreignKey: 'product_id'
        })
    }
    
    return Stock
    }
