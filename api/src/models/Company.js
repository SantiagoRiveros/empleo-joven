const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Company = sequelize.define("company", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    identity: {
      type: DataTypes.STRING,
    },
    webpage: {
      type: DataTypes.STRING,
    },
  });
};
