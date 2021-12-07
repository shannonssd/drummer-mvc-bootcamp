import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import initUserModel from './user.mjs';
import initReservationModel from './reservation.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Reservation = initReservationModel(sequelize, Sequelize.DataTypes);

db.Reservation.belongsTo(db.User);
db.User.hasMany(db.Reservation);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
