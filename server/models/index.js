const BlogModels = require('./blog')
const Server = require('./Server')

module.exports = {
    ...BlogModels,
    Server
}