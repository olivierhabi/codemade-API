"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      isAdmin: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isProUser: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      subStartDate: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      subEndDate: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
    },
    {}
  );

  return User;
};
