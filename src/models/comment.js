"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define(
    "Comments",
    {
      comment: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
    },
    {}
  );

  Comments.associate = (models) => {
    // associations can be defined here
    Comments.belongsTo(models.User, {
      foreignKey: "createdUserId",
      as: "owner",
    });
    Comments.belongsTo(models.User, {
      foreignKey: "courseId",
      as: "ownerCourse",
    });
  };

  return Comments;
};
