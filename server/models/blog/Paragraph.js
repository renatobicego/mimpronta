const { Schema, model } = require("mongoose");


const ParagraphSchema = Schema({
    text: {
        type: String,
        required: [true, 'Texto obligatorio']
    },
    imgParagraph: {
        type: Schema.Types.ObjectId,
        ref: 'Image',
        default: null
    },
    subtitle: {
        type: String,
        default: ""
    }
})

module.exports = model('Paragraph', ParagraphSchema)