const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Worker_experience = sequelize.define("worker_experience", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    initDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finishDate: {
      type: DataTypes.DATE,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING,
    },
  });
};
