const { Schema, model } = require("mongoose");


const ImageSchema = Schema({
    src: {
        type: String,
        required: [true, 'Imagen obligatoria']
    },
    epigraph: {
        type: String,
        default: ""
    }
})

module.exports = model('Image', ImageSchema)