const postController = require('./post')
const imgParagraphController = require('./imgParagraph')
const paragraphController = require('./paragraph')

module.exports = {
    ...postController,
    ...imgParagraphController, 
    ...paragraphController
}