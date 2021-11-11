
var pool = require('./bd');
async function getNovedades () {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}
async function deleteNovedades(id) {
    var query = 'delete from novedades where id 0 ?';
    var rows = await pool.query(query);
    return rows;
}
async function buscarNovedades(busqueda) {
    var query = "select * from novedades where titulo like ? OR subtitulo like ? OR cuerpo like ?";
    var rows = await pool.query(query, ['%' + busqueda + '%', '%' + busqueda + '%', '%' + busqueda + '%']);
    return rows;
}

module.exports = { getNovedades, deleteNovedadesById, insertNovedad, getNovedadById, modificarNovedadById, buscarNovedades}