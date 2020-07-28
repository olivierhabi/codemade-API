"use strict";
module.exports = (sequelize, DataTypes) => {
  const Module = sequelize.define(
    "Module",
    {
      title: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      videoUrl: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      header: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    Module.belongsTo(models.Courses, {
      foreignKey: "courseId",
      as: "ownerCourse",
    });
  };

  return Module;
};
