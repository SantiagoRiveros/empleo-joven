const { Sequelize } = require("sequelize");

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

//Destructuring de los models
const {
  User,
  Company,
  Company_requests,
  Worker_certificates,
  Worker_education,
  Worker_experience,
  Worker_languages,
  Worker_skills,
} = sequelize.models;

//Relaciones de las DB
User.hasMany(Worker_certificates);
User.hasMany(Worker_education);
User.hasMany(Worker_experience);
User.hasMany(Worker_languages);
User.hasMany(Worker_skills);
User.hasMany(Company, { through: Company_requests });
Company.hasMany(User, { through: Company_requests });
Worker_certificates.belongsTo(User);
Worker_education.belongsTo(User);
Worker_experience.belongsTo(User);
Worker_languages.belongsTo(User);
Worker_skills.belongsTo(User);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { User, Account } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
