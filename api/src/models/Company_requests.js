const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Company_requests = sequelize.define("company_requests", {
    status: {
      type: DataTypes.ENUM("awaiting", "accepted", "rejected"),
    },
  });
};
