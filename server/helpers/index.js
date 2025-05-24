const dbValidator = require('./functions/dbValidator')
const archivosFirebase = require('./functions/archivosFirebase')

module.exports = {
    ...dbValidator,
    ...archivosFirebase,
}