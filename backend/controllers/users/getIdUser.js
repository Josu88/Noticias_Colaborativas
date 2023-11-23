const getDB = require('../../db/getDB');
const { generateError } = require('../../helpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getIdUser = async (req, res, next) => {
    let connection;

    try {
        // Abrimos una conexión con la base de datos
        connection = await getDB();

        // Recuperamos la contraseña
        const idUserAuth = req.userAuth.id;

        // Comprobamos que existe un usuario con ese id en la base de datos y está activo
        const [iduser] = await connection.query(
            `SELECT DISTINCT(id) FROM user WHERE id = ?`,
            [idUserAuth]
        );

        // Si no se puede obtener el iduser sacamo un error
        if (iduser.length <= 0) {
            throw generateError('idUser no encontrado', 409);
        }

        // Si ha ido todo bien hasta aqui, respondemos con el id de usuario obtenido
        res.send({
            status: 'Ok',
            data: { iduser: iduser },
        });
    } catch (error) {
        // En caso de que ocurra algun error lo pasamos
        next(error);
    } finally {
        // Finalmente, cerramos la conexion con la bbdd
        if (connection) connection.release();
    }
};

// Exportamos la funcion
module.exports = getIdUser;
