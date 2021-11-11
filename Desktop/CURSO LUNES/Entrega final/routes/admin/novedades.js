var express = require('express');
var router = express.Router();

var novedadesModel = require ('../../model/novedadesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
   // var novedades = await novedadesModel.getNovedades()
   var novedades
   if(req.query.q === undefined) {
     novedades = await novedadesModel.getNovedades();
   } else {
     novedades = await novedadesModel.buscarNovedades(req.query.q);
   }
  res.render('admin/novedades', {
      layout:'admin/layout',
     usuario: req.session.nombre,
     novedades, 
     is_search: req.query.q !== undefined,
     q: req.query.q
  });
});
router.get('/eliminar/:id', async (req, res, next)=> {
    var id= req.params.id;
    await novedadesModel.deleteNovedadesById(id);
  res.redirecter ('admin/novedades');

});