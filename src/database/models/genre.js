module.exports = (sequelize, DataTypes) => {

    let alias = 'Genres';
    
    let cols = {
        genre_id:{
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
    
        tableName: 'genres',
        timestamps: false
    }
    
    const Genre = sequelize.define(alias, cols, config)

     Genre.associate = function (models){
         Genre.hasMany(models.Products, {
         as: 'genres',
         foreignKey: 'genre_id'
         })
        }
       
    
    return Genre
    }
    