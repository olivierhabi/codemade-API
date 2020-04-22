"use strict";
module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define(
    "Material",
    {
      title: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
      MaterialUrl: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
      chaptersId: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
    },
    {}
  );

  Material.associate = (models) => {
    // associations can be defined here
    Material.belongsTo(models.User, {
      foreignKey: "createdUserId",
      as: "owner",
    });
    Material.belongsTo(models.User, {
      foreignKey: "courseId",
      as: "ownerCourse",
    });
    Material.belongsTo(models.User, {
      foreignKey: "moduleId",
      as: "ownerModule",
    });
    Material.belongsTo(models.User, {
      foreignKey: "chapterId",
      as: "ownerChapter",
    });
  };

  return Material;
};
