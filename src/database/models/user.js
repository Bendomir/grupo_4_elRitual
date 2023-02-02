module.exports = (sequelize, DataTypes) => {

    let alias = 'Users';
    
    let cols = {
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement:true,
            unsigned: true
        },
        firstName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false    
        },
        password:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        image:{
            type: DataTypes.TEXT
        },
        newsletter:{
            type: DataTypes.TINYINT
        },
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt:{
            type: DataTypes.DATE
        }
    };
    
    let config = {
    
        tableName: 'users',
        timestamp: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
    
    const User = sequelize.define(alias, cols, config)

     User.associate = function (models){
         User.belongsTo (models.UserCategories, {
             as: 'category',
             foreignKey: 'userCategory_id'
         })
     }
    
    return User
    }

