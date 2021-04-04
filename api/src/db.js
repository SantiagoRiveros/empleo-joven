const { Sequelize } = require("sequelize");

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { User, Account } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
