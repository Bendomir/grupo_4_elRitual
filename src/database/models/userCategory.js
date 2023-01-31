module.exports = (sequelize, DataTypes) => {

    let alias = 'UserCategories';
    
    let cols = {
        userCategories_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement:true,
            unsigned: true
        },
        categoryName:{
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    };
    
    let config = {
    
        tableName: 'UsersCategories',
        timestamps: false
    }
    
    const UserCategory = sequelize.define(alias, cols, config)

    UserCategory.associate = function (models){
        UserCategory.hasMany(models.Users,{
            as: 'users',
            foreignKey: 'userCategory_id'
        })
    }
    
    return UserCategory
    }