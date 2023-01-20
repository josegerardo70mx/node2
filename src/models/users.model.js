const db = require('../utils/database');

const { DataTypes } = require('sequelize');

//definir nombre y modelo de tabla//
const Users = db.define("users", {
            id: {
               primaryKey: true,
                     type: DataTypes.INTEGER,
            autoIncrement: true,
                allowNull: false,       
            },
      username: {
                 type: DataTypes.STRING,
            allowNull: false,
               unique: true,

      },
         email: {
               type: DataTypes.STRING,
          allowNull: false,
             unique: true,
             validate: {
              isEmail: true,
             }    
         },
      password: {
               type: DataTypes.STRING,
          allowNull: false,

      }, 
    })


            module.exports = Users;