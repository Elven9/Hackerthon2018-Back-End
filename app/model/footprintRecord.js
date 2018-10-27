module.exports = (app) => {
  const { Sequelize } = app;

  const FootprintRecord = sequelize.define('footprint_record',
    {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      schedule_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false
    }
  );

  FootprintRecord.sync({ force: false });

  FootprintRecord.associate = () => {
    const { Users, Schedule } = app.model;

    FootprintRecord.belongsTo(Users, {as: 'user', foreignKey: 'user_id', source: 'user_id'});
    FootprintRecord.belongsTo(Schedule, {as: 'schedule', foreignKey: 'schedule_id', source: 'schedule_id'});
  }

  return FootprintRecord;
};