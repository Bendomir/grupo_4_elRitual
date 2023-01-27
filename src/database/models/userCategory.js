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
            type: DataTypes.VARCHAR (45),
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
            foreignKey: 'user_id'
        })
    }
    
    return UserCategory
    }