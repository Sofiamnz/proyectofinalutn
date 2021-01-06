const pool = require("./../utils/bd");
const T_RESERVAS = "reservas";
const T_CABAÑAS = "cabañas";

const get = async () => {
    const query = "SELECT re.idCabañas as numeroCabaña, fechaInicio, fechaFin, precio, idReservas FROM ?? as re JOIN ?? as ca on re.idCabañas = ca.idCabañas where re.habilitado = ?";
    //objeto Row datapacket
    const params = [T_RESERVAS, T_CABAÑAS, true];
    return await pool.query(query, params);
}; 

const single = async (idReservas) => {
    const query = "SELECT re.idCabañas as numeroCabaña, fechaInicio, fechaFin, precio, idReservas FROM ?? as re JOIN ?? as ca on re.idCabañas = ca.idCabañas where re.habilitado = ? and re.idReservas = ?";
    const params = [T_RESERVAS, T_CABAÑAS, true, idReservas];
    return await pool.query(query, params);
};


module.exports = { get, single };