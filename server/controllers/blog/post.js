const { borrarArchivoFirebase } = require("../../helpers");
const {
  Post,
  Author,
  Image,
  Paragraph,
  CategoryBlog,
  Comment,
  CommentReply,
} = require("../../models");

const createParagraph = async (paragraph) => {
  // Si el párrafo tiene imagen, crear la relación
  if (paragraph.imgParagraph?.src.length > 2) {
    const newImage = new Image(paragraph.imgParagraph);
    paragraph.imgParagraph = await newImage.save();
  }
  const savedParagraph = new Paragraph(paragraph);
  return await savedParagraph.save();
};

const blogPost = async (req, res) => {
  // Obtener datos
  let data = req.body;

  try {
    // Si está creando el autor, crearlo
    if (!data.author._id) {
      const newAuthor = new Author({
        name: data.author.name,
        picture: data.author.picture,
      });
      data.author = await newAuthor.save();
    }

    //Crear los párrafos
    const bodyPromises = data.body.map(async (paragraph) => {
      // Si el párrafo tiene imagen, crear la relación
      return await createParagraph(paragraph);
    });

    // Guardar los párrafos en la data
    data.body = await Promise.all(bodyPromises);

    // Crear la imagen de portada
    const imgPost = new Image(data.imgPost);
    data.imgPost = await imgPost.save();

    // Crear post
    const post = new Post(data);
    await post.save();
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const blogPut = async (req, res) => {
  // Obtener id
  const { id } = req.params;
  // Obtener datos
  const { _id, ...rest } = req.body;

  try {
    // Manejar los párrafos
    const bodyPromises = rest.body.map(async (paragraph) => {
      // Editando párrafos (se envía con el id)
      if (paragraph._id !== undefined) {
        // Tiene imagen?
        if (paragraph.imgParagraph) {
          // Si ya está creada (viene con id) actuaslizarla
          if (paragraph.imgParagraph._id) {
            const id = paragraph.imgParagraph._id;
            await Image.findByIdAndUpdate(id, paragraph.imgParagraph);
          } else {
            // Sino crearla
            const newImage = new Image(paragraph.imgParagraph);
            paragraph.imgParagraph = await newImage.save();
          }
        }
        // Actualizar párrafp
        const updatedParagraph = await Paragraph.findByIdAndUpdate(
          paragraph._id,
          paragraph
        );
        // Está borrando la imagen (dejando el párrafo sin imagen) (updatedParagraph es el valor anterior del registro)
        if (updatedParagraph.imgParagraph && !paragraph.imgParagraph) {
          await Image.findByIdAndDelete(updatedParagraph.imgParagraph._id);
        }
        return updatedParagraph;
      } else {
        //Creando el párrafo
        return await createParagraph(paragraph);
      }
    });

    // Guardar los párrafos
    rest.body = await Promise.all(bodyPromises);
    //Actualizar imagen de portada
    if (rest.imgPost) {
      await Image.findByIdAndUpdate(rest.imgPost._id, rest.imgPost);
    }

    // actualizar
    const post = await Post.findByIdAndUpdate(id, rest);

    // Obtener párrafos que fueron eliminados del post
    const paragraphsToDelete = post.body.filter(
      (postParagraph) =>
        !rest.body.some((restParagraph) =>
          restParagraph._id.equals(postParagraph)
        )
    );
    // Borrarlos y borrar si tiene imagen
    for (const paragraphToDelete of paragraphsToDelete) {
      const paragraphDeleted = await Paragraph.findByIdAndDelete(
        paragraphToDelete
      );
      if (paragraphDeleted.imgParagraph) {
        await Image.findByIdAndDelete(paragraphDeleted.imgParagraph);
      }
    }

    return res.json(post);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const blogGet = async (req, res) => {
  try {
    // Query
    const [total, posts] = await Promise.all([
      Post.countDocuments(),
      Post.find()
        .populate("imgPost", "src")
        .populate("category", "name")
        .sort({ fecha: "desc" })
        .lean(),
    ]);

    return res.json({
      total,
      posts,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const blogGetByCategory = async (req, res) => {
  // Obtener id categoria
  const { id } = req.params;

  // Limitar respuesta
  const { limit = 3, from = 0 } = req.query;

  try {
    // Query
    const posts = await Post.find({ category: id })
      .skip(Number(from))
      .limit(Number(limit))
      .populate("imgPost", "src")
      .populate("category", "name")
      .lean();

    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const blogGetByTitle = async (req, res) => {
  const title = decodeURIComponent(req.params.title);
  try {
    // Query
    const post = await Post.findOne({
      title: { $regex: title },
    })
      .populate("imgPost", ["src", "epigraph"])
      .populate("category", "name")
      .populate("author", ["name", "picture"])
      .populate({
        path: "comments",
        select: ["name", "text"],
        populate: {
          path: "replies",
          select: ["name", "text"],
        },
      })
      .populate({
        path: "body",
        select: ["subtitle", "text"],
        populate: {
          path: "imgParagraph",
          select: ["src", "epigraph"],
        },
      })
      .lean();

    return res.json(post);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const blogGetBySearch = async (req, res) => {
  const { searchTerm } = req.query;

  try {
    // Query
    const posts = await Post.find({
      title: { $regex: searchTerm, $options: "i" }, // i: insensible a mayúsculas/minúsculas
    })
      .populate("imgPost", "src")
      .populate("category", "name")
      .lean();

    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const categoriesGet = async (req, res) => {
  const categories = await CategoryBlog.find();
  return res.json(categories);
};
const authorsGet = async (req, res) => {
  const authors = await Author.find();
  return res.json(authors);
};

const deleteImage = async (id) => {
  try {
    const image = await Image.findByIdAndDelete(id);
    await borrarArchivoFirebase(image.src);
  } catch (error) {
    throw new Error(error.message);
  }
};

const blogDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete(id);

    // Borrar párrafos
    const paragraphs = post.body;
    paragraphs.forEach(async (paragraph) => {
      const deletedParagraph = await Paragraph.findByIdAndDelete(paragraph);
      // Borrar imagen si tiene
      if (deletedParagraph.imgParagraph) {
        await deleteImage(deletedParagraph.imgParagraph);
      }
    });

    //Borrar imagen de portada
    await deleteImage(post.imgPost);

    return res.json(post);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const postComment = async (req, res) => {
  // Obtener datos
  const { name, text, postId } = req.body;

  try {
    // Crear comentario
    const comment = new Comment({ name, text, post: postId });
    const CommentDb = await comment.save();

    // Actualizar comentario en el post sin cargar todo el post desde la base de datos
    await Post.updateOne({ _id: postId }, { $push: { comments: CommentDb } });

    return res.json(comment);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const postCommentReply = async (req, res) => {
  // Obtener datos
  const { name, text } = req.body;
  const { id } = req.params;
  const commentDb = await Comment.findById(id);
  if (!commentDb) {
    return res.status(400).json({ msg: "Comentario no encontrado" });
  }

  try {
    // Crear comentario
    const commentReply = new CommentReply({ name, text });
    await commentReply.save()

    // Actualizar comentario en el post sin cargar todo el post desde la base de datos
    commentDb.replies = [...commentDb.replies, commentReply];
    await commentDb.save();

    return res.json(commentDb);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params; // Assuming the Comment ID is in the URL parameters

  try {
    // Find the Comment by ID and remove it
    const deletedComment = await Comment.findByIdAndRemove(id);

    if (!deletedComment) {
      return res.status(404).json({ msg: "Comentario no encontrado" });
    }

    // Remove the Comment reference from the associated post
    const postId = deletedComment.post; // Assuming there is a 'post' field in the Comment model
    await Post.findByIdAndUpdate(postId, { $pull: { comments: id } });

    return res.json({ msg: "Comentario borrado" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteCommentReply = async (req, res) => {
  const { id, commentId } = req.params;
  try {
    // Find the Comment by ID and remove it
    
    const deletedComment = await CommentReply.findByIdAndRemove(id);

    if (!deletedComment) {
      return res.status(404).json({ msg: "Respuesta a comentario no encontrado" });
    }

    await Comment.findByIdAndUpdate(commentId, { $pull: { comments: id } });

    return res.json({ msg: "Respuesta a comentario borrado" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  blogPost,
  blogPut,
  blogGet,
  blogGetBySearch,
  blogGetByTitle,
  blogDelete,
  categoriesGet,
  blogGetByCategory,
  authorsGet,
  postComment,
  postCommentReply,
  deleteComment,
  deleteCommentReply,
};
