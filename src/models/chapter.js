"use strict";
module.exports = (sequelize, DataTypes) => {
  const Chapter = sequelize.define(
    "Chapter",
    {
      title: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
    },
    {}
  );

  Chapter.associate = (models) => {
    // associations can be defined here
    Chapter.belongsTo(models.User, {
      foreignKey: "createdUserId",
      as: "owner",
    });
    Chapter.belongsTo(models.User, {
      foreignKey: "courseId",
      as: "ownerCourse",
    });
    Chapter.belongsTo(models.User, {
      foreignKey: "moduleId",
      as: "ownerModule",
    });
  };

  return Chapter;
};
