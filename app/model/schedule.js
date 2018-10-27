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
    
  }

  return Schedule;
};