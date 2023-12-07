const { Schema, model } = require("mongoose");

const CommentSchema = Schema({
    name: {
        type: String,
        required: [true, 'Nombre del autor obligatorio']
    },
    text: {
        type: String,
        required: [true, 'Texto del comentario obligatorio']
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    }
})

module.exports = model('Comment', CommentSchema)