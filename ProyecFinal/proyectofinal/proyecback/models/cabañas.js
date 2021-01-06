const pool = require("./../utils/bd");
const T_CABAÑAS = "cabañas";

const get = async (conditions = true) => {
    const query = "SELECT ? from ?? where ? and habilitado = true";
    const params = [T_CABAÑAS, conditions];
    return await pool.query(query, params);
}; 

const insert = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [T_CABAÑAS, obj];
    return await pool.query(query, params);
};


module.exports = { get, insert }; 