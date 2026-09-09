const dbValidator = require("./functions/dbValidator");
const archivosFirebase = require("./functions/archivosFirebase");
const slug = require("./functions/slug");

module.exports = {
  ...dbValidator,
  ...archivosFirebase,
  ...slug,
};
