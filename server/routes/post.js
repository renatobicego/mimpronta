const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validarCampos");
const {
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
  deleteComment
} = require("../controllers");
const { postExists } = require("../helpers");

const router = Router();

router.get("/", blogGet);
router.get("/categories", categoriesGet);
router.get("/authors", authorsGet);
router.get("/title/:title", blogGetByTitle);
router.get("/search", blogGetBySearch);
// router.get('/:id', [
//     check('id', 'Noticia no registrada').isMongoId(),
//     check('id').custom(existeNoticia),
//     validarCampos
// ], noticiaGetPorId)

router.get(
  "/recommended/:id",
  [check("id", "Categoría no registrada").isMongoId(), validarCampos],
  blogGetByCategory
);

router.post(
  "/",
  [
    check("password", "No tiene permitido publicar posts").equals(
      process.env.PASSWORDADMIN
    ),
    check("subtitle", "Debe agregar más texto al subtítulo").isLength({
      min: 10,
    }),
    check("body", "Debe agregar al menos un párrafo al post").isArray({
      min: 1,
    }),
    check("title", "Debe agregar más texto al título").isLength({ min: 5 }),
    check("imgPost.src", "Error en la imagen. Url no enviada").isLength({
      min: 2,
    }),
    check("date", "Fecha no enviada o en formato erróneo").exists(),
    check("author", "Autor no enviado").exists(),
    check("category", "No existe la categoría seleccionada").isMongoId(),
    validarCampos,
  ],
  blogPost
);

router.post(
  "/comment",
  [
    check("text", "Debe agregar más texto al comentario").isLength({ min: 1 }),
    check("name", "Autor del comentario no enviado").isLength({ min: 1 }),
    check("postId", "Post no existente").isMongoId(),
    validarCampos,
  ],
  postComment
);

router.delete(
  "/comment/:id",
  [
    check("id", "Comentario no encontrado").isMongoId(),
    validarCampos,
  ],
  deleteComment
);

router.delete(
  "/:id/:password",
  [
    check("password", "No tiene permitido publicar posts").equals(
      process.env.PASSWORDADMIN
    ),
    check("id", "Post no registrado").isMongoId(),
    check("id").custom(postExists),
    validarCampos,
  ],
  blogDelete
);

router.put(
  "/:id",
  [
    check("password", "No tiene permitido publicar posts").equals(
      process.env.PASSWORDADMIN
    ),
    check("subtitle", "Debe agregar más texto al subtítulo")
      .optional()
      .isLength({ min: 10 }),
    check("body", "Debe agregar al menos un párrafo al post")
      .optional()
      .isArray({ min: 1 }),
    check("title", "Debe agregar más texto al título")
      .optional()
      .isLength({ min: 5 }),
    check("imgPost.src", "Error en la imagen. Url no enviada")
      .optional()
      .isLength({ min: 2 }),
    check("category", "No existe la categoría seleccionada")
      .optional()
      .isMongoId(),
    validarCampos,
  ],
  blogPut
);

module.exports = router;
