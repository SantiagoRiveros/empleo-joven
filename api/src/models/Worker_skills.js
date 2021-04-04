const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Worker_skills = sequelize.define("worker_skills", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
