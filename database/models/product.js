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
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt:{
            type: DataTypes.DATE
        }
    };
    
    let config = {
    
        tableName: 'products',
        timestamp: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
    
    const Product = sequelize.define(alias, cols, config)

     Product.associate = function (models){
     Product.hasMany(models.Carts, {
        as: "productCart",
        foreignKey: "product_id"
     })
    

   
        Product.hasMany(models.Shopping, {
            as: "productsShop",
            foreignKey: "product_id"
        })
    

 
        Product.belongsToMany(models.Stocks, {
           as: "productStock",
           through: 'stock',
           foreignKey: "product_id",
           otherKey: 'size_id'
        })
       }
    
    return Product
    }
