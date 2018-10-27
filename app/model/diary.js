module.exports = (app) => {
  const { Sequelize } = app;
  const model = app.model;

  const Diary = model.define('diary',
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
      content: {
        type: Sequelize.STRING(60000)
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false
    }
  );

  Diary.sync({ force: false });

  Diary.associate = () => {
    const { Users } = model;

    Diary.belongsTo(Users, {as: 'user', foreignKey: 'user_id', source: 'user_id'});
  }

  return Diary;
};