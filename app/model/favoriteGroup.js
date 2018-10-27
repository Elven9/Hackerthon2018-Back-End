module.exports = (app) => {
  const { Sequelize } = app;
  const model = app.model;

  const FavoriteGroup = model.define('favorite_group',
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
      name: {
        type: Sequelize.STRING(255)
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false
    }
  );

  FavoriteGroup.sync({ force: false });

  FavoriteGroup.associate = () => {
    const { Users } = model;

    FavoriteGroup.belongsTo(Users, {as: 'user', foreignKey: 'user_id', source: 'user_id'});
  }

  return FavoriteGroup;
};