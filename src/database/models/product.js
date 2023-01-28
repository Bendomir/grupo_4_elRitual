module.exports = (sequelize, DataTypes) => {

    let alias = 'products';
    
    let cols = {
        product_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement:true,
            unsigned: true
        },
        name:{
            type: DataTypes.VARCHAR(45),
            allowNull: false
        },
        quota:{
            type: DataTypes.TINYINT
        },
        
        image:{
            type: DataTypes.TEXT
        },
        price:{
            type: DataTypes.TINYINT,
        },
        
    };
    
    let config = {
    
        tableName: 'product',
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    
    const Product = sequelize.define(alias, cols, config)

    Product.associate = function (models){
        Product.belongsTo (models.genres, {
            as: 'genres',
            foreignKey: 'genre_id'
        })
    }
    
    return products
    }
