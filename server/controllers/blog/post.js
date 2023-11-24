const { borrarArchivoFirebase } = require("../../helpers");
const { Post, Author, Image, Paragraph, CategoryBlog } = require("../../models");

const blogPost = async (req, res) => {
  let data = req.body;

  try {
    if (!data.author._id) {
      const newAuthor = new Author({
        name: data.author.name,
        picture: data.author.picture,
      });
      data.author = await newAuthor.save();
    }

    const bodyPromises = data.body.map(async (paragraph) => {
      if (paragraph.imgParagraph?.src.length > 2) {
        const newImage = new Image(paragraph.imgParagraph);
        paragraph.imgParagraph = await newImage.save();
      }
      const savedParagraph = new Paragraph(paragraph);
      return await savedParagraph.save();
    });

    data.body = await Promise.all(bodyPromises);

    const imgPost = new Image(data.imgPost)
    data.imgPost = await imgPost.save()

    const post = new Post(data);

    await post.save();
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const blogPut = async (req, res) => {
  const { id } = req.params;
  const { _id, ...rest } = req.body;

  try {
    
    if (!rest.author._id) {
      const newAuthor = new Author({
        name: rest.author.name,
        picture: rest.author.picture,
      });
      rest.author = await newAuthor.save();
    }else {
      await Author.findByIdAndUpdate(rest.author._id, rest.author)
    }

    const bodyPromises = rest.body.map(async (paragraph) => {
      if (paragraph.imgParagraph) {
        const id = paragraph.imgParagraph._id
        await Image.findByIdAndUpdate(id, paragraph.imgParagraph)
      }
      return await Paragraph.findByIdAndUpdate(paragraph._id, paragraph);
    });

    rest.body = await Promise.all(bodyPromises);
    if(rest.imgPost){
      await Image.findByIdAndUpdate(rest.imgPost._id, rest.imgPost)
    }

    const post = await Post.findByIdAndUpdate(id, rest);
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const blogGet = async (req, res) => {
  // Limitar respuesta
  const { limit = 6, from = 0 } = req.query;

  try {
    // Query
    const [total, posts] = await Promise.all([
      Post.countDocuments(),
      Post.find()
        .skip(Number(from))
        .limit(Number(limit))
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

// const noticiaGetPorId = async (req, res) => {
//   // Obtener id
//   const { id } = req.params;

//   try {
//     // Query
//     const noticia = await Noticia.findById(id)
//       .populate("imgPortada", ["url", "epigrafe"])
//       .populate("categoria", "nombre")
//       .populate("autor", "nombre_apellido")
//       .populate({
//         path: "cuerpo",
//         select: ["titulo", "texto"],
//         populate: {
//           path: "imagenes",
//           select: ["url", "epigrafe"],
//         },
//       })
//       .lean();

//     return res.json({
//       noticia,
//     });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// };

const blogGetByTitle = async (req, res) => {
  const title = decodeURIComponent(req.params.title);
  try {
    // Query
    const post = await Post.findOne({ title })
      .populate("imgPost", ["src", "epigraph"])
      .populate("category", "name")
      .populate("author", ["name", "picture"])
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

module.exports = {
  blogPost,
  blogPut,
  blogGet,
  blogGetBySearch,
  blogGetByTitle,
  blogDelete,
  categoriesGet,
  blogGetByCategory
};
