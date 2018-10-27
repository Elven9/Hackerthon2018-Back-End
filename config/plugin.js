'use strict';

// had enabled by egg
// exports.static = true;

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}