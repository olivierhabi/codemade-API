"use strict";
module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define(
    "Material",
    {
      materialUrl: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(1024),
        allowNull: false,
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
    Material.belongsTo(models.Courses, {
      foreignKey: "courseId",
      as: "ownerCourse",
    });
  };

  return Material;
};
