"use strict";
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    "Video",
    {
      videoUrl: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    {}
  );

  Video.associate = (models) => {
    // associations can be defined here
    Video.belongsTo(models.User, {
      foreignKey: "createdUserId",
      as: "owner",
    });
    Video.belongsTo(models.Module, {
      foreignKey: "moduleId",
      as: "ownerModule",
    });
  };

  return Video;
};
