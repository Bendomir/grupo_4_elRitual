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
        Size.hasMany(models.Stocks, {
            as: 'sizes',
            foreignKey: 'size_id'
        })}
    
    return Size
    }