module.exports = (sequelize, DataTypes) => {

    let alias = 'stock';
    
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
    
        tableName: 'stock',
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    
    const Stock = sequelize.define(alias, cols, config)

    Stock.associate = function (models){
        Stock.belongsTo (models.sizes, {
            as: 'sizes',
            foreignKey: 'size_id'
        })}

    Stock.associate = function (models){
        Stock.belongsTo (models.products, {
            as: 'products',
            foreignKey: 'product_id'
        })
    }
    
    return stock
    }
