const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres://fl0user:IH1XDliJZ8ae@ep-tight-morning-52314840.us-east-2.aws.neon.fl0.io:5432/database?sslmode=require') // Postges en FL0

/*const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  database: 'postgres',
  username: 'admin',
  password: 'admin',
  port: 5432,
});*/

module.exports = sequelize;
