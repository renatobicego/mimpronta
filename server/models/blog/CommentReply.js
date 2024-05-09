const { Schema, model } = require("mongoose");

const CommentReplySchema = Schema({
    name: {
        type: String,
        required: [true, 'Nombre del autor obligatorio']
    },
    text: {
        type: String,
        required: [true, 'Texto del comentario obligatorio']
    },
})

module.exports = model('CommentReply', CommentReplySchema)