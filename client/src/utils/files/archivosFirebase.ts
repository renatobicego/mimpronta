import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  StorageError,
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../firebase";

const uploadFileFirebase = (file: File, refRoute: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Obtener extensión de archivo (en caso de tener más de un punto, usa fileExtension.length - 1)
      const fileExtension = file.name.split(".");

      // Generar nombre único solo si es una foto
      let newFileName;
      if (
        ["jpg", "jpeg", "png"].includes(fileExtension[fileExtension.length - 1])
      ) {
        newFileName = v4() + "." + fileExtension[fileExtension.length - 1];
      } else {
        newFileName =
          (Math.random() + 1).toString(36).substring(7) + "-" + file.name;
      }

      // Crear referencia a archivo en Firebase
      const directoryRef = ref(storage, refRoute + newFileName);

      const metadata = { contentType: file.type };

      const uploadTask = uploadBytesResumable(directoryRef, file, metadata);
      uploadTask.on("state_changed", null, null, async () => {
        // Upload completed successfully, now we can get the download URL
        try {
          const downloadURL: string = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      });
    } catch (error: any) {
      console.log(error);
      reject(new Error("Error al subir el archivo: " + error.message, error));
    }
  });
};

const deleteFileFirebase = async (refRoute: string) => {
  const desertRef = ref(storage, refRoute);

  // Borrar archivo
  await deleteObject(desertRef);
};

export { uploadFileFirebase, deleteFileFirebase };
