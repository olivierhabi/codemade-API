"use strict";
module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define(
    "Module",
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
      chapters: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
    },
    {}
  );
  Module.associate = (models) => {
    // associations can be defined here
    Module.belongsTo(models.User, {
      foreignKey: "createdUserId",
      as: "owner",
    });
    Module.belongsTo(models.User, {
      foreignKey: "courseId",
      as: "ownerCourse",
    });
  };

  return Module;
};
