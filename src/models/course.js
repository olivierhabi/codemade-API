"use strict";
module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define(
    "Courses",
    {
      title: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      courseType: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      features: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING(1024),
        allowNull: false,
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
