module.exports = (sequelize, DataTypes) => {

    let alias = 'Sizes';
    
    let cols = {
        size_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement:true,
            unsigned: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        } 
    };
    
    let config = {
    
        tableName: 'sizes',
        timestamps: false
    }
    
    const Size = sequelize.define(alias, cols, config)

    Size.associate = function (models){
    Size.belongsToMany(models.Stocks, {
            as: "productStock",
            through: 'stock',
            foreignKey: "size_id",
            otherKey: "product_id"
         })
    }
    
    return Size
    }