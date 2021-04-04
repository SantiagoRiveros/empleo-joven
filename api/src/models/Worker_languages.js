const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Worker_languages = sequelize.define("worker_languages", {
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    oralLevel: {
      type: DataTypes.STRING,
    },
    writenLevel: {
      type: DataTypes.STRING,
    },
  });
};
