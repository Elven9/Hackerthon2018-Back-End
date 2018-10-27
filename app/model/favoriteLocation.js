module.exports = (app) => {
  const { Sequelize } = app;

  const FavoriteLocation = sequelize.define('favorite_location',
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
    
  }

  return FavoriteLocation;
};