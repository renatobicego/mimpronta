const { borrarArchivoFirebase } = require("../../helpers");
const {
  Post,
  Author,
  Image,
  Paragraph,
  CategoryBlog,
  Commentary,
} = require("../../models");

const createParagraph = async(paragraph) => {
  // Si el párrafo tiene imagen, crear la relación
  if (paragraph.imgParagraph?.src.length > 2) {
    const newImage = new Image(paragraph.imgParagraph);
    paragraph.imgParagraph = await newImage.save();
  }
  const savedParagraph = new Paragraph(paragraph);
  return await savedParagraph.save();
}

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
      return await createParagraph(paragraph)
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

        
      } else {//Creando el párrafo
        return await createParagraph(paragraph)
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
    const post = await Post.findOne({ title })
      .populate("imgPost", ["src", "epigraph"])
      .populate("category", "name")
      .populate("author", ["name", "picture"])
      .populate("commentaries", ["name", "text"])
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

const postCommentary = async (req, res) => {
  // Obtener datos
  const {name, text, postId} = req.body;

  try {
    // Crear comentario
    const commentary = new Commentary({ name, text, post: postId });
    const commentaryDb = await commentary.save();

    // Actualizar comentario en el post sin cargar todo el post desde la base de datos
    await Post.updateOne(
      { _id: postId },
      { $push: { commentaries: commentaryDb } }
    );

    return res.json(commentary);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteCommentary = async (req, res) => {
  const { commentaryId } = req.params; // Assuming the commentary ID is in the URL parameters

  try {
    // Find the commentary by ID and remove it
    const deletedCommentary = await Commentary.findByIdAndRemove(commentaryId);

    if (!deletedCommentary) {
      return res.status(404).json({ msg: 'Comentario no encontrado' });
    }

    // Remove the commentary reference from the associated post
    const postId = deletedCommentary.post; // Assuming there is a 'post' field in the Commentary model
    await Post.findByIdAndUpdate(postId, { $pull: { commentaries: commentaryId } });

    return res.json({ msg: 'Comentario borrado' });
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
  postCommentary,
  deleteCommentary
};
