module.exports = (sequelize, DataTypes) => {

    let alias = 'Products';
    
    let cols = {
        product_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement:true,
            unsigned: true
        },
        name:{
            type: DataTypes.STRING,
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
    
        tableName: 'products',
        timestamp: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    
    const Product = sequelize.define(alias, cols, config)

     Product.associate = function (models){
     Product.belongsTo(models.Genres, {
     as: 'genres',
     foreignKey: 'genre_id'
     })
    }
    
    return Product
    }
