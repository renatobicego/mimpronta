const { Schema, model } = require("mongoose");

const AuthorSchema = Schema({
    name: {
        type: String,
        required: [true, 'Nombre del autor obligatorio']
    },
    picture: {
        type: String,
        required: [true, 'Imagen del autor obligatoria']
    }
})

module.exports = model('Author', AuthorSchema)