const { unlink } = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const crypto = require('crypto');
require('dotenv').config();

// Para subir las imagenes de photo y de News debemos crear la ruta absoluta
// a cada una de sus carpetas
const photosDir = path.join(__dirname, 'static');

// Recuperamos las variables de entorno

// Función que genera un código aleatorio para validar al usuario
function generateRandomCode(length) {
    return crypto.randomBytes(length).toString('hex');
}

// Funcion que genera un error
function generateError(message, code) {
    const error = new Error(message);
    error.httpStatus = code;
    return error;
}

// Funcion que elimina una imagen del servidor
async function deletePhoto(photoName) {
    try {
        // Variable que va a guardar la ruta absoluta a la imagen que hay que borrar
        let photoPath;

        //Guardamos en la variable la foto de la noticia
        photoPath = path.join(photosDir, photoName);

        // Una vez tenemos la ruta absoluta hacia la imagen creada, la eliminamos
        await unlink(photoPath);
    } catch (error) {
        throw new Error('¡Error al procesar la imagen del servidor!');
    }
}

// Funcion que valida el esquema que se envíe
async function validateSchema(schema, data) {
    try {
        // Intenta validar los datos con el schema que pasemos por argumento
        await schema.validateAsync(data);
    } catch (error) {
        // Si se captura algun error que surja en el schema, se asigna el codigo 400 de error
        error.httpStatus = 400; // Bad Request
        throw error;
    }
}

// Exportamos las funciones
module.exports = {
    generateError,
    generateRandomCode,
    deletePhoto,
    validateSchema,
};
