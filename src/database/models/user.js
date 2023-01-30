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
            type: DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.TEXT
        },
        newsletter:{
            type: DataTypes.TINYINT
        }
    };
    
    let config = {
    
        tableName: 'Users',
        timestamps: false
    }
    
    const User = sequelize.define(alias, cols, config)

    User.associate = function (models){
        User.belongsTo (models.userCategory, {
            as: 'category',
            foreignKey: 'userCategory_id'
        })
    }
    
    return User
    }

