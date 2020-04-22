"use strict";
module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define(
    "Courses",
    {
      title: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
      body: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
      comments: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
      modules: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
      rating: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
    },
    {}
  );

  Courses.associate = (models) => {
    // associations can be defined here
    Courses.belongsTo(models.User, {
      foreignKey: "createdUserId",
      as: "owner",
    });
  };

  return Courses;
};
