'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};
require('dotenv').config();
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const config = {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
}

const sequelize = new Sequelize('optyfi_dev', `${user}`, `${password}`, config);

const tempDirName = '/Users/andres/Desktop/OptyFi/proto-app/src/db/models/'
const files = fs.readdirSync(tempDirName);
// console.log('DIRNAME --> ', __dirname);
// console.log('FILES', files)

for (let file of files) {
  if (file !== 'index.js') {
    // const filePath = path.join(tempDirName, file)
    // console.log(filePath)
    const model = require(`./${file}`)(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;