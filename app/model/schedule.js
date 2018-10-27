module.exports = (app) => {
  const { Sequelize } = app;

  const Schedule = sequelize.define('schedule',
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
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false
    }
  );

  Schedule.sync({ force: false });

  Schedule.associate = () => {
    const { Users } = app.model;

    Schedule.belongsTo(Users, {as: 'user', foreignKey: 'user_id', source: 'user_id'});
  }

  return Schedule;
};