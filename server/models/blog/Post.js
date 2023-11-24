const { Schema, model } = require("mongoose");


const PostSchema = Schema({
    title: {
        type: String,
        required: [true, 'Titulo obligatorio']
    },
    subtitle: {
        type: String,
        required: [true, 'Subitulo obligatorio']
    },
    body: [{
        type: Schema.Types.ObjectId,
        ref: 'Paragraph',
        required: true
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    imgPost: {
        type: Schema.Types.ObjectId,
        ref: 'Image',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryBlog',
        required: true
    }
})

module.exports = model('Post', PostSchema)