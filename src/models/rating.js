"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    "Rating",
    {
      rate: {
        type: DataTypes.STRING(15),
        allowNull: false
      }
    },
    {}
  );

  Rating.associate = models => {
    // associations can be defined here
    Rating.belongsTo(models.User, {
      foreignKey: "createdUserId",
      as: "owner"
    });
    Rating.belongsTo(models.Courses, {
      foreignKey: "courseId",
      as: "ownerCourse"
    });
  };

  return Rating;
};
