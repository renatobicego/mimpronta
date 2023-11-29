import Compressor from "compressorjs";

const comprimirArchivos = (file: File) => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.8,
      success(result) {
        resolve(result);
      },
      error(err) {
        reject(err);
      },
    });
  });
};

export default comprimirArchivos;
