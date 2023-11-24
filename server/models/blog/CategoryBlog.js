const { Schema, model } = require("mongoose");


const CategoryBlogSchema = Schema({
    name: {
        type: String,
        required: [true, 'Nombre categoria obligatoria']
    }
})

module.exports = model('CategoryBlog', CategoryBlogSchema)