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
            type: DataTypes.VARCHAR(15),
            allowNull: false
        } 
    };
    
    let config = {
    
        tableName: 'sizes',
        timestamps: false
    }
    
    const Size = sequelize.define(alias, cols, config)
    
    return Size
    }