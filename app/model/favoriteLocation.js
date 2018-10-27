module.exports = (app) => {
  const { Sequelize } = app;
  const model = app.model;

  const FavoriteLocation = model.define('favorite_location',
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
      favorite_group_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false
      },
      location_name: {
        type: Sequelize.STRING(255),
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

  FavoriteLocation.sync({ force: false });

  FavoriteLocation.associate = () => {
    const { Users, FavoriteGroup } = model;

    FavoriteLocation.belongsTo(Users, {as: 'user', foreignKey: 'user_id', source: 'user_id'});
    FavoriteLocation.belongsTo(FavoriteGroup, {as: 'group', foreignKey: 'favorite_group_id', source: 'favorite_group_id'});
  }

  return FavoriteLocation;
};