const { Post} = require("../../models")


const postExists = async(id) => {
    const post = await Post.findOne({_id: id})
    if(!post){
        throw new Error(`El post no existe`)
    }
} 


module.exports = {
    postExists,
}