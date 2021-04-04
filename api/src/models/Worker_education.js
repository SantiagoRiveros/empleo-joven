const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Worker_education = sequelize.define("worker_education", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institute: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    initDate: {
      type: DataTypes.DATE,
    },
    finishDate: {
      type: DataTypes.DATE,
    },
  });
};
