module.exports = (app) => {
  const { Sequelize } = app;

  const Users = sequelize.define('users',
    {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true
      },
      name_zh: {
        type: Sequelize.STRING(255)
      },
      name_en: {
        type: Sequelize.STRING(255)
      },
      email: {
        type: Sequelize.STRING(45)
      },
      join_at: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      nick_name: {
        type: Sequelize.STRING(45)
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false
    }
  );

  Users.sync({ force: false });

  Users.associate = () => {
    
  }

  return Users;
};