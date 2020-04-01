

const {Sequelize} = require('sequelize');


const {user,password,host,port,dialect,dbName} = require('../config').database;


const sequelize = new Sequelize(dbName,user,password,{
    dialect,
    host,
    port,
    logging:false,
    timezone:'+08:00',
    define:{
        timestamps:true,
    }
});

sequelize.sync({
    force:false
});

module.exports = sequelize;