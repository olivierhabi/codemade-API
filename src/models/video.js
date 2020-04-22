"use strict";
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    "Video",
    {
      title: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
      videoUrl: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
      },
      isWatched: {
        type: DataTypes.STRING(1024),
        allowNull: false,
        unique: true,
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
    Video.belongsTo(models.User, {
      foreignKey: "courseId",
      as: "ownerCourse",
    });
    Video.belongsTo(models.User, {
      foreignKey: "moduleId",
      as: "ownerModule",
    });
    Video.belongsTo(models.User, {
      foreignKey: "chapterId",
      as: "ownerChapter",
    });
  };

  return Video;
};
