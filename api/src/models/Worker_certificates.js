const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Worker_certificates = sequelize.define("worker_certificates", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    certificateLink: {
      type: DataTypes.STRING,
    },
  });
};
