const pool = require("./../utils/bd");
const T_USUARIO = "usuario";

const auth = ({usuario, password}) => 
pool
.query("SELECT idUsuario FROM ?? WHERE usuario = ? and password = ? and habilitado = 1 ", [T_USUARIO, usuario, password])
.then((result) => result)
.catch((e) => e);

module.exports = { auth };
